/*
 *  Importo el model generico
 */
import	'models/generic'

GenericModel(
	'Comment'
,	{

		resource:	'comentarios'
		
	,	model: function(data)
		{
			data.usuario = (data.usuario) ? User.model(data.usuario) : undefined

			return this._super(data);
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

		getUserFullName: function()
		{
			return	this.attr('usuario') && this.attr('usuario').getFullName()
		}

	,	getAvatar: function()
		{
			return	this.attr('usuario') && this.attr('usuario').attr('avatar')
		}

	,	getDate: function()
		{
			return	'13:19 - 30 de Abril 2015'
		}

	,	getContent: function()
		{
			return	this.attr('contenido')
		}

	}
)