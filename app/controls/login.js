/*
 *  Importo las librerias necesarias de CanJS
 */
import	'can/control'				//  can.Control - http://canjs.com/docs/can.Control.html
import	'can/construct/super'		//  can.Contruct.super - http://canjs.com/docs/can.Construct.super.html
import	'can/view/stache'			//  can.Stache - http://canjs.com/docs/can.stache.html
import	'can/util/string/deparam'	//  can.deparam - http://canjs.com/docs/can.deparam.html
/* global can*/

// Importo el controlador de la aplicacion
import	'controls/home'

// Importo los estilos del login
import  'styles/login.css!'

can.Control(
	'App.Login'
,   {
		//  Incializo el controller
		init: function( element, options )
		{
			// Inserto la vista
			can.append(
				element
			,	can.view(
					'app/views/login.stache'
				)
			)
			// Busco el form
			this.$form = $('form.login');
		}
		// Escucho el evento click sobre el boton "INGRESAR"
	,   'button.login click': function(el, ev)
		{
			User.login(can.deparam(this.$form.serialize()))
				.then(
					can.proxy(this.loginSuccess)
				,	can.proxy(this.loginFail)
				);
		}
		// Si es login fue satisfactorio (HORRIBLE LO QUE SIGUE PERO NO TENIA GANAS :P)
	,	loginSuccess: function(data)
		{
			// Vacio el contenedor del login y elimino el controlador instanciado
			$container.empty()
			// Instancio el home de la app
			new App.Home(
				can.$('<div>').appendTo($container)
			,	{
					user:	data
				}
			)
			// Le aviso al header que usuario se loggeo
			Controls.Header.login(data);
			// Cambio el hash
			location.hash="#home"
		}
		// Si el login fallo
	,	loginFail: function(data)
		{
			console.log(arguments)

		}
	}
);