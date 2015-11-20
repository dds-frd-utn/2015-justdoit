Grupo 4: Galeano, Guidi y Mangiantini

### API REST

Home
```
GET     localhost:8080           ->  Sitio Principal
POST    localhost:8080/login     ->  Autentificación
```

Comentarios
```
GET     localhost:8080/comentarios         ->  Obtener todos los comentario
GET     localhost:8080/comentarios/:id     ->  Obtener el comentario con dicho id
POST    localhost:8080/comentarios         ->  Crear un comentario
PUT     localhost:8080/comentarios/:id     ->  Actualizar un comentario
DELETE  localhost:8080/comentarios/:id     ->  Borrar un comentario
```

ShrTarea (tarea compartida)
```
GET     localhost:8080/shrTareas         ->  Obtener todos las tareas compartidas
GET     localhost:8080/shrTareas/:id     ->  Obtener la tarea compartida con dicho id
POST    localhost:8080/shrTareas         ->  Crear una tarea compartida
PUT     localhost:8080/shrTareas/:id     ->  Actualizar una tarea compartida
DELETE  localhost:8080/shrTareas/:id     ->  Borrar una tarea compartida
```

ShrToDoList (to-do list compartida)
```
GET     localhost:8080/shrToDoLists         ->  Obtener todas las to-do lists compartidas
GET     localhost:8080/shrToDoLists/:id     ->  Obtener la to-do list compartida con dicho id
POST    localhost:8080/shrToDoLists         ->  Crear una to-do list compartida
PUT     localhost:8080/shrToDoLists/:id     ->  Actualizar una to-do list compartida
DELETE  localhost:8080/shrToDoLists/:id     ->  Borrar una to-do list compartida
```

Tarea
```
GET     localhost:8080/tareas         ->  Obtener todos las tareas
GET     localhost:8080/tareas/:id     ->  Obtener la tarea con dicho id
POST    localhost:8080/tareas         ->  Crear una tarea
PUT     localhost:8080/tareas/:id     ->  Actualizar una tarea
DELETE  localhost:8080/tareas/:id     ->  Borrar una tarea
```

ToDoList
```
GET     localhost:8080/toDoLists               ->  Obtener todos las to-do lists
GET     localhost:8080/toDoLists/:id           ->  Obtener la to-do list con dicho id
POST    localhost:8080/toDoLists               ->  Crear una to-do list
PUT     localhost:8080/toDoLists/:id           ->  Actualizar una to-do list
DELETE  localhost:8080/toDoLists/:id           ->  Borrar una to-do list
POST    localhost:8080/toDoLists/compartir     ->  Compartir una to-do list, pasando como parametro "usuario" y "toDoList"
```

Usuario
```
GET     localhost:8080/usuarios                     ->  Obtener todos los usuarios
GET     localhost:8080/usuarios/:id                 ->  Obtener el usuario con dicho id
POST    localhost:8080/usuarios                     ->  Crear un usuario
PUT     localhost:8080/usuarios/:id                 ->  Actualizar un usuario
DELETE  localhost:8080/usuarios/:id                 ->  Borrar un usuario
GET     localhost:8080/usuarios/recientes/:id       ->  Obtener las to-do lists recientes del usuario con dicho id
GET     localhost:8080/usuarios/personales/:id      ->  Obtener las to-do lists personales del usuario con dicho id
GET     localhost:8080/usuarios/compartidas/:id     ->  Obtener las to-do lists compartidas con el usuario con dicho id
GET     localhost:8080/usuarios/completadas/:id     ->  Obtener las to-do lists completadas por el usuario con dicho id
```
