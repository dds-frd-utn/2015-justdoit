/*
 *  Importo las librerias necesarias de CanJS
 */
import	'can/util/fixture'           //  can.Control - http://canjs.com/docs/can.Control.html

// Fixtures para simular el backend

can.fixture("POST /usersToDoLists",function(req, res) {
	
	DB.ShrToDoList.find(
		{}
	,	function(err, docs)
		{
			res(200,docs)
		}
	)
})