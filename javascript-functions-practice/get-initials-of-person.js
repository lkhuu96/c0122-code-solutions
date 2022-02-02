/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var firstName = person.firstName;
  var lastName = person.lastName;
  var firstInitial = firstName[0];
  var lastInitial = lastName[0];
  var initials = firstInitial + lastInitial;
  return initials;
}
