//  Global object in node js not need to import using require
const buffer=new Buffer.from("Asad Saeed")

console.log("buffer",buffer)
console.log("toString",buffer.toString())
console.log("toJSON",buffer.toJSON())
console.log("Write",buffer.write("Ali Saeed"))

// The buffers module provides a way of handling streams of binary data.
console.log("alloc",Buffer.alloc(15,'a',"utf8"))
// unsafe and fill
console.log("allocUnsafe()",Buffer.allocUnsafe(15).fill("b"))
console.log("byteLength",Buffer.byteLength(Buffer.alloc(15,'a',"utf8"),"utf8"))
console.log("byteLength",Buffer.byteLength("Asad Saeed"))

// Compare and from
var buf1 = Buffer.from('abc');
var buf2 = Buffer.from('abc');
var compare = Buffer.compare(buf1, buf2);
console.log("Compare:",compare);

// Concat
var buf1 = Buffer.from('a');
var buf2 = Buffer.from('b');
var buf3 = Buffer.from('c');
var arr = [buf1, buf2, buf3];
var Concat = Buffer.concat(arr);
console.log("Concat",Concat);

// Copy
var buf1 = Buffer.from('abcdefghijkl');
var buf2 = Buffer.from('HELLO');
//Copy buf2 into parts of buf1:
buf2.copy(buf1, 2);
console.log(buf1.toString());

// 
/*
includes()	Checks if the Buffer object contains the specified value. Returns true if there is a match, otherwise false
indexOf()	Checks if the Buffer object contains the specified value. Returns the first occurrence, otherwise -1
isBuffer()	Checks if an object is a Buffer object
isEncoding()	Checks if the Buffer object supports the specified encoding
keys()	Returns an array of keys in a Buffer object
lastIndexOf()	Checks if the Buffer object contains the specified value. Returns the first occurrence, starting from the end, otherwise -1
length
slice()	Slices a Buffer object into a new Buffer objects starting and ending at the specified positions
toString()	Returns a string version of a Buffer object
toJSON()	Returns a JSON version of a Buffer object
values()	Returns an array of values in a Buffer object
write()	Writes a specified string to a Buffer object

 */