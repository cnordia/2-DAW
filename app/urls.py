from django.contrib import admin
from django.urls import path
from . import views


urlpatterns = [
    path('tienda/admin/productos', views.ProductoListView.as_view(), name='productos'),
    path('tienda/admin/productos/edicion/<int:pk>', views.ProductoUpdateView.as_view(), name='editar_producto'),
    path('tienda/admin/productos/eliminar/<int:pk>', views.ProductoDeleteView.as_view(), name='eliminar_producto'),
    path('tienda/admin/productos/nuevo_producto/',views.ProductoCreateView.as_view(), name='nuevo_producto'),
    path('tienda/compra', views.ProductoCompraListView.as_view(), name='compra' ),
    # path('tienda/checkout', views),
]
