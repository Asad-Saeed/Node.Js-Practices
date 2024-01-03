const path=require("node:path");

console.log(__dirname)
console.log(__filename)
const baseName=path.basename(__filename)
const dirname=path.dirname(__filename)
console.log("base name:",baseName)
console.log("dir name:",dirname)
console.log("delimiter:",path.delimiter)
console.log("extname:",path.extname(__filename))
var obj = { dir: 'C:\\Users\\Refsnes', base: 'demo_path.js' }
console.log("format1:",path.format(obj))
console.log("format2:",path.format(path.parse(__filename)))
console.log("isAbsolute:",path.isAbsolute(__filename))
console.log("isAbsolute:",path.isAbsolute("../data.json"))  // ./ is relative path and / is absolute path
console.log("Join1:",path.join('folder1', 'folder2', 'demo_path.js'))
console.log("Join2:",path.join('Users', 'Refsnes',"..", 'demo_path.js'))
console.log("Join3:",path.join('Users', '../Refsnes', 'demo_path.js'))
console.log("normalize:",path.normalize('Users/Refsnes/../Jackson'))
console.log("parse:",path.parse('Users/Refsnes/../Jackson.js'))
console.log("parse2:",path.parse(__filename))
// Posix show all path module methods
// console.log("posix:",path.posix)
console.log("relative",path.relative("/begineer/built-in-module/path.js","/begineer"))

console.log("resolve",path.resolve("folder1","folder2","index.html"))
console.log("resolve",path.resolve("/folder1","folder2","index.html"))
console.log("resolve",path.resolve("/folder1","//folder2","index.html"))
console.log("resolve",path.resolve("/folder1","//folder2","../index.html"))
console.log("resolve",path.resolve(__dirname,"data.json"))

console.log("sep:",path.sep)
console.log("win32:",path.win32)
















