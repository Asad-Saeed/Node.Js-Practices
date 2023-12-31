// import add from "./math-ems.mjs"
// import math from "./math-ems.mjs"
// console.log(math.add(5,5));
// console.log(math.sub(5,5));

// const {add,sub}=math

// Naming import 2 ways
import {add,sub} from "./math-ems.mjs"
import * as math from "./math-ems.mjs"

console.log(add(5,5));
console.log(sub(5,5));
console.log(math.add(5,5));
console.log(math.sub(5,5));
