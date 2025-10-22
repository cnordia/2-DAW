import requests
import json

#https://api.deezer.com/version/service/id/method/?parameters


urlBase = "https://api.deezer.com"

def buscarArtista(nombre):
    url = (f"{urlBase}/search/artist")
    parametros = {"q":nombre, "limit":1}
    resultado = requests.get(url, params=parametros)
    return resultado.json()

def buscarTopCanciones(id_artista):
    url = (f"{urlBase}/artist/{id_artista}/top")
    parametros = {"limit":5}
    resultado = requests.get(url, params=parametros)
    return resultado.json()


def buscarCancion(nombreCancion):
    url = (f"{urlBase}/search/track")
    parametros = {"q":nombreCancion, "limit":1}
    resultado = requests.get(url, params=parametros)
    return resultado.json()


def AlbumOSingle(tituloCancion, tituloAlbum):
    if tituloCancion == tituloAlbum:
       return " es un single"
    else:
        return (f" pertenece al álbum {tituloAlbum}")
    
listaDatos =[]
def guardarDatos(lista, artista, album, cancion):
    #cantante = {"nombre":artista, "albumes":[{"title":album, "canciones":[cancion]}]}
    for cantante in lista:
        if artista == cantante["nombre"]:
            for alb in cantante["albumes"]:
                if alb["title"] == album:
                    if cancion == alb["canciones"]:
                        print("Cancion repetida")
                    else:
                        alb["canciones"].append(cancion)
                    return lista
            #Si el album no se encuentra se crea uno nuevo
            cantante["albumes"].append({"title":album, "canciones":[cancion]})
            return lista

        #Si el cantante no se encuentra en nuestra lista lo crearemos
    nuevoCantante = {"nombre":artista, "albumes":[{"title":album, "canciones":[cancion]}]}
    lista.append(nuevoCantante)
    return lista


menu = True


while (menu):
    opcion = int(input("Introduzca una de las siguientes opciones:\n" \
    "                   1- Buscar artista\n" \
    "                   2- Buscar cancion\n" \
    "                   3- Ver datos guardados\n" \
    "                   4- Salir\n->" ))
    match opcion:
        case 1:
            nombreArt = str(input("Introduzca el nombre del artista: "))
            datosArtista = buscarArtista(nombreArt)
            id = datosArtista["data"][0]["id"]
            nombreArt = datosArtista["data"][0]["name"]
            print("--------------------------------------------------")
            datosTopCanciones = buscarTopCanciones(id)
            for canciones in datosTopCanciones["data"]:
                print(f"{canciones["title"]} -> {round(canciones["duration"]/60,2)} min ,{AlbumOSingle(canciones["title"], canciones["album"]["title"])}")
                print()
                guardarDatos(listaDatos, nombreArt, canciones["album"]["title"], canciones["title"])
            print("-------------------------------------------------")

            
        case 2:
            cancion = str(input("Introduzca la canción a buscar: "))
            datosCancion = buscarCancion(cancion)
            print("--------------------------------------------------")
            print(f"{datosCancion["data"][0]["title"]} ->{round(datosCancion["data"][0]["duration"]/60,2)}min, {AlbumOSingle(datosCancion["data"][0]["title"], 
            datosCancion["data"][0]["album"]["title"])}, del cantante {datosCancion["data"][0]["artist"]["name"]}")
            guardarDatos(listaDatos, datosCancion["data"][0]["artist"]["name"], datosCancion["data"][0]["album"]["title"], cancion)
            print("--------------------------------------------------")


        case 3:
            for i in listaDatos:
                pintar = i["nombre"],i["albumes"]
                print(pintar)
                for datosAlb in i:
                    pintar += datosAlb["title"]
                    for c in datosAlb:
                        pintar+= c

        case 4:
            print("Saliendo del menú")
            menu=False
        case _:
            print("Introduzca un valor válido")