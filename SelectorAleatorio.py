import json, random, os

def cargar_datos(fichero):
    if not os.path.exists(fichero):
        print("Fichero no encontrado")
        return []
    try:
        with open(fichero, "r", encoding="UTF-8") as f:
            return json.load(f)
    except(FileNotFoundError, json.JSONDecodeError):
        print("")
        return []    
    except Exception as e:
        print(f"Error al cargar datos {e}") 


def guardar_datos(fichero, lSalieron, lFaltan):
    try:
        datos={}
        recorrido = (len(lSalieron)+ len(lFaltan))
        lConjunta = lSalieron+lFaltan
        for a in lConjunta:
            if a in lSalieron:
                datos[a] = True
            else:
                datos[a] = False
        with open(fichero, "w", encoding="UTF-8") as f:
            json.dump(datos, f, indent=4, ensure_ascii=False)
    except Exception as e:
        print(f"Error: No se han podido guardar los datos: {e}")

def lista_ya_salieron(datos):
    lista = []
    if not datos:
        print("No se encontraron datos")
        return lista

    for clave, valor in datos.items():
        if valor == True:
            lista.append(clave)
    return lista

def lista_faltan_salir(datos):
    lista=[]
    if not datos:
        print("No se encontraron datos")
        return lista
    
    for clave, valor in datos.items():
        if valor == False:
            lista.append(clave)
    return lista

def cambiar_de_lista(lSacarDato, lMeterDato, alumno):
    lSacarDato.remove(alumno)
    lMeterDato.append(alumno)
            

def main():
    datos = cargar_datos("alumnos.json")


    listaSalieron = lista_ya_salieron(datos)
    print(listaSalieron)
    listaFaltanxSalir = lista_faltan_salir(datos)
    menu = True
    while (menu):

        opcion = int(input("""Introduzca una opción: 
                        1- Sacar alumno aleatorio
                        2- Mirar lista de alumnos restantes por salir
                        3- Mirar lista de alumnos que ya han salido
                        4- Reiniciar tabla con todos los alumnos
                        5- Salir
        ->"""))
         
        match opcion:
            case 1:
                alumnoAleatorio = random.choice(listaFaltanxSalir)
                cambiar_de_lista(listaFaltanxSalir, listaSalieron, alumnoAleatorio)
                print(listaSalieron)
                print(f"***************{alumnoAleatorio} ha sido seleccionado****************")

            case 2: 
                for a in listaFaltanxSalir:
                    print(a)

            case 3:
                for a in listaSalieron:
                    print(a)

            case 4:
                pass

            case 5:
                 menu =False
                 guardar_datos("alumnos.json", listaSalieron, listaFaltanxSalir)

            case _:
                print("Valor no válido")




if __name__=="__main__":
    main()
