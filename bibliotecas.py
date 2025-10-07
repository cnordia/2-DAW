# -----------------------------
# Gestión de Biblioteca Digital
# -----------------------------

import json

# Funciones

def mostrar_libros(biblioteca):
    for libro in biblioteca:
        print(f"Título{libro["titulo"]} Autor {libro["autor"]} Año {libro["anio"]} Género {libro["genero"]} Prestamos {[libro["prestamos"]]}")
    # Recorre la lista y muestra la información de cada libro

def buscar_por_autor(biblioteca, autor):
    for libro in  biblioteca:
        if libro["autor"] == autor:
            print(f"El autor {autor} ha escrito {libro["titulo"]}")
    # Devuelve una lista con los títulos de un autor dado


def prestamo(biblioteca, titulo, usuario):
    """
    libroEncontrado = False
    posEncontrada = False
    for libro in biblioteca:
        if libro["titulo"] == titulo:
            libroEncontrado = True
            for us, numero in libro["prestamos"].items():
                if us == usuario:
                    libro["prestamos"][us] = numero+1
                    posEncontrada = True

            if posEncontrada == False:
                libro["prestamos"][usuario] = 1
    print(biblioteca)
    """
    # Registra un préstamo de un libro por un usuario
    print()
    for libro in biblioteca:
        if libro["titulo"] == titulo:
            libro["prestamos"][usuario] = libro["prestamos"].get(usuario, 0) + 1

    print(biblioteca)

def libro_mas_popular(biblioteca):
    # Devuelve el libro con más préstamos totales
    max = 0
    libroMaxPrestamos = ""
    for libro in biblioteca:
        sumaValoraciones = 0
        for i in libro["prestamos"].values():
                sumaValoraciones += i
        if sumaValoraciones > max:
            max = sumaValoraciones
            libroMaxPrestamos = libro["titulo"]
    
    print(f"El libro con más préstamos es {libroMaxPrestamos} con {max} préstamos")


def estadisticas_usuarios(biblioteca):
    # Devuelve un diccionario con total de préstamos por usuario
    totalPrestamos = {}
    for libros in biblioteca:
        for usuario,valor in libros["prestamos"].items():
            if usuario in totalPrestamos.keys():
                totalPrestamos[usuario] = valor+totalPrestamos[usuario]
            else:
                totalPrestamos[usuario] = valor

    print(totalPrestamos)

#Funciones de FICHEROS
def guardar_biblioteca(biblioteca, nombre_fichero):
        with open(nombre_fichero, "w") as fjson:
            json.dump(biblioteca, fjson)



# Programa principal
biblioteca = [
    {
        "titulo": "Cien años de soledad",
        "autor": "Gabriel García Márquez",
        "anio": 1967,
        "genero": "Novela",
        "prestamos": {"Juan":2}
    },
    {
        "titulo": "El Quijote",
        "autor": "Miguel de Cervantes",
        "anio": 1605,
        "genero": "Novela",
        "prestamos": {"Pepe":1, "Luis":1}
    },
    {
        "titulo": "1984",
        "autor": "George Orwell",
        "anio": 1949,
        "genero": "Novela",
        "prestamos": {"Carlos":1,"JI":2}
    },
    {
        "titulo": "Historia de España",
        "autor": "David de Vega",
        "anio": 2001,
        "genero": "Novela",
        "prestamos": {"Miguel":2, "Luis":1, "Paco":1}
    },
    {
        "titulo": "Recetas",
        "autor": "Carlos Norte",
        "anio": 2020,
        "genero": "Manual",
        "prestamos": {"Dani":2, "Carlos":1}
    }
]

def main():
    guardar_biblioteca(biblioteca, "biblioteca.json")
    # # 1. Crear biblioteca con al menos 5 libros
  
    # # 2. Mostrar todos los libros
    # mostrar_libros(biblioteca)

    # # 3. Buscar por autor (pedir al usuario un nombre)

    # buscar_por_autor(biblioteca,"George Orwell")
    # # 4. Simular préstamos
    # prestamo(biblioteca, "Recetas", "Carlos")

    # # 5. Mostrar el libro más popular
    # libro_mas_popular(biblioteca)
    # # 6. Mostrar estadísticas de usuarios
    # estadisticas_usuarios(biblioteca)

# Ejecutar programa
if __name__ == "__main__":
    main()
