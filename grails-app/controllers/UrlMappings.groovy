class UrlMappings {

    static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        // REST uris.
        "/toDoLists"(resources:"toDoList")
        "/toDoLists/$action?/$id?" {
            controller = 'toDoList'
        }
        
        "/usuarios"(resources:"usuario")
        "/usuarios/$action?/$id?" {
            controller = 'usuario'
        }

        "/login"(controller: 'usuario', action:'login')
        "/"(view:"/index")
        "500"(view:'/error')
        "404"(view:'/notFound')
    }
}
