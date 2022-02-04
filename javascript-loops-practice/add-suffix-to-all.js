/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var suffixes = [];
  for (var x = 0; x < words.length; x++) {
    var newWord = words[x] + suffix;
    suffixes.push(newWord);
  }
  return suffixes;
}
