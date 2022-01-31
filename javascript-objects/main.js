var student = {
  firstName: 'Luc-Ky',
  lastName: 'Khuu',
  age: 26
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = true;

student.previousOccupation = 'Lab Tech';

console.log('value of livesInIrvine:', student.livesInIrvine);

console.log('value of previousOccupation:', student.previousOccupation);

console.log('value of student object:', student);

var vehicle = {
  make: 'Toyota',
  model: 'Prius',
  year: 2011
};

vehicle['color'] = 'Gray';

vehicle['isConvertible'] = false;

console.log('value of vehicle[color]:', vehicle['color']);

console.log('value of isConvertible:', vehicle['isConvertible']);

console.log('value of vehicle object', vehicle);

var pet = {
  name: 'Dosia',
  type: 'Dog'
};

delete pet.name;

delete pet.type;

console.log('value of pet object:', pet);
