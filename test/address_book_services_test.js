'use strict';

var assert = require( 'assert'),
    Person = require( '../person'),
    address_book_service = require( '../questions_services' );

describe( 'AddressBookServices', function() {

  describe( 'handle', function() {

    var addressBook = {
      entries: []
    };
    addressBook.entries.push( new Person( [ 'Bill McKnight', 'Male', '16/03/77' ] ) );
    addressBook.entries.push( new Person( [ 'Paul Robinson', 'Male', '15/01/85' ] ) );
    addressBook.entries.push( new Person( [ 'Gemma Lane', 'Female', '20/11/91' ] ) );
    addressBook.entries.push( new Person( [ 'Sarah Stone', 'Female', '20/09/80' ] ) );
    addressBook.entries.push( new Person( [ 'Wes Jackson', 'Male', '14/08/74' ] ) );

    address_book_service.inject( addressBook );

    it( 'handles call with id 1 correct.', function() {
      assert.equal( address_book_service.handle( 1 ), '1. 2<br/>' );
    } );

    it( 'handles call with id 2 correct.', function() {
      assert.equal( address_book_service.handle( 2 ), '2. Wes Jackson<br/>' );
    } );

    it( 'handles call with id 3 correct.', function() {
      assert.equal( address_book_service.handle( 3 ), '3. 2862<br/>' );
    } );

  } );


} );
