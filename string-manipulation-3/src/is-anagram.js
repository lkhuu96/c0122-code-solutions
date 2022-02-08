/* exported isAnagram */
/*
need to check if both strings contain exactly the same letters
need to remove white spaces from words (for loop)
store the first word string with removed white space in one variable
store the second words string with removed white space in another variable
need an empty object to store key value (letters, amount) of first string
need another empty object to store key value of second string
loop through first string and store the letter as a key and increment its value for
  every time the same letter is added
loop through second string and store the letter as a key and increment its value for
  every time the same letter is added
compare both objects and return true if they are both strictly equal
*/

function isAnagram(firstString, secondString) {
  var firstStringNoSpace = '';
  var secondStringNoSpace = '';
  var firstStringObject = {};
  var secondStringObject = {};
  for (var x = 0; x < firstString.length; x++) {
    if (firstString[x] !== ' ') {
      firstStringNoSpace += firstString[x];
    }
  }
  for (var y = 0; y < secondString.length; y++) {
    if (secondString[y] !== ' ') {
      secondStringNoSpace += secondString[y];
    }
  }
  for (var z = 0; z < firstStringNoSpace.length; z++) {
    if (firstStringObject[firstStringNoSpace[z]] > 0) {
      firstStringObject[firstStringNoSpace[z]] += 1;
    } else {
      firstStringObject[firstStringNoSpace[z]] = 1;
    }
  }
  for (var w = 0; w < secondStringNoSpace.length; w++) {
    if (secondStringObject[secondStringNoSpace[w]] > 0) {
      secondStringObject[secondStringNoSpace[w]] += 1;
    } else {
      secondStringObject[secondStringNoSpace[w]] = 1;
    }
  }
}
