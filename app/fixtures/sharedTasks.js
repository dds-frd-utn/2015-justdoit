/*
 *  Importo las librerias necesarias de CanJS
 */
import	'can/util/fixture'           //  can.Control - http://canjs.com/docs/can.Control.html

// Fixtures para simular el backend
can.fixture('PUT /shrTareas/{id}', function(req, res) {

	console.log(req.data)
	DB.ShrTarea.update(
		{
			_id:	req.data._id
		}
	,	{
			$set:
			{
				estado: req.data.estado
			}
		}
	,	{}
	,	function(err)
		{
			if	(err)
				res(500,'Fa Fuk')
			console.log(arguments)
			res(200,{msg:'OK'})
		}
	)

});