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
        username unique: true
        email email: true, unique: true
    }

    String getUsername() {
        return username
    }
    String getPassword() {
        return password
    }
    String getNombre() {
        return nombre
    }
    String getApellido() {
        return apellido
    }
    String getEmail() {
        return email
    }

    String setUsername(String s) {
        username = s
    }
    String setPassword(String s) {
        password = s
    }
    String setNombre(String s) {
        nombre = s
    }
    String setApellido(String s) {
        apellido = s
    }
    String setEmail(String s) {
        email = s
    }
}
