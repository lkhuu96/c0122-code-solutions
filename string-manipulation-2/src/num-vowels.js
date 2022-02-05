/* exported numVowels */
/*
function needs to return the number of vowels in the string
create a variable that holds the number of vowels (set it initially to 0)
create an array containing vowels to compare each character of the string to (vowels)
make the array lowercase to use strictly equal when comparing chars to vowels
check if a string is given (truthy), if so
for loop to loop through the characters in the string
nested for loop to take character and loop thorugh the vowel array to check equality
stop the string for loop at the last index of the string (string.length)
stop the vowel for loop at the last index of the vowel array (vowels.length)
if the character is a vowel, increase vowel counter by one
return the counter
*/

function numVowels(string) {
  var counter = 0;
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var lowerString = string.toLowerCase();
  for (var x = 0; x < string.length; x++) {
    for (var y = 0; y < vowels.length; y++) {
      if (lowerString[x] === vowels[y]) {
        counter++;
      }
    }
  }
  return counter;
}
