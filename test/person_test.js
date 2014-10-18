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
  } );


  describe( 'getAge', function() {
    it( 'should calculate the correct age.', function() {
      var aPerson = new Person( [ 'Name', 'Male', '14/08/74' ] );
      assert.equal( aPerson.getAge(), 40 );
    } );
  } );
} );
