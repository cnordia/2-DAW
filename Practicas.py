#!/usr/bin/env python
""""
Pedir un número por teclado y mostrar la tabla de multiplicar

n = int(input("Número para la tabla de multiplicar: "))

for i in range(1,11):
    print(n , "x" , i ," = ", n*i)
"""
#Crea una aplicación que pida un número y calcule su factorial (El factorial de un número es el producto de todos los enteros
# entre 1 y el propio número y se representa por el número seguido de un signo de exclamación. Por ejemplo 5! = 1x2x3x4x5=120
"""
n = int(input("Introduce un número: "))
resultado = 1

for i in range(2,n+1): #En python en range el ultimo valor no se toma
    resultado*=i
    print(i)
print(f"{n}! = {resultado}")
"""

#Crea una aplicación que permita adivinar un número. En primer lugar la aplicación solicita un número entero por teclado. A continuación 
#va pidiendo números y va respondiendo si el número a adivinar es mayor o menor que el introducido. El programa termina cuando se acierta el número.
"""
n = int(input("Introduce un número: "))
n2 = int(input("Adivine el número: "))

while n != n2:

    if n2 > n:
        print("El número es menor")
    else:
        print("El número es mayor")

    n2 = int(input("Adivine el número: "))

print("Has acertado")
"""


#Programa que muestre la tabla de multiplicar de los números 1,2,3,4 y 5.
"""
for i in range(1,6):
    for x in range(1,11):
        print(f"{i} x {x} = {i*x}")
"""

#####################NOTAS####################
"""
l = [1,2,3,4,5,6]
print(l[::-1]) #Sirve para ordenar todos los elementos al reves

sorted(lista1)
[10, 20, 30, 40, 50]

sorted(lista1,reverse=True)
[50, 40, 30, 20, 10]

list(enumerate(seasons, start=1))
[(1, 'Primavera'), (2, 'Verano'), (3, 'Otoño'), (4, 'Invierno')]

"""

#Lee por teclado números y guardalo en una lista, el proceso finaliza cuando metamos un 
#número negativo. Muestra el máximo de los números guardado en la lista, muestra los números pares.
"""
n = int(input(""))
list=[]
list.append(n)

while n > 0:

    list.append(n)
    n = int(input(""))

for n in list:
    if n % 2 ==0:
        print(n)

print(max(list))
print(list)
"""

#Realizar un programa que, dada una lista, devuelva una nueva lista cuyo contenido sea igual a la original 
#pero invertida. Así, dada la lista [‘Di’, ‘buen’, ‘día’, ‘a’, ‘papa’], deberá devolver [‘papa’, ‘a’, ‘día’, ‘buen’, ‘Di’]
"""
list = ['Di', 'buen', 'dia', 'a', 'papa']
print(list[::-1])
"""

#Dada una lista de cadenas, pide una cadenena por teclado e indica si está en la lista, indica cuantas veces aparece en la
#lista, lee otra cadena y sustituye la primera por la segunda en la lista, y por último borra la cadena de la lista
"""
list=['Di', 'buen', 'dia', 'a', 'papa',"hola","papa","buen","dia"]	

cadena = input("Cadena a buscar ")

if cadena in list:
    print("Esta")
else:
    print("No esta")

print(list.count(cadena))

cadena2 = input("Otra cadena ")
pos = list.index(cadena)
list.insert(pos, cadena2)
print(list[pos])
"""

#Dado una lista, hacer un programa que indique si está ordenada o no.
"""
lista=[2,3,4,1]
lista2=lista[:]
lista.sort()
if lista==lista2:
	print("Lista ordenada")
else:
	print("Lista no ordenada")
    
"""

