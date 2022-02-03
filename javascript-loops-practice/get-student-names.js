/* exported getStudentNames */
function getStudentNames(students) {
  var names = [];
  for (var x = 0; x < students.length; x++) {
    names.push(students[x].name);
  }
  return names;
}
