from django.urls import path
from . import views

urlpatterns = [
    path('', views.inicio ,name='inicio'),
    path('ingredientes/', views.ingredientes_list, name='ingredientes_list'),
    path('ingredientes/nuevo', views.nuevos_ingredientes, name='nuevos_ingredientes'),
    path('relaciones', views.relaciones, name='relaciones'),
    path('receta/<int:pk>', views.receta, name='receta'),
    path('receta/<int:receta_pk>/agregar_ingrediente/<int:ingrediente_pk>', views.receta_agregar_ingrediente, name='receta_agregar_ingrediente'),
    path('receta/<int:receta_pk>/eliminar_ingrediente/<int:ingrediente_pk>', views.receta_eliminar_ingrediente, name='receta_eliminar_ingrediente'),

    
]
