from django.urls import path
from . import views

urlpatterns = [
    path('', views.inicio ,name='inicio'),
    path('ingredientes/', views.ingredientes_list, name='ingredientes_list'),
    path('ingredientes/nuevo', views.nuevos_ingredientes, name='nuevos_ingredientes'),
    
]
