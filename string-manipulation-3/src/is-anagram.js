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
  var firstStringNoSpace = removeWhiteSpace(firstString);
  var secondStringNoSpace = removeWhiteSpace(secondString);
  var firstStringObject = createCharObject(firstStringNoSpace);
  var secondStringObject = createCharObject(secondStringNoSpace);
  for (var key in firstStringObject) {
    if (firstStringObject[key] !== secondStringObject[key]) {
      return false;
    }
  }
  return true;
}

function removeWhiteSpace(string) {
  var noSpaceString = '';
  for (var x = 0; x < string.length; x++) {
    if (string[x] !== ' ') {
      noSpaceString += string[x];
    }
  }
  return noSpaceString;
}

function createCharObject(string) {
  var newObj = {};
  for (var y = 0; y < string.length; y++) {
    if (newObj[string[y]] > 0) {
      newObj[string[y]] += 1;
    } else {
      newObj[string[y]] = 1;
    }
  }
  return newObj;
}
