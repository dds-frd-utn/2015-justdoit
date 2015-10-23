package justdoit

import grails.rest.RestfulController
import static org.springframework.http.HttpStatus.*
import grails.validation.ValidationException

class UsuarioController extends RestfulController {
    static responseFormats = ['json', 'xml']

    UsuarioController() {
        super(Usuario)
    }

    def completadas(Usuario usuario) {
        if (usuario == null) {
            render(status: BAD_REQUEST)
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
}
