/*
 *  Importo el model generico
 */
import	'models/generic'

GenericModel(
	'SharedToDoList'
,	{
		
		resource:	'shrToDoLists'
	
	,	model: function(data)
		{
			if (data.toDoList)
				data.toDoList = ToDoList.model(data.toDoList)
			
			if (data.shrTareas)
				data.shrTareas = SharedTask.models(data.shrTareas)

			if (data.comentarios)
				data.comentarios = Comment.models(data.comentarios)

			return	this._super(data)
		}

,		getUsersToDoLists: function(user)
		{
			return	this.request(
						'POST'
					,	'/usersToDoLists'
					,	{
							usuario_id:	user.id
						}
					,	can.proxy(this.models,this)
					)
		}

	,	getPersonalToDoLists: function(user)
		{
			return	can.ajax(
						{
							url:	'/usersToDoLists'
						,	type:	'POST'
						,	data:	
							{
								usuario_id:	user.id
							}
						}
					)
		}

	,	getSharedToDoLists: function(user)
		{
			return	can.ajax(
						{
							url:	'/usersToDoLists'
						,	type:	'POST'
						,	data:	
							{
								usuario_id:	user.id
							}
						}
					)
		}

	,	getCompletedToDoLists: function(user)
		{
			return	can.ajax(
						{
							url:	'/usersToDoLists'
						,	type:	'POST'
						,	data:	
							{
								usuario_id:	user.id
							}
						}
					)
		}
	}
,	{
		getToDoTitle: function()
		{
			return	this.attr('toDoList') && this.attr('toDoList').getTitle()
		}

	,	getToDoTasks: function()
		{
			return	this.attr('shrTareas')
		}

	,	getComments: function()
		{
			return	this.attr('comentarios')
		}
	}
)