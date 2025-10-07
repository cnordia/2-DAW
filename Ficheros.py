with open("ejemplo.txt", "r+") as f:        #read() → lee todo o la cantidad de caracteres que le digas.
    print(f.encoding)                       #tell() → dice dónde está el cursor.
    f.write("Hola k ase")                         #seek(pos) → mueve el cursor a pos.
    f.seek(0)
    print(f.read())
    print(f.tell())
    f.seek(0)
    for i in f:
        print(i)
    
