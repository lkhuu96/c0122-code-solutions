/* exported reverseWords */
/*
need to reverse each word in the string making sure to keep correct casing
separate each word by space into an array (originalArray)
create an empty array for the reversed words (reversedArray)
loop through each word in the array
add each letter to a new variable (newWord)
when all letters for a word are added (stopped at array word.length), add newWord
  to reversedArray, clear newWord, and start looping next word in originalArray
once loop is finished, concatenate all words in reversed Array with each other plus
  a space

*/

function reverseWords(string) {
  var originalArray = string.split(' ');
  var reversedArray = [];
  var newWord = '';
  for (var x = 0; x < originalArray.length; x++) {
    for (var y = (originalArray[x].length - 1); y >= 0; y--) {
      newWord += originalArray[x][y];
    }
    reversedArray.push(newWord);
    newWord = '';
  }
  return reversedArray.join(' ');
}
