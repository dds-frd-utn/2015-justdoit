/*
 *  Importo las librerias necesarias de CanJS
 */
import	'can/model'				//  can.Control - http://canjs.com/docs/can.Control.html
import	'can/construct/super'	//  can.Contruct.super - http://canjs.com/docs/can.Construct.super.html

/*
 *  Creo el model generico para el resto de los models
 */
can.Model(
	'GenericModel'
,	{
		resource:	'recursopendiente'
	,	id:			'_id'
	,	findAll:	function(query)
		{
			return	this.request(
						'GET'
					,	this.resource
					,	undefined
					,	can.proxy(this.models,this)
					)
		}
	,	findOne:	function(id)
		{
			return	this.request(
						'GET'
					,	this.resource+'/'+id
					,	undefined
					,	can.proxy(this.model,this)
					)
		}
	,	update:		function(id,data)
		{
			console.log(arguments)
			return	this.request(
						'PUT'
					,	this.resource+'/'+id
					,	data
					)
		}
	,	create:		function(data)
		{
			return	this.request(
						'POST'
					,	this.resource
					,	data
					,	can.proxy(this.model,this)
					)
		}
	,	destroy:	function(id)
		{
			return	this.request(
						'DELETE'
					,	this.resource+'/'+id
					)
		}
	,	request:	function(type,url,data,transform)
		{
			var	request
			=	can.ajax(
					{
						type:	type
					,	url:	'/'+url
					,	data:	data
					}
				)

			return	(transform) ? request.pipe(transform) : request
		}
	}
,	{
		getID:	function()
		{
			return	this.attr(this.constructor.id)
		}
	}
)