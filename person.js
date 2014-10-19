'use strict';

var moment = require( 'moment'),
    assert = require( 'assert' );

function Person( personArray ) {
  //TODO: should be discussed if the use of assertions should be used in production
  assert( personArray, 'Person constructor: no data given!' );
  assert( personArray.length === 3, 'Person constructor: insufficient data given!' );
  assert( personArray[ 1 ].trim() === 'Male' || personArray[ 1 ].trim() === 'Female' ,
    'Person constructor: wrong gender given!' );

  this.name = personArray[ 0 ].trim();
  this.gender = personArray[ 1 ].trim() == 'Male' ? 1 : 0;
  this.birthday = moment( personArray[ 2 ].trim(), 'DD/MM/YY' );

  assert( this.birthday.isValid() , 'Person constructor: invalid date given!' );
  assert( this.birthday.diff( moment() ) <= 0, 'Person constructor: person is not yet alive!' );
}

Person.prototype.isFemale = function() {
  return this.gender === 0;
};

Person.prototype.getAge = function() {
  return moment().diff( this.birthday, 'years' );
};

Person.prototype.getName = function() {
  return this.name;
};

Person.prototype.getBirthday = function() {
  return this.birthday;
};

//---------------------------------------------------------------------------------------
// Exports
//---------------------------------------------------------------------------------------

module.exports = Person;