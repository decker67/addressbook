'use strict';

var assert = require( 'assert'),
    Person = require( '../person' );

describe( 'Person', function() {

  describe( 'constructor', function() {

    it( 'should create a person object with the specified values.', function() {
      var aPerson = new Person( [ 'Name', 'Male', '14/08/74' ] );
      assert.equal( aPerson.getName(), 'Name' );
      assert.equal( aPerson.isFemale(), false );
      assert.equal( aPerson.getBirthday().format( 'DD.MM.YYYY' ), '14.08.1974' );
    } );

    it( 'fails to create a person object without data.', function() {
      function throwsError() {
        new Person();
      }
      //TODO: seems not to check the exception text
      assert.throws( throwsError, assert.AssertionError, 'Person constructor: no data given!' );
    } );

    it( 'fails to create a person object with insufficient data.', function() {
      function throwsError() {
        new Person( [ 'insufficient' ]);
      }
      //TODO: seems not to check the exception text
      assert.throws( throwsError, assert.AssertionError, 'Person constructor: insufficient data given!' );
    } );

    it( 'fails to create a person object with invalid gender data.', function() {
      function throwsError() {
        new Person( [ 'Name', 'unknown', '14/08/74' ] );
      }
      //TODO: seems not to check the exception text
      assert.throws( throwsError, assert.AssertionError, 'Person constructor: wrong gender given!' );
    } );

    //TODO: it is not possible to create a birthday in the future
    xit( 'fails to create a person object with invalid birthday data.', function() {
      function throwsError() {
        new Person( [ 'Name', 'unknown', '14/08/??' ] );
      }
      //TODO: seems not to check the exception text
      assert.throws( throwsError, assert.AssertionError, 'Person constructor: person is not yet alive!' );
    } );

  } );

  describe( 'getAge', function() {
    it( 'should calculate the correct age.', function() {
      var aPerson = new Person( [ 'Name', 'Male', '14/08/74' ] );
      assert.equal( aPerson.getAge(), 40 );
    } );
  } );
} );
