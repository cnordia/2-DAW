from django.db import models
from django.core.exceptions import ValidationError
from django.core.validators import MaxValueValidator, MinValueValidator, FileExtensionValidator
from django.contrib.auth.models import User

# Create your models here.

class VipChoices(models.TextChoices):
    ORO = 'O', 'Oro'
    PLATINO = 'P', 'Platino'
    DIAMANTE = 'D', 'Diamante'


class Usuario(models.Model):
    vip = models.CharField(max_length=1, choices=VipChoices.choices, default=VipChoices.ORO)
    saldo = models.DecimalField(validators=[MinValueValidator(0.00)], decimal_places=2, max_digits=6)
    usuario = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.usuario.username
    

class Compra(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    fecha = models.DateField(auto_now_add=True)
    unidades = models.IntegerField(validators=[MinValueValidator(0)])
    importe = models.DecimalField(validators=[MinValueValidator(0.00)], decimal_places=2, max_digits=6)
    iva = models.DecimalField(validators=[MaxValueValidator(100.00)], max_digits=5, decimal_places=2)
    producto = models.OneToOneField('Producto', on_delete=models.CASCADE)

    def __str__(self):
        return self.fecha

class Producto(models.Model):
    nombre = models.CharField(max_length=30)
    modelo = models.CharField(max_length=30)
    unidades = models.IntegerField(validators=[MinValueValidator(0)])
    precio =  models.DecimalField(validators=[MinValueValidator(0.00)], decimal_places=2, max_digits=6)
    vip = models.BooleanField(default=False)
    marca = models.ForeignKey('Marca', on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre

class Marca(models.Model):
    nombre = models.CharField(max_length=30)

    def __str__(self):
        return self.nombre