package justdoit

import grails.rest.RestfulController
import grails.validation.ValidationException
import static org.springframework.http.HttpStatus.*
import session.SessionManager

class UsuarioController extends RestfulController {
    static responseFormats = ['json', 'xml']

    UsuarioController() {
        super(Usuario)
    }

    def recientes(Usuario usuario) {
        if (usuario == null) {
            render(status: BAD_REQUEST, text: "Error en la petición")
            return
        }

        render(status: OK, contentType: 'application/json') {
            usuario.shrToDoLists
        }
    }

    def personales(Usuario usuario) {
        if (usuario == null) {
            render(status: BAD_REQUEST, text: "Error en la petición")
            return
        }

        render(status: OK, contentType: 'application/json') {
            usuario.shrToDoLists.findAll { shrToDoList ->
                shrToDoList.usuario == usuario
            }
        }
    }

    def compartidas(Usuario usuario) {
        if (usuario == null) {
            render(status: BAD_REQUEST, text: "Error en la petición")
            return
        }

        render(status: OK, contentType: 'application/json') {
            usuario.shrToDoLists.findAll { shrToDoList ->
                shrToDoList.usuario != usuario
            }
        }
    }

    def completadas(Usuario usuario) {
        if (usuario == null) {
            render(status: BAD_REQUEST, text: "Error en la petición")
            return
        }

        render(status: OK, contentType: 'application/json') {
            usuario.shrToDoLists.findAll { shrToDoList ->
                shrToDoList.shrTareas.every { shrTarea ->
                    shrTarea.estado
                }
            }
        }
    }

    def login() {
        def username = request.JSON?.username
        def password = request.JSON?.password

        if ((username == null) || (password == null)) {
            render(status: BAD_REQUEST, text: "Error en la petición")
            return
        }

        def usuario = Usuario.findByUsername(username)

        if (usuario == null) {
            render(status: FORBIDDEN, text: "Usuario inexistente")
            return
        }

        if (usuario.password != password) {
            render(status: FORBIDDEN, text: "Contraseña incorrecta")
            return
        }

        def smgr = new SessionManager(request.session)
        smgr.crearSesion(usuario)
        render(status: OK, contentType: 'application/json') {
            usuario
        }
    }
}
