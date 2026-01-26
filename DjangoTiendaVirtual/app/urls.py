from django.urls import path
from .views import (
    ProductoListView, ProductoCreateView, ProductoUpdateView, ProductoDeleteView,
    CompraListView, CheckoutView
)

urlpatterns = [
    # CRUD Gestión
    path('admin/productos/', ProductoListView.as_view(), name='productos'),
    path('nuevo/', ProductoCreateView.as_view(), name='nuevo_producto'),
    path('edicion/<int:pk>/', ProductoUpdateView.as_view(), name='editar_producto'),
    path('eliminar/<int:pk>/', ProductoDeleteView.as_view(), name='eliminar_producto'),

    # Compra
    path('compra/', CompraListView.as_view(), name='compra'),
    path('checkout/<int:pk>/', CheckoutView.as_view(), name='checkout'),
]