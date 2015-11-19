/*
 *  Importo las librerias necesarias de CanJS
 */
import	'can/control'           //  can.Control - http://canjs.com/docs/can.Control.html
import	'can/construct/super'   //  can.Contruct.super - http://canjs.com/docs/can.Construct.super.html
import	'can/view/stache'       //  can.Stache - http://canjs.com/docs/can.stache.html
/* global can*/

can.Control(
    'App.Footer'
,   {
        init: function( element, options )
        {
            can.append(
				element
			,	can.view(
					'app/views/footer/main.stache'
				)
			)
        }
    }
);