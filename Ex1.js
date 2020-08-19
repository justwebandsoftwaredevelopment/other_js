/* Write two filter functions that return the Dakotas: one using
String#includes (Section 2.5) to test for the presence of the string
“Dakota” and one using a regex that tests for the length of the split array
being 2 */

let names = ["Kensas", "Nebraska", "North Dakota", "South Dakota"];

function checkingForName(check) {
    return check.filter(element => element.includes("Dakota"));
}

console.log(checkingForName(names));

function testforLength(length) {
    return length.filter(element => element.split(/\s+/).length === 1);
}

console.log(testforLength(names));