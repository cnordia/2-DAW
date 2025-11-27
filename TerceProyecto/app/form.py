from django import forms
from .models import Ingrediente, CategoriaIngrediente

class IngredienteModelForm(forms.ModelForm):
    class Meta:
        model = Ingrediente
        fields = '__all__'

class IngredienteForm(forms.Form):
    nombre = forms.CharField(max_length=40)
    categoria = forms.ModelChoiceField(queryset=CategoriaIngrediente.objects.all())
    refrigerado = forms.BooleanField() 

    def clean_categoria(self):
        categoria = self.cleaned_data.get('categoria')
        if categoria == 'categoria':
            raise forms.ValidationError('No se permite crear esa categoria')
        
        return categoria 