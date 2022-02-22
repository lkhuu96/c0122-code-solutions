function ExampleConstructor() {

}
console.log('ExampleConstructor prototype:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor:', typeof ExampleConstructor);

var newEx = new ExampleConstructor();
console.log('newEx variable:', newEx);
var instanceNewEx = newEx instanceof ExampleConstructor;
console.log('instanceof newEx:', instanceNewEx);
