// callbacks in the micro task queues are excute before timmer queues
// Perority 3

// timmer queuecallback are excutedin FIFO order
setTimeout(() => {
  console.log("setTimeOut 1");
}, 1000);
setTimeout(() => {
  console.log("setTimeOut 2");
}, 500);
setTimeout(() => {
  console.log("setTimeOut 3");
}, 0);

//
setTimeout(() => {
  console.log("setTimeOut 1");
}, 0);
setTimeout(() => {
  console.log("setTimeOut 2");
  process.nextTick(() => {
    console.log("This is process.nextTick inside setTimeOut 2");
  });
}, 0);
setTimeout(() => {
  console.log("setTimeOut 3");
}, 0);

// callbacks in the micro task queues are excute before timmer queues
// Perority 1
process.nextTick(() => {
  console.log("This is process.nextTick 1");
});

// Perority 2
Promise.resolve().then(() => console.log("This is Promise.resolve 2"));
process.nextTick(() => {
  console.log("This is process.nextTick inside");
});
