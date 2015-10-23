package justdoit

import grails.rest.*

@Resource(uri='/tareas', formats=['json', 'xml'])
class Tarea {
    String contenido
    Date dateCreated
    Date lastUpdated

    static belongsTo = [
        toDoList:ToDoList
    ]

    def String toString() {
        return contenido
    }
}