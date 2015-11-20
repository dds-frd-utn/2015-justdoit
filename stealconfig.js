System
	.config(
		{
			map:
			{
				'jquery/jquery':	'jquery'
			,	'controls':			'app/controls'
			,	'models':			'app/models'
			,	'views':			'app/views'
			,	'styles':			'app/styles'
			,	'fixtures':			'app/fixtures'
			}
		,	paths:
			{
				'jquery':			'node_modules/jquery/dist/jquery.min.js'
			,	'can/*' :			'node_modules/can/dist/amd/can/*.js'
			,	'bootstrap':		'node_modules/bootstrap/dist/js/bootstrap.min.js'
			,	'bootstrap.css':	'node_modules/bootstrap/dist/css/bootstrap.min.css'
			,	'fontawesome.css':	'node_modules/font-awesome/css/font-awesome.min.css'
			}
		,	ext:
			{
				'stache':	'can/view/stache/system'
			}
		}
	);