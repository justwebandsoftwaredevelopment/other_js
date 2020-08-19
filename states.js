let states = ["Imo State"];

function imperativeUrls(elements) {
    let urls = ["https://www.example.com/"];
    elements.forEach(function(element) {
    urls.push(element.toLowerCase().split(/\s+/).join("-"));
    });
    return urls;
    }
console.log(imperativeUrls(states).join(""));

states.map(state => state.toLowerCase().split(/\s+/).join('-'));