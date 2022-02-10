/* exported titleCase */
/*
return string with every word capitalized, excluding minor words, JavaScript, and API
create variable to hold title case string
make entire string lower case
create array with 'minor' words
loop through string chars
check if char is a space
if char is not a space, add it to temporary word container
if char is a space, that means all chars prior to it made a word
check if word is in minor words array
if true, check if previous word ended in a colon
if true, only add to the titleCase variable
if previous word did not end in colon, and current word is in minor word array,
  convert to lower case and add to titleCase variable
continue loop to next interation
if word is not in the minor array, check if word is Api or Javascript
if they are, convert to API or JavaScript

*/

// function titleCase(title) {
//   var titleCase = '';
//   var lowerTitle = title.toLowerCase();
//   var emptyWord = title[0].toUpperCase();
//   var minorWords = ['And', 'Or', 'But', 'A', 'An', 'The', 'As', 'At', 'By', 'For', 'In', 'Of', 'On', 'Per', 'To'];
//   for (var x = 1; x < lowerTitle.length; x++) {
//     if (lowerTitle[x] === ' ') {
//       if (minorWords.includes(emptyWord) && titleCase.length > 1 && titleCase[titleCase.length - 2] !== ':') {
//         emptyWord = emptyWord.toLowerCase();
//       }
//       titleCase += emptyWord + ' ';
//       emptyWord = '';
//       continue;
//     }
//     if (lowerTitle[x - 1] === ' ' || lowerTitle[x - 1] === '-') {
//       emptyWord += lowerTitle[x].toUpperCase();
//     } else {
//       emptyWord += lowerTitle[x];
//     }
//     if (emptyWord === 'Javascript') {
//       emptyWord = 'JavaScript';
//     } else if (emptyWord === 'Api') {
//       emptyWord = 'API';
//     }
//   }
//   titleCase += emptyWord;
//   return titleCase;
// }

function titleCase(title) {
  var lowerTitle = title.toLowerCase();
  var titleCaseArray = lowerTitle.split(': ');
  for (var x = 0; x < titleCaseArray.length; x++) {
    titleCaseArray[x] = makeTitle(titleCaseArray[x]);
  }
  for (var y = 0; y < titleCaseArray.length; y++) {
    titleCaseArray[y] = checkMinorWords(titleCaseArray[y]);
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

function checkMinorWords(string) {
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
