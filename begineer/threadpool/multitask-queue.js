// Multitask Queues
// NextTick
console.log("first")
process.nextTick(()=>{
    console.log("NextTick Function callback exceute")
})
console.log("second")
