/*
 *  Importo las librerias necesarias de CanJS
 */
import	'can/util/fixture'           //  can.Control - http://canjs.com/docs/can.Control.html

// Fixtures para simular el backend

var store = can.fixture.store(0, function(){});

can.fixture('GET /tareas', store.findAll);
can.fixture('GET /tareas/{id}', store.findOne);
can.fixture('POST /tareas', store.create);
can.fixture('PUT /tareas/{id}', store.update);
can.fixture('DELETE /tareas/{id}', store.destroy);