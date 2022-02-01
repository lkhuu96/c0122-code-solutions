function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}
var minutesToSecondsResult = convertMinutesToSeconds(5);
console.log('convertMinutesToSeconds result:', minutesToSecondsResult);

function greet(name) {
  return ('Hey, ' + name);
}
var greetResult = greet('Beavis');
console.log('greet result:', greetResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}
var getAreaResult = getArea(17, 42);
console.log('getArea result:', getAreaResult);

function getFirstName(person) {
  return person.firstName;
}
var firstName = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('getFirstName result:', firstName);

function getLastElement(array) {
  var lastIndex = array.length - 1;
  var lastElement = array[lastIndex];
  return lastElement;
}
var lastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('getLastElement result:', lastElementResult);
