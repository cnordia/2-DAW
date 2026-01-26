from django.db import models
from django.contrib.auth.models import User

# Create your models here.

from django.utils import timezone

class Marca(models.Model):
    nombre = models.CharField(max_length=50)

    def __str__(self):
        return self.nombre

class Producto(models.Model):
    nombre = models.CharField(max_length=100)
    modelo = models.CharField(max_length=100)
    unidades = models.PositiveIntegerField(default=0)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    vip = models.BooleanField(default=False)
    marca = models.ForeignKey(Marca, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.nombre} - {self.modelo}"

class Promocion(models.Model):
    nombre = models.CharField(max_length=100)
    codigo = models.CharField(max_length=20, unique=True)
    descuento = models.DecimalField(max_digits=5, decimal_places=2, help_text="Porcentaje de descuento)")
    fecha_inicio = models.DateField()
    fecha_fin = models.DateField()

    def __str__(self):
        return self.nombre


class Cliente(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    vip = models.BooleanField(default=False)
    saldo = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)

    def __str__(self):
        return self.user.username


class Compra(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    promocion = models.ForeignKey(Promocion, on_delete=models.SET_NULL, null=True, blank=True)
    fecha = models.DateTimeField(default=timezone.now)
    unidades = models.PositiveIntegerField(default=0)
    importe = models.DecimalField(max_digits=10, decimal_places=2)
    iva = models.DecimalField(max_digits=5, decimal_places=2, default=0.21)

    def __str__(self):
        return f"Compra: {self.id} - {self.usuario.username} - {self.producto}"