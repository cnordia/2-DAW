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

    def listar_tareas(self):
        self.listar_tareas = sorted(self.lTareas , key = lambda t: ())




#############   MAIN   ############

def main():
    pass





if __name__ == "__main__":
    main()