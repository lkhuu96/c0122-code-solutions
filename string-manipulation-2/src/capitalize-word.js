/* exported capitalizeWord */
/*
function takes a string and returns a new string with only the first letter capitalized
must always return any for of "JavaScript" as "JavaScript"
check first if string is any rendition of "JavaScript"
convert all characters to lowercase first and assign it to a variable
if lowercase words are equal to 'javascript, return 'JavaScript'
if any other word, then
first index needs of string needs to be capitalized
need to store first index into new variable and use .toUpperCase()
for loop to iterate through the remaining string starting at second index
stop for loop at the last index (find last index value using string.length)
concantenate the uppercase letter and the remaining string
return the new string
*/

function capitalizeWord(word) {
  var lowerCase = word.toLowerCase();
  var upper = '';
  if (lowerCase === 'javascript') {
    return 'JavaScript';
  } else {
    upper = lowerCase[0].toUpperCase();
    for (var x = 1; x < word.length; x++) {
      upper += lowerCase[x];
    }
    return upper;
  }
}
