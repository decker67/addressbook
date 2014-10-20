'use strict';

var phantom = require( 'phantom'),
    assert = require( 'assert' );

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

  after( function() {
    //phantom.close();
  } );

  it('should return 2 for the first question', function( done ) {
    browser.open('http://localhost:3000/questions/1', function( status ) {
      assert.equal( status, 'success' );

      setTimeout(function () {
        browser.evaluate(function inBrowser() {
          return window.document.body;
        }, function fromBrowser( result ) {
          assert.equal( result.innerHTML, '1. 2<br>' );
          //browser.exit();
          done();
        });
      }, 1000);

    });
  });

  it('should return Wes Jackson for the second question', function( done ) {
    browser.open('http://localhost:3000/questions/2', function( status ) {
      assert.equal( status, 'success' );

      setTimeout(function () {
        browser.evaluate(function inBrowser() {
          return window.document.body;
        }, function fromBrowser( result ) {
          assert.equal( result.innerHTML, '2. Wes Jackson<br>' );
          //browser.exit();
          done();
        });
      }, 1000);

    });
  });

  it('should return 2862 for the third question', function( done ) {
    browser.open('http://localhost:3000/questions/3', function( status ) {
      assert.equal( status, 'success' );

      setTimeout(function () {
        browser.evaluate(function inBrowser() {
          return window.document.body;
        }, function fromBrowser( result ) {
          assert.equal( result.innerHTML, '3. 2862<br>' );
          //browser.exit();
          done();
        });
      }, 1000);

    });
  });

});