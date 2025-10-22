def compra (producto, *args):
    resultado = producto

    for p in args:
        resultado += " " + p
    
    return resultado


def alumnos(nombre="13", **kwags):
    alumnado = {}
    for clave,valor in kwags.items():
        alumnado.update({clave:valor})

    return alumnado



def main():
    print(compra("pera", "manzana", "platano"))
    print(alumnos(Paco=11, Juan=23))    


if __name__ == "__main__":
    main()