package justdoit

class ToDoListService {
    def compartir(Usuario usuario, ToDoList toDoList) {
        def shrToDoList = new ShrToDoList(usuario: usuario, toDoList: toDoList)

        toDoList.tareas.each { tarea ->
            shrToDoList.addToShrTareas(new ShrTarea(tarea: tarea))
        }

        shrToDoList.save(flush:true, failOnError: true)

        return shrToDoList
    }
}
