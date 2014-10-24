( function() {
  'use strict';

  //---------------------------------------------------------------------------------------
  // Simple Address Book Application
  //---------------------------------------------------------------------------------------

  var configuration = require('./configuration.json'),
      express = require('express'),
      winston = require('winston');

  var application = express(),
      service_handler = {};

  // initialize services handler and models configured
  Array.prototype.forEach.call( configuration.entities, function( entity ) {
    var model = require( './' + entity.name + '_model' );
    var handler = require( './' + entity.name + '_services' );
    handler.inject( model );
    service_handler[ entity.name ] = handler;
  } );

  //---------------------------------------------------------------------------------------
  // Routes
  //---------------------------------------------------------------------------------------
  application.use( /.*/, function (request, response) {
    var url_parts = request.baseUrl.split( '/');
    var service_path = url_parts[ 1 ];
    if( service_handler[ service_path ] ) {
      var result = service_handler[ service_path ].handle( url_parts[ 2 ] );
    }

    response.send(result);
  });

  //---------------------------------------------------------------------------------------
  // Initialisation
  //---------------------------------------------------------------------------------------
  application.listen( configuration.port );
  winston.info('Webserver is listening on port ' + configuration.port + '\n');

} )();