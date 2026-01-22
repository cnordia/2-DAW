from django import forms
from .models import *

# class ProductoModelForm(forms.ModelForm):
#     class Meta:
#         model = Producto
#         fields = '__all__'

class CheckoutModelForm(forms.ModelForm):
    class Meta:
        model = Compra
        fields = '__all__'