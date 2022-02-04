/* exported reverseWord */
/*
need to return the reverse order of the given string
go from right to left and add the character to a new variable (newWord)
starting from right is the highest index value
get last index value to start loop at
last index is string length minus one
assign the last index to a variable
going left decreases the index value by one
add the highest index value character to newWord, then add the next highest value and so on
keep adding until the index value is 0 (the beginning of the original string)
return the newWord variable from the function
*/

function reverseWord(word) {
  var newWord = '';
  var highestIndex = word.length - 1;
  for (var x = highestIndex; x >= 0; x--) {
    newWord += word[x];
  }
  return newWord;
}
