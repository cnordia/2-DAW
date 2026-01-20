from django.contrib import admin
from django.urls import path
from . import views


urlpatterns = [
    path('productos/', views.ProductoListView.as_view(), name='productos'),
    path('edicion/<int:pk>', views.ProductoUpdateView.as_view(), name='editar_producto'),
    path('eliminar/<int:pk>', views.ProductoDeleteView.as_view(), name='eliminar_producto'),
    path('nuevo_producto/',views.ProductoCreateView.as_view(), name='nuevo_producto'),
    path('compra/', views.ProductoCompraListView.as_view(), name='compra' )
]
