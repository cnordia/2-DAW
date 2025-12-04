from django.shortcuts import render, redirect, get_object_or_404
from .models import *
from django.forms import formset_factory, modelformset_factory
from .form import *

# Create your views here.

def inicio(request):
    return render(request, 'app/inicio.html')

def ingredientes_list(request):

    ingredientes = Ingrediente.objects.all()
    campos = [field.name for field in Ingrediente._meta.get_fields()]
    categorias = CategoriaIngrediente.objects.all()

    if not 'reset' in request.GET:
        

        cat_selecionada = request.GET.get('categoria') 

        refrigerado= request.GET.get('refrigerado')

        prod_selec = request.GET.get('nombreprod')

        if cat_selecionada:
            ingredientes = ingredientes.filter(categoria__id=cat_selecionada)
            valor_categoria = cat_selecionada

        else:
            valor_categoria = 1

        if refrigerado:
            ingredientes = ingredientes.filter(refrigerado = True)
        
        else:
             ingredientes = ingredientes.filter(refrigerado = False)

        if prod_selec:
            ingredientes = ingredientes.filter(prod_selec=ingredientes.name)
        



        return render(request, 'app/ingredientes.html', {'campos':campos, 'ingredientes':ingredientes, 
                                                        'categorias':categorias, 'valor_categoria': valor_categoria, 'refrigerado':refrigerado,
                                                        'prod_selec':prod_selec})

    else:
        return render(request, 'app/ingredientes.html', {'campos':campos, 'ingredientes':ingredientes, 'categorias':categorias})
    
# def nuevos_ingredientes(request): # Metodo Forms
#     IngredientFormSet = formset_factory(IngredienteForm, extra=3)

#     if request.method == 'POST':
#         formset = IngredientFormSet(request.POST) #Instanciamos el Formset con los datos del formulario POST
#         if formset.is_valid(): #Validamos los formularios con la validaciṕon básica y si existe un validación clean_<campo> la hará después(Esto llama a clean_<campo> en el modelo)
#             for form in formset: #Recogemos cada uno de los campos de cada formulario 
#                 nombre = form.cleaned_data.get("nombre") #En clean_data será donde serecogan los datos validados(es un diccionario)
#                 categoria = form.cleaned_data.get("categoria")
#                 refrigerado = form.cleaned_data.get("refrigerado")

#                 Ingrediente.objects.create(nombre = nombre, categoria = categoria, refrigerado = refrigerado)

#             return redirect('ingredientes')
        
#         else:
#             print(formset.errors) #Esto es lo que devuelve el raise de los clean u otros errores (como el required= true y no se pone un valor)

#     else:
#         formset = IngredientFormSet()

#     contexto = {'formularios':formset}
#     return render(request, 'app/nuevos_ingredientes.html', contexto)



def nuevos_ingredientes(request): # Metodo ModelForm
    IngredientFormSet = modelformset_factory(Ingrediente, form=IngredienteModelForm, extra=3)

    if request.method == 'POST':
        formset = IngredientFormSet(request.POST, Ingrediente.objects.none()) 
        if formset.is_valid():
            formset.save()

            return redirect('ingredientes')
        
        else:
            print(formset.errors) #Esto es lo que devuelve el raise de los clean u otros errores (como el required= true y no se pone un valor)

    else:
        formset = IngredientFormSet(Ingrediente.objects.none())

    contexto = {'formularios':formset}
    return render(request, 'app/nuevos_ingredientes.html', contexto)


def relaciones(request):
    recetas = Receta.objects.all()
    ingredientes = Ingrediente.objects.all()

    return render(request, 'app/relaciones.html', {'recetas':recetas, 'ingredientes':ingredientes})

def receta(request, pk):
    receta = get_object_or_404(Receta, pk=pk)
    ingredientes = Ingrediente.objects.all()

    if request.method == 'POST':
        formulario = IngredienteRecetaModelForm(request.POST)
        if formulario.is_valid():
            formulario.instance.receta= receta
            formulario.save()
            return redirect('receta', pk=pk)
    
    else:
        formulario = IngredienteRecetaModelForm()

    contexto = {'receta':receta, 'ingredientes':ingredientes, 'formulario':formulario}
    return render(request, 'app/receta.html', contexto)
    

def receta_eliminar_ingrediente(request, receta_pk, ingrediente_pk):
    receta = get_object_or_404(Receta, pk=receta_pk)
    ingrediente = get_object_or_404(Ingrediente, pk=ingrediente_pk)

    receta.ingredientes.remove(ingrediente)

    return redirect('receta', pk= receta_pk)

from django.views.generic import ListView, DetailView, CreateView, DeleteView
from django.urls import reverse_lazy

class IngredienteListView(ListView):
    model = Ingrediente
    template_name = 'app/ingredientes.html'
    context_object_name = 'ingredientes'

class IngredienteDetallesView(DetailView):
    model = Ingrediente
    template_name = 'app/ingrediente_detalles.html'
    context_object_name = 'ingrediente'

class IngredienteNuveoView(CreateView):
    model = Ingrediente
    #fields = '__all__' No es necesario si le pasamos el ModelForm
    form_class = IngredienteModelForm
    template_name = 'app/nuevos_ingredientes.html'
    succes_url = reverse_lazy('ingredientes_list')
    #Se envia predefinidamente el formulario con la variable llamada {{form}}


class IngredienteEliminar(DeleteView):
    model = Ingrediente
    #fields = '__all__' No es necesario si le pasamos el ModelForm
    template_name = 'app/nuevos_ingredientes'
    succes_url = reverse_lazy('ingredientes_list')