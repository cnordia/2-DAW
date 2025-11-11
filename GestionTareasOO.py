import json

class Tarea:
    def __init__(self, titulo, descripcion, prioridad, fecha_vencimiento, completada):
        self.titulo = titulo
        self.descripcion = descripcion
        self.prioridad = prioridad
        self.fecha_vencimiento = fecha_vencimiento
        self.completada = completada
    
    def marcar_completada(self):
        self.completada = True

    def actualizar(self):
        self.titulo = str(input("Introduce el nuevo titulo"))
        self.descripcion = str(input("Introduce la nueva descripcion"))
        self.prioridad = str(input("Introduce el nuevo nivel de proioridad"))
        self.fecha_vencimiento = str(input("Introduce la nueva fecha de vencimiento"))
        self.completada = bool(input("Introduce el nuevo valor sobre si esta comprobado"))


    def mostrar_informacion(self):
        return f'{self.titulo}, {self.descripcion}, {self.prioridad}, {self.fecha_vencimiento}, {self.completada}'
    


class GestorTareas():
    def __init__(self):
        self.lTareas = []

    def agregar_tarea(self, Tarea):
        self.lTareas.append(Tarea)

    def eliminar_tarea(self, tarea):
        if not tarea in self.lTareas:
            return "Tarea no encontrada"
        
        poscion = self.lTareas.index(tarea)
        del self.lTareas[poscion]
        if not tarea in self.lTareas:
            return "Tarear eliminada"
        
    def actualizar_tarea(self, tarea):
        if not tarea in self.lTareas:
            return print("Tarea no encontrada")
        
        for t in self.lTareas:
            if t == tarea:
                t.actualizar()
                return
            
    def imprimir(self):
        resultado = ""
        for i in self.lTareas:
            resultado += i.mostrar_informacion()
        return resultado

    def listar_tareas(self): #El sorted por defecto crea una nueva lista y ordena de menor a mayor todos los numeros
        valoresPrioridad = {"alta":3, "media":2, "baja":1}
        self.lTareas = sorted(self.lTareas, key=lambda t:(valoresPrioridad.get(t.prioridad.lower(), 0), t.completada  ), reverse=True)


    def guardar_tareas(self):
        with open("tareas.json", "w", encoding="utf-8") as file:
            json.dump([t.__dict__ for t in self.lTareas], file, ensure_ascii=False, indent=4)

    def cargar_tareas(self):
        try:
            with open("tareas.json", "r", encoding="utf-8") as file:
                datos = json.load(file)
                return datos
        except FileNotFoundError:
            self.guardar_tareas()
        except TypeError as e:
            print(e)

    

        



#############   MAIN   ############

def main():
    tarea1 = Tarea("tarea1", "primera tarea", "alta", "mañana", True)
    tarea2 = Tarea("tarea2", "segunda tarea", "media", "hoy", False)
    tarea3 = Tarea("tarea3", "tercera tarea", "baja", "viernes", False)
    tarea4 = Tarea("tarea4", "cuarta tarea", "alta", "jueves", False)
    tarea5 = Tarea("tarea5", "quinta tarea", "media", "lunes", True)
    tarea6 = Tarea("tarea6", "sexta tarea", "baja", "sábado", True)
    tarea7 = Tarea("tarea7", "séptima tarea", "alta", "martes", False)
    tarea8 = Tarea("tarea8", "octava tarea", "media", "domingo", False)
    
    gt = GestorTareas()
    for t in [tarea1, tarea2, tarea3, tarea4, tarea5, tarea6, tarea7, tarea8]:
        gt.agregar_tarea(t)
    gt.cargar_tareas()
    gt.listar_tareas()





if __name__ == "__main__":
    main()