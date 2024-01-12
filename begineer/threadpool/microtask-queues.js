// // Multitask Queues
// // NextTick
// // Sync javaScript have preority on async
// console.log("first")
// process.nextTick(()=>{
//     console.log("NextTick Function callback exceute")
// })
// console.log("second")

// Experiment 2

Promise.resolve().then(()=>console.log("This is Promise.resolve 2"))
process.nextTick(()=>{
    console.log("This is process.nextTick 1")
})