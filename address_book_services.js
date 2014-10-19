( function() {
  'use strict';


  var _ = require( 'underscore');

  var addressBook;

  var handler = {
    1: numberOfWomenInAddressBook,
    2: whoIsTheOldestPersonInAddressBook,
    3: howManyDaysIsBillOlderThanPaul
  };

  function initialise( model ) {
    addressBook = model;
  }

  function handle( id ) {
    var result = handler[ id ].call();
    return id + '. ' + result + '<br/>';
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

    setModel: initialise,
    handleRequestWithId: handle

  };

} )();