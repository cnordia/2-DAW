    
# videojuegos = []

# nvideojuegos = int(input("Número de videojuegos: "))

# for i in range(nvideojuegos):
#     nombre = input("Nombre: ")
#     valor = int(input("Valoración: "))
#     categoria = input("Categoría: ")                                                            
#     videojuego = {"nombre": nombre, "valoracion":valor, "categoría": categoria}
#     videojuegos.append(videojuego)

# print(videojuegos)

# total = 0
# for i in videojuegos:
#     total+=i["valoracion"]

# print(f"La media es {total/nvideojuegos}")


#Con list compreshion sacar dos listas, una con los nombres de los videojuegos y otra con todas las valoraciones
# listaNombres = []
# listaNombres = [i["nombre"] for i in videojuegos]
# print(listaNombres[:])

# listaValoraciones = []
# lisatValoraciones =[i["valoracion"] for i in videojuegos]
# print(listaValoraciones[:])

asignatura1 = {"nombre": "servidor", "profesor": "JI", "horas":7}
asignatura2 = {"nombre": "cliente", "profesor": "David", "horas":8}
notas = {"mates":9,"servidor":4}

persona = {"nombre": "Carlos", "asignaturas":[asignatura1,asignatura2], "notas":notas}

alumnos = []
alumnos.append(persona)

# for i in alumnos:
#     x=list(i["notas"].values())
#     print(f"La media de las notas de {i["nombre"]} son {sum(x)/len(x)}")


#Recorrer alumnos y decir su media jutno a las asignaturas que han aprobado y las que han suspendido

for a in alumnos:
    suspensos = {asignatura:nota for asignatura, nota in a["notas"].items() if nota < 5}
    print(f"Los modulos de {a["nombre"]} suspensos son {suspensos}")
    # for asignatura, nota in a["notas"].items():
    #     if nota < 5:
    #         print("Suspensos ", asignatura,nota)
    print(f"La nota media de {a["nombre"]} es de {sum(list(a["notas"].values()))/len(list(a["notas"]))}")
