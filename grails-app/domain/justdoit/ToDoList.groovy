package justdoit

class ToDoList {
    String mensaje
    List tareas
    Date dateCreated
    Date lastUpdated

    static hasMany = [
        tareas:Tarea
    ]
    static belongsTo = [
        usuario:Usuario
    ]
}
