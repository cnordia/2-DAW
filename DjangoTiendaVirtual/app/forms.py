from django import forms
from .models import *
from django.contrib.auth.forms import AuthenticationForm


class CheckoutModelForm(forms.ModelForm):
    class Meta:
        model = Compra
        fields = ['unidades', 'iva']

    def clean_unidades(self):
        unidades = self.cleaned_data.get('unidades')
        if unidades < 1:
            raise forms.ValidationError("Seleccione las unidades o unidad a comprar")
        return unidades
    

class ClienteLoginForm(AuthenticationForm):
    def confirm_login_allowed(self, user):
        # Validaciones estándar de Django (usuario activo, contraseña bien...)
        super().confirm_login_allowed(user)

        # Si el usuario NO tiene un objeto 'cliente' asociado, fallamos.
        if not hasattr(user, 'cliente'):
            raise forms.ValidationError(
                "Este usuario no es un Cliente registrado. Acceso restringido.",
                code='no_es_cliente'
            )