'use strict';

var phantom = require( 'phantom' );

describe('Questions Service', function () {
  var browser, server;

  before( function ( done ) {
    phantom.create( function ( ph ) {
      ph.createPage( function ( tab ) {
        browser = tab;
        server = require('../address_book_server');
        done();
      });
    });
  });

  it('should return 2 for the first question', function( done ) {
    browser.open('http://localhost:3000/questions/1', function( status ) {
      setTimeout(function () {
        browser.evaluate(function inBrowser() {
          // this will be executed on a client-side
          return window.APP;
        }, function fromBrowser(result) {
          //console.log( result, server );
          // server-side asserts
          //expect(server.APP.data.name).to.equal('Alex');
          //expect(server.APP.data.secret).to.equal('Secret');
          // client-side asserts
          //expect(result.name).to.equal('Alex');
          //expect(result.secret).to.equal('Secret');
          done();
        });
      }, 1000);

    });
  });
});