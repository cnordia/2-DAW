from django.shortcuts import render, redirect, get_object_or_404
from django.views.generic import ListView, CreateView, UpdateView, DeleteView, DetailView, FormView
from django.urls import reverse_lazy
from django.contrib import messages
from .models import Producto, Compra
from .forms import CheckoutForm

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
    template_name = 'app/comprar.html'
    context_object_name = 'productos'


class CheckoutView(FormView):
    template_name = 'app/checkout.html'
    form_class = CheckoutForm
    success_url = reverse_lazy('compra_list')

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['producto'] = get_object_or_404(Producto, pk=self.kwargs['pk'])
        return context

    def get_form_kwargs(self):
        kwargs = super().get_form_kwargs()
        kwargs['producto_id'] = self.kwargs['pk']
        return kwargs

    def form_valid(self, form):
        producto = get_object_or_404(Producto, pk=self.kwargs['pk'])
        unidades = form.cleaned_data['unidades']
        
        # Calcular importe total (IVA incluido en este ejemplo simplificado)
        importe_total = producto.precio * unidades
        
        # Crear la compra
        # NOTA: Asumimos que hay un usuario logueado. Si no, daría error.
        if self.request.user.is_authenticated:
            Compra.objects.create(
                usuario=self.request.user,
                producto=producto,
                unidades=unidades,
                importe=importe_total,
                iva=0.21 # Ejemplo estático
            )
            
            # Restar stock
            producto.unidades -= unidades
            producto.save()
            
            messages.success(self.request, f"Has comprado {unidades} de {producto.nombre} correctamente.")
        else:
            messages.error(self.request, "Debes iniciar sesión para comprar.")
            return redirect('login') # Asegúrate de tener url de login configurada o quita esto
            
        return super().form_valid(form)