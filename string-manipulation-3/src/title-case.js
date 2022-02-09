/* exported titleCase */
/*
return string with every word capitalized, excluding minor words, JavaScript, and API
make entire string lower case
create empty string variable to hold words (temporarily)
loop through string, adding each char to a temporary word container
if there is a space, check if word is preceded by a colon
if word has colon two indexes prior, capitalize and add to new string variable
if word does not have a colon two indexes prior, check if word is in minor array
if word is in minor array, add to string variable as lowercase
coninue loop and repeat until end of string has been reached.
return the new string with title case
*/

// function titleCase(title) {
//   var titleCase = '';
//   var lowerTitle = title.toLowerCase();
//   var tempWord = '';
//   for (var x = 0; x < title.length; x++) {
//     if (title[x - 1] === ' ') {
//       if (title[x - 2] === ':') {
//         tempWord += title[x].toUpperCase();
//       }
//     }
//   }
// }
