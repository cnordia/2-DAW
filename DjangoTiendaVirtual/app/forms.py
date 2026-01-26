from django import forms
from .models import Producto

class CheckoutForm(forms.Form):
    unidades = forms.IntegerField(min_value=1, label="Unidades a comprar")
    
    def __init__(self, *args, **kwargs):
        self.producto_id = kwargs.pop('producto_id', None)
        super().__init__(*args, **kwargs)

    def clean_unidades(self):
        unidades = self.cleaned_data['unidades']
        producto = Producto.objects.get(id=self.producto_id)
        if unidades > producto.unidades:
            raise forms.ValidationError(f"No hay suficiente stock. Solo quedan {producto.unidades}.")
        return unidades