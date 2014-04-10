define([
	'amd-loader',
	'rcu.amd',
	'load',
	'build'
], function (
	amdLoader,
	rcu,
	load,
	build
) {

	'use strict';

	rcu.init( Ractive );

	return amdLoader( 'rvc', 'html', function( name, source, req, callback, errback, config ) {
		if ( config.isBuild ) {
			build( name, source, callback );
		} else {
			load( req, source, callback );
		}
	});

});
