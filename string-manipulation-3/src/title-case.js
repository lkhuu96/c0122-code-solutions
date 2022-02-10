/* exported titleCase */
/*
return string with every word capitalized, excluding minor words, JavaScript, and API
convert entire string into lower case letters
separate the string if it has a colon (treat a colon as a start of new sentence)
  (should return 2 arrays if there is a colon, 1 if there isn't)
pass each array through a loop that capitalizes each word
first word in string gets capitalized,
any letter after a space gets capitalized
any letter after a dash gets capitalized
every other letter is lower case
pass each array through a loop that checks for any 'minor' words, or if the word is
  javascript or api
need to create array containing 'minor' words
skip the first word of each array (first word of each sentence)
every word after gets checked and converted to lowercase if they match 'minor' word
*/

function titleCase(title) {
  var lowerTitle = title.toLowerCase();
  var titleCaseArray = lowerTitle.split(': ');
  for (var x = 0; x < titleCaseArray.length; x++) {
    titleCaseArray[x] = makeTitle(titleCaseArray[x]);
  }
  for (var y = 0; y < titleCaseArray.length; y++) {
    titleCaseArray[y] = checkSpecialWords(titleCaseArray[y]);
  }
  titleCaseArray = titleCaseArray.join(': ');
  return titleCaseArray;
}

function makeTitle(string) {
  var titleString = '';
  for (var x = 0; x < string.length; x++) {
    if (x === 0 || string[x - 1] === ' ' || string[x - 1] === '-') {
      titleString += string[x].toUpperCase();
    } else {
      titleString += string[x];
    }
  }
  return titleString;
}

function checkSpecialWords(string) {
  var minorWords = ['And', 'Or', 'But', 'A', 'An', 'The', 'As', 'At', 'By', 'For', 'In', 'Of', 'On', 'Per', 'To'];
  var split = string.split(' ');
  for (var x = 1; x < split.length; x++) {
    if (minorWords.includes(split[x])) {
      split.splice(x, 1, split[x].toLowerCase());
    }
  }
  for (var y = 0; y < split.length; y++) {
    if (split[y] === 'Javascript') {
      split.splice(y, 1, 'JavaScript');
    } else if (split[y] === 'Api') {
      split.splice(y, 1, 'API');
    }
  }
  split = split.join(' ');
  return split;
}
