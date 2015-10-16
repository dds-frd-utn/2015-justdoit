package justdoit

import grails.rest.*

@Resource(uri='/usuarios', formats=['json', 'xml'])
class Usuario {
    String username
    String email
    String password
    String nombre
    String apellido
    List toDoLists
    List shrToDoLists

    static hasMany = [
        toDoLists:ToDoList,
        shrToDoLists:ShrToDoList
    ]
    static constraints = {
        email email: true
    }
}
