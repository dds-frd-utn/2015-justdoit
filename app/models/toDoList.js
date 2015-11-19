/*
 *  Importo el model generico
 */
import	'models/generic'

GenericModel(
	'ToDoList'
,	{

		resource:	'toDoLists'
		
	,	model: function(data)
		{
			
			data.usuario = (data.usuario) ? User.model(data.usuario) : undefined

			return this._super(data);
		}

	}
,	{
		getTitle: function()
		{
			return	this.attr('mensaje')
		}
	}
)