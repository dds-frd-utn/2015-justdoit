/*
 *  Importo las librerias necesarias de CanJS
 */
import	'can/util/fixture'           //  can.Control - http://canjs.com/docs/can.Control.html

// Fixtures para simular el backend
can.fixture('POST /comentarios', function(req, res) {

	DB.Comentario.insert(
		req.data
	,	function(err, doc)
		{
			if	(err)
				res(500,'Fa Fuk')

			res(200,doc)
		}
	)

});