from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import *

# Register your models here.


# class UsuarioAdmin(UserAdmin):
#     fieldsets = 


admin.site.register(Compra)
admin.site.register(Producto)
admin.site.register(Usuario)
admin.site.register(Marca)

