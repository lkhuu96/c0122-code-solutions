/* exported isPalindromic */
/*
take string and check if it is palindromic
need to remove all white space
  (loop through the string, if char is a space, skip, if not, add char to string)
need a variable holding an empty string for the original string (word)
need another variable holding an empty string for the reversed string (reverseWord)
need to reverse the string using for loop
  start from the last index (word.length - 1), add to reverse string variable and decrement
need to check if orignal string matches the reversed string
return true if word and reversed word match
false if the word and reversed word do not match.
 */

function isPalindromic(string) {
  var word = '';
  var reverseWord = '';
  var stringLength = string.length;
  for (var x = 0; x < stringLength; x++) {
    if (string[x] !== ' ') {
      word += string[x];
    }
  }
  for (var y = word.length - 1; y >= 0; y--) {
    reverseWord += word[y];
  }
  if (word === reverseWord) {
    return true;
  } else {
    return false;
  }
}
