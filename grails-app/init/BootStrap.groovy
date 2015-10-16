package justdoit

class BootStrap {
    def init = { servletContext ->
        /*
        def user = new Usuario(
            username: 'user',
            password: '1234',
            email: 'user@user.com',
            nombre: 'Shia',
            apellido: 'LaBeouf'
        ).save(failOnError: true)

        def user2 = new Usuario(
            username: 'user2',
            password: '12345',
            email: 'user2@user.com',
            nombre: 'Shia',
            apellido: 'LaBeouf'
        ).save(failOnError: true)

        new ToDoList(usuario: user, mensaje: 'Primera lista').addToTareas(new Tarea(contenido: "Primera tarea")).save(failOnError: true)
        new ToDoList(usuario: user2, mensaje: 'Segunda lista').addToTareas(new Tarea(contenido: "Segunda tarea")).save(failOnError: true)
        */
    }

    def destroy = {
    }
}
