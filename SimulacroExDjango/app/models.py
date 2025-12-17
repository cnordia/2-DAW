from django.db import models
from django.core.exceptions import ValidationError

# Create your models here.

class PuestosChoices(models.TextChoices):
        CAMARERO = 'CA', 'Camarero'
        COCINERO = 'CO', 'Cocinero'
        SEGURIDAD = 'SE', 'Seguridad'

class Empleado(models.Model):
    nombre = models.CharField(max_length=20) 
    dni = models.CharField(max_length=9)
    puesto = models.CharField(choices=PuestosChoices.choices, max_length=3, default=PuestosChoices.CAMARERO)
    user = models.OneToOneField('User', on_delete=models.CASCADE, verbose_name='Trabajador') #verbose_name sirve como nombre 'bonito' para los formularios

    def __str__(self):
        return self.nombre
    
    def clean(self):
        print( super().clean())
        if self.dni and len(self.dni) !=9:
            raise ValidationError({'dni':'El dni mínimo debe ser de 9 caractéres'})
        

def validar_presupuesto(valor):
     if valor <0:
          raise ValidationError('El presupuesto no puede ser negativo')

class Evento(models.Model):
    titulo = models.CharField(max_length=20)
    fecha_evento = models.DateField()
    presupuesto = models.IntegerField(validators=[validar_presupuesto])
    empleado = models.ManyToManyField(Empleado, through='Asignacion', related_name='eventos')

    def clean(self): # En modelos solo los clean a secas
        if self.presupuesto < 100:
             raise ValidationError('El presupuesto debe ser mayor a 100')
        
    def __str__(self):
         return self.titulo
        
class Asignacion(models.Model):
    empleado = models.ForeignKey(Empleado, on_delete=models.CASCADE, related_name='asignaciones')
    evento = models.ForeignKey(Evento, on_delete=models.CASCADE, related_name='asignaciones')
    horas_asignadas = models.IntegerField()
    rol_especifico = models.CharField(max_length=50)

    def __str__(self):
         return self.empleado
