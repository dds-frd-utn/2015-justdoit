package justdoit

import grails.rest.RestfulController
import grails.transaction.Transactional
import grails.validation.ValidationException
import static org.springframework.http.HttpStatus.*

class ToDoListController extends RestfulController {
    static responseFormats = ['json', 'xml']

    ToDoListController() {
        super(ToDoList)
    }

    def toDoListService

    @Transactional
    def save(ToDoList toDoList) {
        if (toDoList == null) {
            render(status: BAD_REQUEST, text: "Error en la petición")
            return
        }

        try {
            toDoList.save(flush:true, failOnError: true)
        } catch (ValidationException e) {
            render(status: BAD_REQUEST, text: "Error al crear la to-do list")
            return
        }

        try {
            toDoListService.compartir(toDoList.usuario, toDoList)
        } catch (ValidationException e) {
            render(status: BAD_REQUEST, text: "Error al compartir la to-do list")
            return
        }
        
        render(status: CREATED, contentType: 'application/json') {
            toDoList
        }
    }

    @Transactional
    def compartir() {
        def usuario = Usuario.get(request.JSON?.usuario.id)
        def toDoList = ToDoList.get(request.JSON?.toDoList.id)

        if ((usuario == null) || (toDoList == null)) {
            render(status: BAD_REQUEST, text: "Error en la petición")
            return
        }

        try {
            render(status: OK, contentType: 'application/json') {
                toDoListService.compartir(usuario, toDoList)
            }
        } catch (ValidationException e) {
            render(status: BAD_REQUEST, text: "Error al compartir la to-do list")
            return
        }
    }
}
