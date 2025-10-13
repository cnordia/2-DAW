blioteca=[]
libro = {"titulo":"1983", "asignatura":[{"lengua":2, "matematicas":5}]}
blioteca.append(libro)
for lib in blioteca:
    for i in libro["asignatura"]:
        print(i["matematicas"])