package justdoit

import grails.rest.*

@Resource(uri='/shrToDoLists', formats=['json', 'xml'])
class ShrToDoList {
    List comentarios
    List shrTareas

    static hasMany = [
        comentarios:Comentario,
        shrTareas:ShrTarea
    ]
    static belongsTo = [
        usuario:Usuario,
        toDoList:ToDoList
    ]
}
