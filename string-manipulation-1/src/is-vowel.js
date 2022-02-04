/* exported isVowel */
/*
check if passed char is a vowel letter
vowels are a, e, i, o, and u
create list of vowels to compare charcter to
must pass if either capital or lower case
must assume char is not a vowel until proven true
  - create a variable that declares that the char is not a vowel yet (var isThisAVowel)
convert char into a lower case and store into a new variable
compare converted char to lower case alphabet
compare the lower case char to each vowel
if argument is a vowel change isThisAVowel to true
return isThisAVowel from the function
*/

function isVowel(char) {
  var isThisAVowel = false;
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var lowChar = char.toLowerCase();
  for (var x = 0; x < vowels.length; x++) {
    if (lowChar === vowels[x]) {
      isThisAVowel = true;
    }
  }
  return isThisAVowel;
}
