let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function imperativeSum(elements) {
    let total = 0;
    elements.forEach(function(n) {
        total += n;
    });
    return total;
}
console.log(imperativeSum(numbers));

function imperativeSum(elements) {
    return numbers.reduce( (total, n) => { return total += n});
}
console.log(imperativeSum(numbers));

let states = ["Imo", "Abia", "Ebonyi", "Akwa Ibom", "Enugu"];


function imperativeLengths(elements) {
    let lengths = {};
    elements.forEach(function(element) {
        lengths[element] = element.length;
    });
    return lengths;
}
console.log(imperativeLengths(states));

let school = ["Vilac", "Corona", "Green Springs", "Abba's Heart"];
let lengths = {};
lengths[school] = school.length;