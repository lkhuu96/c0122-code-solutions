/* exported getStudentNames */
function getStudentNames(students) {
  var names = [];
  for (var x = 0; x < students.length; x++) {
    for (var keys in students[x]) {
      names.push(students[x][keys]);
    }
  }
  return names;
}
