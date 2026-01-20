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
