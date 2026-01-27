from django.urls import path
from .views import *

urlpatterns = [
    # CRUD Gestión
    path('admin/productos/', ProductoListView.as_view(), name='productos'),
    path('nuevo/', ProductoCreateView.as_view(), name='nuevo_producto'),
    path('edicion/<int:pk>/', ProductoUpdateView.as_view(), name='editar_producto'),
    path('eliminar/<int:pk>/', ProductoDeleteView.as_view(), name='eliminar_producto'),

    # Compra
    path('compra/', CompraListView.as_view(), name='compra'),
    path('checkout/<int:pk>/', checkout, name='checkout'),

    #Informes
    path('informes/', InformesListView.as_view(), name='informes'),

    #Login
    path('login/', CustomLoginView.as_view(), name='login'),
    path('logout/', CustomLogoutView.as_view(), name='logout'),

]