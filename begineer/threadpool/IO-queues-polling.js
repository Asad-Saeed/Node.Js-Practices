// To queue a callback function into a check queue we use setImmediate function
// I/O events are polled and callback functions are added to the I/O queue only after the I/O is complete
const fs=require("node:fs")
fs.readFile(__filename,()=>{
    console.log("this is readFile 5")
})
process.nextTick(()=>{
    console.log("this is nextTick 1");
})
Promise.resolve().then(()=>{
    console.log("This is Promise.resolve 2")
})
setTimeout(()=>{
    console.log("This is setTimeout 3")
    },0)
setImmediate(()=>{
console.log("This is setImmediate 4")
})

