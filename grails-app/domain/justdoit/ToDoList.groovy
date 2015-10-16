package justdoit

class ToDoList {
    String mensaje
    List tareas

    static hasMany = [
        tareas:Tarea
    ]
    static belongsTo = [
        usuario:Usuario
    ]
}
