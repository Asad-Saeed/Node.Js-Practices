// close quese callbacks are excuted after all others
const fs=require("node:fs")
const readAbleStream=fs.createReadStream(__filename)
readAbleStream.close()
readAbleStream.on("close",()=>{
    console.log("this is from readAbleStream close event callback 5")
})
setImmediate(() => {
    console.log("This is setImmediate inside I/O 4");
  });
setTimeout(() => {
  console.log("This is setTimeout 3");
}, 0);

Promise.resolve().then(() => {
  console.log("This is Promise.resolve 2");
});
process.nextTick(()=>{
    console.log("this is nextTick 1");
})