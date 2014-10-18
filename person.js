var moment = require( 'moment' );

function Person( personArray ) {
  this.name = personArray[ 0 ].trim();
  this.gender = personArray[ 1 ].trim() == 'Male' ? 1 : 0;
  this.birthday = moment( personArray[ 2 ].trim(), 'DD/MM/YY' );
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