package justdoit

import grails.rest.RestfulController
import static org.springframework.http.HttpStatus.*
import grails.validation.ValidationException

class ToDoListController extends RestfulController {
    static responseFormats = ['json', 'xml']

    ToDoListController() {
        super(ToDoList)
    }

    def compartir() {
        def usuario = request.JSON?.usuario
        def toDoList = request.JSON?.toDoList

        if ((usuario == null) || (toDoList == null)){
            render(status: BAD_REQUEST)
            return
        }

        def shrToDoList = new ShrToDoList(usuario: usuario, toDoList: toDoList)

        toDoList.tareas.each { tarea ->
            shrToDoList.addToShrTareas(new ShrTarea(tarea: tarea))
        }

        try {
            shrToDoList.save(flush:true, failOnError: true)
        } catch (ValidationException e) {
            render(status: BAD_REQUEST)
            return
        }

        render(status: OK, contentType: 'application/json') {
            shrToDoList
        }
    }
}
