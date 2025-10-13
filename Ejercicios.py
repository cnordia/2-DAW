"""
num1 = int(input("Introduce un número: "))
num2 = int(input("Introduce el segundo número: "))

if num1 > num2:
    print("Número mayor ",num1)
    for i in range(num2, num1+1):
        print(i)
elif num1 < num2:
    print("Número menor ", num2)
    for i in range(num1, num2+1):
        print(i)
else:
    print("Son iguales")

print(f"La media es {(num1+num2)/2}")
"""

# num1 = int(input("Introduce los número que vas a introducir: "))
# l = []

# for i in range(1,num1+1):
#     n = int(input(f"º {i} número a introducir "))
#     l.append(n)
# print(l[:])

# print("La media es: ", sum(l)/len(l))

# contiene = int(input("Introduce un número para saber si lo contiene la lista: "))

# print(f"Contiene el {contiene} en la posición {l.index(contiene)}")

# print(l.sort)

# #pedir un num, buscar lista y decir posicion
# num = int(input("Escribe un número: "))
# pos = -1
# for i , numero in enumerate(l):
#     if num==num:
#         pos = i+1
#         break
# if pos == -1:
#     print("Elemento no encontrado")
# else:
#     print()

#lsit compreshion

tabla = [[1,2,3],[4,5,6],[7,8,9]]

for fila in tabla:
    for elemnto in fila:
        