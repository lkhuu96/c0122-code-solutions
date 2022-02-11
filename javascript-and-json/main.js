var bookArray = [{
  isbn: '1231237981283',
  title: 'Good Book',
  author: 'Good author'
},
{
  isbn: '12378619286491',
  title: 'Better Book',
  author: 'Better Author'
},
{
  isbn: '838162937192',
  title: 'Best Book',
  author: 'Best Author'
}];
console.log('bookArray:', bookArray);
console.log('typeof bookArray:', typeof bookArray);

var json = JSON.stringify(bookArray);
console.log('JSON bookArray:', json);
console.log('typeof JSON bookArray:', typeof json);

var jsonString = '{"id" : "831283", "name" : "Luc-Ky Khuu"}';
console.log('jsonString:', jsonString);
console.log('jsonString typeof:', typeof jsonString);

var jsonParsed = JSON.parse(jsonString);
console.log('jsonParsed:', jsonParsed);
console.log('jsonParsed typeof:', typeof jsonParsed);
