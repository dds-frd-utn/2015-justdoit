/*
 *  Importo el model generico
 */
import	'models/generic'

GenericModel(
	'Task'
,	{

		resource:	'tareas'
		
	,	model: function(data)
		{
			data.toDoList = (data.toDoList) ? ToDoList.model(data.toDoList) : undefined

			return	this._super(data);
		}

	}
,	{

		getContent: function()
		{
			return	this.attr('contenido')
		}

	}
)