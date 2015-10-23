package justdoit

import grails.rest.*

@Resource(uri='/comentarios', formats=['json', 'xml'])
class Comentario {
    String contenido
    Date dateCreated
    Date lastUpdated

    static belongsTo = [
        usuario:Usuario,
        shrToDoList:ShrToDoList
    ]

    def String toString() {
        return contenido
    }
}
