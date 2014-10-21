( function() {
  'use strict';

  var _ = require( 'underscore'),
      assert = require( 'assert' );

  var addressBook;

  var handler = {
    1: numberOfWomenInAddressBook,
    2: whoIsTheOldestPersonInAddressBook,
    3: howManyDaysIsBillOlderThanPaul
  };

  function initialise( model ) {
    assert( model, 'model should not be invalid!' );
    addressBook = model;
  }

  function handleId( id ) {
    assert( id, 'id should not be invalid!' );
    var result = handler[ id ].call();
    return id + '. ' + result + '<br/>';
  }

  function handle( id ) {
    if ( id ) {
      return handleId( id );
    } else {
      return _.reduce( _.keys( handler ), function( result, id ) {
        return result + handleId( id );
      }, '');
    }
  }

  function numberOfWomenInAddressBook() {
    return _.countBy( addressBook.entries, function( person ) {
      return person.isFemale() ? 'women' : 'man';
    } )[ 'women' ];
  }

  function whoIsTheOldestPersonInAddressBook() {
    return _.max( addressBook.entries, function( person ) {
      return person.getAge();
    }).getName();
  }

  function howManyDaysIsBillOlderThanPaul() {

    function hasName( name, entry ) {
      return entry.getName().indexOf( name ) !== -1;
    }

    var bill = _.find( addressBook.entries, _.partial( hasName, 'Bill' )),
        paul = _.find( addressBook.entries, _.partial( hasName, 'Paul' ) );
    return paul.getBirthday().diff( bill.getBirthday(), 'days' );
  }

  //---------------------------------------------------------------------------------------
  // Exports
  //---------------------------------------------------------------------------------------

  module.exports = {

    inject: initialise,
    handle: handle

  };

} )();