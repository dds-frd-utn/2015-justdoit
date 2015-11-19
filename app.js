/*
 *  Importo las librerias necesarias
 */
import $ from 'jquery';		 //  jQuery - http://jquery.com/   
import 'bootstrap'			  //  Bootstrap - http://getbootstrap.com/
import 'bootstrap.css!'		 //  Bootstrap - http://getbootstrap.com/
import 'fontawesome.css!'	  	 //  FontAwesome - http://fontawesome.io/
import 'styles/reset.css!'	  
import 'styles/theme.css!'	  
import 'styles/responsive.css!' 

/*
 *  Importo la aplicacion
 */
import 'controls/header'
import 'controls/login'
import 'controls/footer'
import 'fixtures/main'

// Variable globales de referencia a los elementos principales
window.$header = can.$('header');
window.$container = can.$('section#container');
window.$footer = can.$('footer');
window.Controls = {};

// Instancio el Header
new App.Header(
	$header
);

// Variable global de referencia al controlador del header
window.Controls.Header = $header.data('controls')[0];

// Instacio el Login
new App.Login(
	can.$('<div>').appendTo($container)
);

// Instancio el Footer
new App.Footer(
	$footer
);

// Variable global de referencia al controlador del footer
window.Controls.Footer = $footer.data('controls')[0];