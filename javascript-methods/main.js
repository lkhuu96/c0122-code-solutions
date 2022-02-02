var num1 = 10;
var num2 = 39;
var num3 = 21;
var maximumValue = Math.max(num1, num2, num3);
console.log('result of maximumValue:', maximumValue);
var heroes = ['Batman', 'Black Panther', 'Spider-Man', 'Iron Man'];
var randomNumber = Math.random();
randomNumber *= heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('result of randomIndex:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('result of randomHero', randomHero);

var library = [
  {
    title: 'Harry Potter',
    author: 'J. K. Rowling'
  },
  {
    title: 'Lord of the Rings',
    author: 'J. R. R. Tolkien'
  },
  {
    title: 'Grapes of Wrath',
    author: 'John Steinbeck'
  }
];
var lastBook = library.pop();
console.log('result of lastBook:', lastBook);
var firstBook = library.shift();
console.log('result of firstBook:', firstBook);
var js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('result of library:', library);

var fullName = 'Luc-Ky Khuu';
var firstAndLastName = fullName.split(' ');
console.log('result of firstAndLastName', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('result of sayMyName:', sayMyName);
