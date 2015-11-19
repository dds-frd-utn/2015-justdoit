/*
 *  Importo el model generico
 */
import	'models/generic'

GenericModel(
	'User'
,	{
		
		resource:	'usuarios'
	,	login: function(userData)
		{
			return	this.request(
						'POST'
					,	'login'
					,	userData
					,	can.proxy(this.model,this)
					)
		}
	}
,	{

		getFullName: function()
		{
			return	this.attr('name') + ' ' + this.attr('lastName');
		}
	
	}
)