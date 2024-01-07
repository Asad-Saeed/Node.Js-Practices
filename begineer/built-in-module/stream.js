const fs=require("node:fs")

const readAbleStream=fs.createReadStream("./abc.txt",{
    encoding:"utf-8",
 highWaterMark:2
})


const writeAbleStream=fs.createWriteStream("./abc1.txt")
readAbleStream.on("data",(chunks)=>{
    writeAbleStream.write(chunks)
    console.log("chunks",chunks)
})

console.log("readAbleStream.isPaused", readAbleStream.isPaused())
/*isPaused()	Returns true if the state of  the readable stream is paused, otherwise false
pause()	Pauses the readable stream
pipe()	Turns the readable stream into the specified writable stream
read()	Returns a specified part of the readable stream
resume()	Resumes a paused stream
setEncoding()	Sets the character encoding of the readable stream
unpipe()	Stops turning a readable stream into a writable stream, caused by the pipe() method
unshift()	Pushes some specified data back into the internal buffer
wrap()	Helps reading streams made by older Node.js versions */



console.log("writeAbleStream", writeAbleStream.end())
/*
cork()	Stops the writable stream and all written data will be buffered in memory
end()	Ends the writable stream
setDefaultEncoding()	Sets the encoding for the writable stream
uncork()	Flushes all data that has been buffered since the cork() method was called
write()	Writes data to the stream
 */