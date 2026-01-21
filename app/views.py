from django.shortcuts import render, get_object_or_404, redirect
from django.views.generic import ListView, DetailView, CreateView, DeleteView, UpdateView
from .models import *
from django.urls import reverse_lazy
from django.contrib.auth.decorators import login_required  #Al ser un decorator solo funciona en funciones
from django.contrib.auth.mixins import LoginRequiredMixin #Se implementa como herencia a las clases que lo vayan a usar
# Create your views here.

class ProductoListView(ListView):
    model = Producto
    template_name = 'app/productos.html'
    context_object_name = 'productos'

class ProductoUpdateView(UpdateView):
    model = Producto
    fields = '__all__'
    template_name = 'app/editar_producto.html'
    context_object_name = 'producto'
    success_url = reverse_lazy('productos')

class ProductoDeleteView(DeleteView):
    model = Producto
    template_name = 'app/eliminar_producto.html'
    success_url = reverse_lazy('productos')

class ProductoCreateView(CreateView):
    model = Producto
    context_object_name = 'producto'
    fields = '__all__'
    template_name = 'app/nuevo_producto.html'
    success_url = reverse_lazy('productos')

class ProductoCompraListView(ListView):
    model = Producto
    template_name = 'app/compra.html'
    context_object_name = 'productos'

    #Sirve para hacer una consulta de los datos obtenidos (un filtro)
    def get_queryset(self):
        #Esto equivale a hacer un .object.all
        queryset = super().get_queryset()

        #Esto nos sirve para obtener el valor del GET con lo que el usuario va a poner en el filtro
        nombre_filtrado = self.request.GET.get('nombre')
        modelo_filtrado = self.request.GET.get('modelo')
        precio_filtrado = self.request.GET.get('precio')
        vip_filtrado = self.request.GET.get('vip')
        marca_filtrado = self.request.GET.get('marca')
        # boton_reset = self.request.GET.get('reset')


        #En cada if comprobamos que tenga contenido y si es así hará el filtro

        # if boton_reset:
        #     return queryset

        if nombre_filtrado:
            # __icontains busca trozos de texto
            queryset = queryset.filter(nombre__icontains = nombre_filtrado)
        if modelo_filtrado and modelo_filtrado !='-':
            queryset = queryset.filter(modelo = modelo_filtrado)
        if precio_filtrado:
            # __lte (Less Than or Equal)
            queryset = queryset.filter(precio__lte = precio_filtrado)
        if vip_filtrado:
            queryset = queryset.filter(vip = vip_filtrado)
        if marca_filtrado and marca_filtrado !='-':
            queryset = queryset.filter(marca = marca_filtrado)
        
        #Devolvemos la lista que ha pasado por uno o varios filtros
        return queryset