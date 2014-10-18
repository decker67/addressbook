var fs = require('fs'),
    csv = require('fast-csv'),
    Person = require('./person');

function readEntries() {
  var entries = [];

  csv.fromPath( './data/address_book_data.csv')
    .on( 'data', function( personLine ) {
      entries.push( new Person( personLine) );
    } );
  return entries;
}

function AddressBook() {
  this.entries = readEntries();
}

//---------------------------------------------------------------------------------------
// Exports
//---------------------------------------------------------------------------------------

module.exports = new AddressBook();
