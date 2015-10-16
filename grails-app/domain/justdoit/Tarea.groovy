package justdoit

import grails.rest.*

@Resource(uri='/tareas', formats=['json', 'xml'])
class Tarea {
    String contenido

    static belongsTo = [
        toDoList:ToDoList
    ]

    def String toString() {
        return contenido
    }
}