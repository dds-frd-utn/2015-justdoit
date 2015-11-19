/*
 *  Importo las librerias necesarias de CanJS
 */
import	'can/control'		   //  can.Control - http://canjs.com/docs/can.Control.html
import	'can/construct/super'   //  can.Contruct.super - http://canjs.com/docs/can.Construct.super.html
import	'can/view/stache'	   //  can.Stache - http://canjs.com/docs/can.stache.html
/* global can*/

can.Control(
	'App.Header'
,	{
		// Inicializo el controlador
		init: function( element, options )
		{
			// Inserto la vista
			can.append(
				element
			,	can.view(
					'app/views/header/main.stache'
				)
			)
		}
		// Si se logea un usuario
	,	login: function(userdata)
		{
			// Inserto el menu horizontal
			can.append(
				this.element.find('.horizontal-menu')
			,	can.view(
					'app/views/header/menu.stache'
				)
			)
			// Inserto las opciones de usuario
			can.append(
				this.element.find('.top-nav')
			,	can.view(
					'app/views/header/user.stache'
				,	userdata
				)
			);
		}
		// Si se deslogea un usuario
	,	logout: function()
		{
			// Borro el menu horizontal
			this.element.find('.horizontal-menu').empty()
			// Inserto las opciones de usuario
			this.element.find('.top-nav').empty()
		}

	}
);