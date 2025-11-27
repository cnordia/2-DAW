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
        return f"{self.nombre}, {self.categoria}"
    
    def clean(self):
        if self.nombre.__len__ > 50:
            raise ValidationError("El nomrbe supero los caractéres")
        if self.categoria == None:
            raise ValidationError("Introduzca una categoria")
        return super().clean()
    