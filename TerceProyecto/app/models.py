from django.db import models
from django.core.exceptions import ValidationError

# Create your models here.

# class CategoriaChoices(models.Model):
#     LEGUMBRE = "LE", "Legumbres"


class CategoriaIngrediente(models.Model):
    nombre = models.CharField(max_length=50)

    def __str__(self):
        return self.nombre


class Ingrediente(models.Model):
    nombre = models.CharField(max_length=40)
    # categoria = models.CharField(max_length=2, choices=CategoriaChoices, default=CategoriaChoices.LEGUMBRE)
    categoria = models.ForeignKey(CategoriaIngrediente, on_delete=models.CASCADE)
    refrigerado = models.BooleanField()

    def __str__(self):
        return f"{self.nombre}"
    
class Receta(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    ingredientes = models.ManyToManyField(Ingrediente, related_name='recetas', through='IngredienteReceta')

    def __str__(self):
        return f"{self.nombre}"
    
    
class Medidas(models.TextChoices):
    LITROS = 'l', 'litros'
    GRAMOS = 'g', 'gramos'
    UNIDADES = 'ud', 'unidades'


class IngredienteReceta(models.Model):
    receta = models.ForeignKey(Receta, on_delete=models.CASCADE)
    ingrediente = models.ForeignKey(Ingrediente, on_delete=models.CASCADE)
    cantidad = models.IntegerField(max_length=10)
    medida = models.CharField(choices=Medidas.choices, max_length=2)

