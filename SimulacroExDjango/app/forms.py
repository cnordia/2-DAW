from .models import *
from django import forms

class EventoForm(forms.ModelForm):
    class Meta:
        model = Evento
        fields = '__all__'
        #exclude = ['campo']

    def clean_fecha_evento(self):
        fecha = self.cleaned_data.get('fecha_evento')
        if fecha:
            raise ValidationError('')
        return fecha