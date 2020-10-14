// all declarations are "protected"
// not injected in the global space
// because this script is loaded as a module (type=module)

var userName = "Chris";

const PI = 3.14;

const cube = n => n*n*n;

export { PI, cube };