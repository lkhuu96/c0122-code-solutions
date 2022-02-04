/* exported setValue */
/*
replace the value of an object property with a given value
need to access the object and its targeted property
assign the new value to that targeted property
return the new object
*/

function setValue(object, key, value) {
  object[key] = value;
  return object;
}
