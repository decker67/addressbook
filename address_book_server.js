//---------------------------------------------------------------------------------------
// Simple Address Book Application
//---------------------------------------------------------------------------------------

var configuration = require( './configuration.json'),
    express = require( 'express'),
    winston = require( 'winston'),
    addressBook = require( './address_book' ),
    addressBookServices = require( './address_book_services' );

var application = express();

//---------------------------------------------------------------------------------------
// Helper Functions
//---------------------------------------------------------------------------------------
function logRequest( request ) {
  winston.info(
      'request-method="'     + request.method + '", '
    + 'request-path="'       + request.path   + '",  '
    + 'request-parameters="' + request.params.id + '"' );
}

//---------------------------------------------------------------------------------------
// Routes
//---------------------------------------------------------------------------------------
application.get( '/questions',function( request, response ) {
  logRequest( request );

  var result;

  result = addressBookServices.handleRequestWithId( '1' );
  result += addressBookServices.handleRequestWithId( '2' );
  result += addressBookServices.handleRequestWithId( '3' );

  response.send( result );
} );


application.get( '/questions/:id',function( request, response ) {
  logRequest( request );

  var result,
      questionId = request.params.id;

  result = addressBookServices.handleRequestWithId( questionId );

  response.send( result );
} );

//---------------------------------------------------------------------------------------
// Initialisation
//---------------------------------------------------------------------------------------

var port = configuration.port;

addressBookServices.setModel( addressBook );

application.listen( port );
winston.info( 'Webserver is listening on port ' + port + '\n' );