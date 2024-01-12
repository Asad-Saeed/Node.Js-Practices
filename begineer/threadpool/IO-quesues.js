// Most of the async methods from the built-in modules queue the callback function in the I/O queue
const fs = require("node:fs");

// callbacks in the microtask queues are executed before callbacks in the I/O queues
// Note: when run setTimeOut with delay 0ms and a I/O async method, no guranted output
fs.readFile(__filename, () => {
  console.log("This is read File 1");
});
setTimeout(() => {
  console.log("setTimeOut 1");
}, 0);
process.nextTick(() => {
  console.log("this is the process.NextTick 1");
});
Promise.resolve().then(() => console.log("this is the promise 1"));
