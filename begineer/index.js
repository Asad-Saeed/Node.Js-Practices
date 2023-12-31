// const batman=require("./batman");
// const superman=require("./superman");
// batman()
// superman()
// const addFn = require("./add");

// console.log("Hello Node, I am here to learn you! Let's go!");
// const sum1 = addFn(2, 3);
// const sum2 = addFn(4, 4);
// console.log("first",sum1);
// console.log("second",sum2);



// Module Cache
// const superHero = require("./super-hero");
// console.log(superHero.getName())
// superHero.setName("Superman");
// console.log(superHero.getName())

// // this module is cached
// const newSuperHero=require("./super-hero");
// console.log(newSuperHero.getName())

// Use Module from class export
const SuperHero = require("./super-hero");
const batman=new SuperHero("Batman");
console.log(batman.getName());
batman.setName("Bruce Wayne");
console.log(batman.getName());

const superman=new SuperHero("Superman");
console.log(superman.getName())
