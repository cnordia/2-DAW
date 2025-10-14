import json

canciones=[]

def cargarCanciones(can):
    try:
        with open("cancion.json", "r") as fcanciones:
            can = json.load(fcanciones)
            return can
    except FileNotFoundError:
        with open("canciones.json","w") as fcanciones:
            json.dump(can, fcanciones)
            return can
    
canciones = cargarCanciones(canciones)
def guardarCanciones(can):
    with open("canciones.json", "w") as fcanciones:
        json.dump(can, fcanciones)
        
print(guardarCanciones(canciones))
