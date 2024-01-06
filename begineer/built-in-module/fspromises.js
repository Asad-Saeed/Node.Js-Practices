const fspromise=require("node:fs/promises");


console.log("first")

fspromise.readFile("../data.json","utf-8")
.then((data)=>{console.log("data",data)})
.catch((error)=>{console.log("error",error)})

console.log("second")

// Async await top to promisses

async function fileRead(){
    try {
        const data=await fspromise.readFile("../data.json","utf-8")
        console.log("data",data)
    } catch (error) {
        console.log("error",error)
    }
}

fileRead()