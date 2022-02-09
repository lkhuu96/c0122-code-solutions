/* exported titleCase */
/*
return string with every word capitalized, excluding minor words, JavaScript, and API
make entire string lower case
create array with 'minor' words
loop through string chars and capitalize the first letter and every other letter
  after a space or a '-'.
split string into array using .split(' ')
loop through each item in the array.
check if array element matches minor word
if array element is minor word, make lower case unless word before it ends with colon
check if array element is javascript or api, if true then convert to JavaScript or API
concat array elements
*/

// function titleCase(title) {
//   var titleCase = title[0].toUpperCase();
//   var lowerTitle = title.toLowerCase();
//   var titleCaseArray = [];
//   for (var x = 1; x < lowerTitle.length; x++) {
//     if (lowerTitle[x - 1] === ' ' || lowerTitle[x - 1] === '-') {
//       titleCase += lowerTitle[x].toUpperCase();
//     } else {
//       titleCase += lowerTitle[x];
//     }
//   }
//   console.log(titleCase);

// }
