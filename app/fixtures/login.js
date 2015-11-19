/*
 *  Importo las librerias necesarias de CanJS
 */
import	'can/util/fixture'           //  can.Control - http://canjs.com/docs/can.Control.html

// Fixtures para simular el backend
can.fixture("POST /login",function(req, res){
	DB.Usuario.findOne(
		{
			username: req.data.username
		,	password: req.data.password
		}
	,	function (err, doc)
		{
			if	(err)
				res(500,"Da fuk")

			if	(doc)
				res(200,doc)
			else
				res(403,{msg:'Usuario o contraseña incorrecta'})
		}
	)
})