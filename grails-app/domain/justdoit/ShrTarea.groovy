package justdoit

import grails.rest.*

@Resource(uri='/shrTareas', formats=['json', 'xml'])
class ShrTarea {
    boolean estado

    static belongsTo = [
        tarea:Tarea,
        shrToDoList:ShrToDoList
    ]
}
