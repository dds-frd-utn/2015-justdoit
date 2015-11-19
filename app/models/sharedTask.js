/*
 *  Importo el model generico
 */
import	'models/generic'

GenericModel(
	'SharedTask'
,	{
		resource:	'shrTareas'
	,	model: function(data)
		{
			data.shrToDoList = (data.shrToDoList) ? SharedToDoList.model(data.tarea) : undefined
			
			data.tarea = (data.tarea) ? Task.model(data.tarea) : undefined

			return this._super(data)
		}
	,	findAll: function(query)
		{
			return	this.request(
						'GET'
					,	this.resource
					,	undefined
					,	can.proxy(this.models,this)
					)
		}
	,	findOne: function(id)
		{
			return	this.request(
						'GET'
					,	this.resource+'/'+id
					,	undefined
					,	can.proxy(this.model,this)
					)
		}
	,	update: function(id,data)
		{
			return	this.request(
						'PUT'
					,	this.resource+'/'+id
					,	data
					)
		}
	,	create: function(data)
		{
			return	this.request(
						'POST'
					,	this.resource
					,	data
					,	can.proxy(this.model,this)
					)
		}
	,	destroy: function(id)
		{
			return	this.request(
						'DELETE'
					,	this.resource+'/'+id
					)
		}
	}
,	{
		getTaskStatus: function()
		{
			return	this.attr('estado') ? 'checked' : undefined
		}

	,	getTaskContent: function()
		{
			return	this.attr('tarea') && this.attr('tarea').getContent()
		}

	,	isChecked: function()
		{
			return	this.attr('estado')
		}
	}
)