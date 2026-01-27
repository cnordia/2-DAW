from django.shortcuts import render, redirect, get_object_or_404
from django.views.generic import ListView, CreateView, UpdateView, DeleteView, DetailView, FormView
from django.urls import reverse_lazy
from django.contrib import messages
from .models import *
from .forms import *

# Create your views here.


class ProductoListView(ListView):
    model = Producto
    template_name = 'app/productos.html'
    context_object_name = 'productos'

class ProductoCreateView(CreateView):
    model = Producto
    fields = ['nombre', 'modelo', 'unidades', 'precio', 'vip', 'marca']
    template_name = 'app/formulario_producto.html'
    success_url = reverse_lazy('productos')

class ProductoUpdateView(UpdateView):
    model = Producto
    fields = ['nombre', 'modelo', 'unidades', 'precio', 'vip', 'marca']
    template_name = 'app/formulario_producto.html'
    success_url = reverse_lazy('productos')

class ProductoDeleteView(DeleteView):
    model = Producto
    template_name = 'app/eliminar_producto.html'
    success_url = reverse_lazy('productos')

# --- ZONA DE COMPRA (USUARIO) ---

class CompraListView(ListView):
    model = Producto
    template_name = 'app/compra.html'
    context_object_name = 'productos'

@login_required
def checkout(request, pk):
    producto = get_object_or_404(Producto, pk=pk)
    
    if request.method == 'POST':
        form = CheckoutModelForm(request.POST)

        if form.is_valid():
            compra = form.save(commit=False)

            compra.producto = producto
            compra.usuario = request.user

            precio_base = producto.precio * compra.unidades
            totalIVA = precio_base * (1 + compra.iva)

            compra.importe = totalIVA

            compra.save()

            return redirect('productos') #Podriamos pasarlo a un detalles compra que sería el ticket

    else:
        form = CheckoutModelForm() #Solo tiene el campo de unidades

    return render(request, 'app/compra_producto.html', {'producto':producto, 'form': form})

    
@login_required
class InformesListView(ListView):
    model = Producto
    template_name = 'app/informes.html'
    context_object_name = 'productos'

    lista_marcas = Producto.objects.values_list('marca', flat=True).distinct()

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        
        context['lista_marcas'] = Producto.objects.values_list('marca__nombre', flat=True).distinct()
        
        return context


    def get_queryset(self):
        #Esto equivale a hacer un .object.all
        queryset = super().get_queryset()

        #ESto  nos sirve para obtener el valor del GET con lo que el usuario va a poner en el filtro
        nombre_filtrado = self.request.GET.get('nombre')
        categoria_filtrado = self.request.GET.get('categoria')
        refrigerado_filtrado = self.request.GET.get('refrigerado')
        boton_reset = self.request.GET.get('reset')

        #En cada if comprobamos que tenga contenido y si es así hará el filtro

        if boton_reset:
            return queryset

        if nombre_filtrado and nombre_filtrado != '-':
            queryset = queryset.filter(nombre = nombre_filtrado)
        if refrigerado_filtrado:
            queryset = queryset.filter(refrigerado = True)
        if categoria_filtrado:
            queryset = queryset.filter(categoria = categoria_filtrado)


        #Devolvemos la lista que ha pasado de tener todos los ingredientes a pasar por uno o varios filtros y tener los que han pasado este filtro
        return queryset
    


from django.contrib.auth.views import LoginView, LogoutView

class CustomLoginView(LoginView):
    template_name = 'app/login.html'
    authentication_form = ClienteLoginForm # AQUÍ BLOQUEAMOS A LOS NO-CLIENTES
    
    # Si intentan ir al login directamente sin venir de otra página,
    # irán a 'productos' (o la url que prefieras como home).
    # Si vienen rebotados, Django ignorará esto y usará el parámetro 'next'.
    next_page = 'productos' 

class CustomLogoutView(LogoutView):
    # Al salir, redirigimos al login o a donde quieras
    next_page = 'login'