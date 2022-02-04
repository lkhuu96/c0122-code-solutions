/* exported getWords */
/*
separate each word from a given string
need to create an array containing each word in a passed string.
create an empty array to store the words
each word is separated by a " "
check if there are any words passed in argument
if there are no characters, return empty array
if there is a string, separate them into words
go through each letter of the string and store them into a variable (word), stopping at each space
  ie if the character isn't a space, add it to the word variable.
tell loop to stop at the end of the string length
store that variable into the array
clear the variable at each space
if there is a space, skip to the next iteration and continue
at the end of the loop, since there is no space after the first word, store
  the final word into the array
return the array from the function
*/

function getWords(string) {
  var word = '';
  var words = [];
  if (string.length === 0) {
    return words;
  } else {
    for (var x = 0; x < string.length; x++) {
      if (string[x] !== ' ') {
        word += string[x];
      } else {
        words.push(word);
        word = '';
      }
    }
    words.push(word);
    return words;
  }
}
