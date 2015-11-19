/*
 *  Importo las librerias necesarias de CanJS
 */
import	'can/control'		   //  can.Control - http://canjs.com/docs/can.Control.html
import	'can/construct/super'   //  can.Contruct.super - http://canjs.com/docs/can.Construct.super.html
import	'can/view/stache'	   //  can.Stache - http://canjs.com/docs/can.stache.html
/* global can*/

// Importo los estilos de las tasks
import	'styles/home.css!'
import	'styles/tasks.css!'

// Importo los modelos de la app
import	'models/main'

// Importo el controlador de los todos
import	'controls/todo'

can.Control(
	'App.Home'
,	{
		// Inicializo el controlador
		init: function( element, options )
		{
			// Elimino el fondo (horrible)
			$container.addClass('no-img')
			// Inserto la vista principal
			can.append(
				this.element
			,	can.view(
					'app/views/home/main.stache'
				)
			)
			//	Obtengo los todos y renderizo la seccion correspondiente al home
			SharedToDoList.getUsersToDoLists(this.options.user)
				.then(
					can.proxy(this.renderHome,this)
				,	can.proxy(this.renderProblem,this)
				)
			// Agrego el modal de logout
			can.append(
				this.element
			,	can.view(
					'app/views/home/logout.stache'
				)
			)
			// Agrego el modal de todos
			can.append(
				this.element
			,	can.view(
					'app/views/home/propose.stache'
				)
			)
			// Inicializo el gestor de todo
			this.todoHandler
			=	new App.ToDo(
					this.element.find('#proposeModal')
				,	{
						user:	this.options.user
					}
				)
		}

	,	renderHome: function(todos)
		{
			// Inserto la vista correspondiente al home
			can.append(
				this.element.find('#main-content .wrapper')
			,	can.view(
					'app/views/home/todo.stache'
				,	todos
				)
			)
		}

	,	renderProblem: function()
		{
			console.log("PROBLEMO",arguments)
		}

	,	'.task-check button click': function(el, ev)
		{
			var task = can.$(el).parents('li.task').data('task')
			
			task.attr('estado',	!task.attr('estado'))

			task.save()
		}

	,	'input.comment-todo keyup': function(el, ev)
		{
			if	(ev.keyCode == 13) {

				can.$(el).attr('disabled',true)
				
				Comment.create(
					{
						shr_to_do_list_id:	can.$(el).parents('.tasks-widget').data('todo').getID()
					,	usuario_id:			this.options.user.getID()
					,	contenido:			can.$(el).val()
					}
				).then(
					function(data)
					{
						can.$(el).val('')
						can.$(el).parents('.tasks-widget').data('todo').attr('comentarios').push(data)
					}
				,	can.proxy(this.renderProblem,this)
				).always(
					function()
					{
						can.$(el).attr('disabled',false)
					}
				)

			}
		}

	,	'.logout click': function()
		{
			$('#logoutModal').on('hidden.bs.modal', function () {
				// Vacio el contenedor del login y elimino el controlador instanciado
				$container.empty()
				// Instancio el home de la app
				new App.Login(
					can.$('<div>').appendTo($container)
				)
				// Le aviso al header que usuario se loggeo
				Controls.Header.logout();
				// Cambio el hash
				location.hash=""
				// Agrego el fondo
				$container.removeClass('no-img')
			})
		}

	}
);