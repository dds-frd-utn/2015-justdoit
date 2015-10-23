package justdoit

class Usuario {
    String username
    String email
    String password
    String nombre
    String apellido
    List toDoLists
    List shrToDoLists
    Date dateCreated
    Date lastUpdated

    static hasMany = [
        toDoLists:ToDoList,
        shrToDoLists:ShrToDoList
    ]
    static constraints = {
        email email: true
    }
}
