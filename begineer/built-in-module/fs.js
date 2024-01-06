const fs=require("node:fs")

console.log("first")
// AySyncronize behaivour

console.log("Read File Async:",fs.readFileSync("../data.json","utf-8"))
console.log("second")
// Syncronize behaivour
console.log("Read File Sync:",fs.readFile("../data.json","utf-8",(error,data)=>{
    if(error){
        console.log("error",error)
    }else{
        console.log("Read File Sync:Data",data)

    }
}))

console.log("third")


// Writing file


console.log("write file:Async",fs.writeFileSync("abc.txt","Asad Saeed"))

// Append data in a file with flag
console.log("write file:Sync",fs.writeFile("abc.txt"," Asad Ali",{flag:"a"},(error,data)=>{
    if(error){
        console.log("error",error)
    }else{
        console.log("data",data)
    }
}))
// Append data in a file
fs.appendFile("./abc.txt","uft-8",(error,data)=>{
    if(error){
        console.log("error",error)
    }else{
        console.log("data",data)
    }
})


console.log("exist",fs.existsSync("./event3.js"))