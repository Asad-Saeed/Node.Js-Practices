// // UVLIB a library which is responsible for Node Asynchrnized behavoiur
// const file=require("node:fs");

// console.log("first")

// // async and non blocking method
// file.readFile("./data.json","utf-8",(error,data)=>{
//     console.log("File Content:")
// })

// console.log("Last")

// Crypto Module
// The crypto module provides a way of handling encrypted data.
// const crypto=require("node:crypto");
// // Sync blocking
// const start =Date.now()
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
// console.log("Hash:1 ",Date.now() - start)

// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
// console.log("Hash:2 ",Date.now() - start)

// // ASync non-blocking
// const MAX_CALLS=2;
// const start =Date.now()
// for(let i=0;i<MAX_CALLS;i++){
// crypto.pbkdf2("password","salt",100000,512,"sha512",()=>{
//     console.log(`Hash: ${i+1}`,Date.now() - start)
// })}

// by defult thread pool size if 4 but we can increase

// thread pool size increase
//CPU Cores
// process.env.UV_THREADPOOL_SIZE=10;
// const MAX_CALLS=8;
// const start =Date.now()
// for(let i=0;i<MAX_CALLS;i++){
// crypto.pbkdf2("password","salt",100000,512,"sha512",()=>{
//     console.log(`Hash: ${i+1}`,Date.now() - start)
// })}

// Network I/O methodes does not use LIBUV library thread pool they use Native async mechanism

const https = require("node:https");

const MAX_CALLS = 2;
const start = Date.now();
for (let i = 0; i < MAX_CALLS; i++) {
  https
    .request("https://www.google.com/", (res) => {
      res.on("date", () => {});
      res.on("end", () => {
        console.log(`Request: ${i + 1}`, Date.now() - start);
      });
    })
    .end();
}
