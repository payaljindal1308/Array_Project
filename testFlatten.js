const nestedArray = [1, [2], [[3]], [[[4]]]];
let flattenFunction = require('./flatten.js');

//Testcases
console.log(flattenFunction(nestedArray)); // returns [1, 2, 3, 4]
console.log(flattenFunction([[2],[['t']],[[[6]]],7]));
console.log(flattenFunction([1,[2,['hi']],[[[[8]]]]], 2));
console.log(flattenFunction());        // returns empty array 
console.log(flattenFunction([]));      // returns empty array
console.log(flattenFunction(null));    // returns empty array
console.log(flattenFunction(undefined)); // returns empty array
