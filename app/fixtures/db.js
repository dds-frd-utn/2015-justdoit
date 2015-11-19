window.DB
=	{
		Usuario:		new Nedb()
	,	ToDoList:		new Nedb()
	,	Comentario:		new Nedb()
	,	Tarea:			new Nedb()
	,	ShrToDoList:	new Nedb()
	,	ShrTarea:		new Nedb()
	}

DB.Usuario.insert(
	[
		{
			username:	'shia'
		,	password:	'password'
		,	name:		'Shia'
		,	lastName:	'LaBeouf'
		,	avatar:		'images/shia.jpg'
		}
	,	{
			username:	'grumpy'
		,	password:	'password'
		,	name:		'Grumpy'
		,	lastName:	'Cat'
		,	avatar:		'images/grumpy.jpg'
		}
	]
,	function(err, users)
	{
		if	(err)
			throw err

		DB.ToDoList.insert(
			{
				usuario:	users[0]	
			,	mensaje:	'To-Do 1: Este es un todo de prueba!'
			}
		,	function(err, todos)
			{
				if	(err)
					throw err

				DB.Tarea.insert(
					[
						{
							contenido:		'Hacer la cosa!'
						}
					,	{
							contenido:		'Te dije que hagas la cosa!'
						}
					,	{
							contenido:		'Just Do It!!'
						}
					,	{
							contenido:		'Bueno, no lo hagas... Mentira Hazlo! Just Do It!!'
						}
					]
				,	function(err, tasks)
					{
						if	(err)
							throw err

						DB.ShrTarea.insert(
							[
								{
									tarea:				tasks[0]
								,	estado:				true
								}
							,	{
									tarea:				tasks[1]
								,	estado:				true
								}
							,	{
									tarea:				tasks[2]
								,	estado:				true
								}
							,	{
									tarea:				tasks[3]
								,	estado:				false
								}
							]
						,	function(err, sharedTasks)
							{
								if	(err)
									throw err

								DB.Comentario.insert(
									[
										{
											usuario:	users[0]
										,	contenido:	'Just Do It!'
										}
									,	{
											usuario:	users[1]
										,	contenido:	'NO'
										}
									]
								,	function(err, comments)
									{
										if	(err)
											throw err

										DB.ShrToDoList.insert(
											{
												usuario:		users[0]
											,	toDoList:		todos
											,	shrTareas:		sharedTasks
											,	comentarios:	comments
												
											}
										,	function(err, sharedToDo)
											{
												if	(err)
													throw err

												console.log("Fixtureado completo")
											}
										)
									}
								)
							}
						)
					}
				)
			}
		)
	}
)