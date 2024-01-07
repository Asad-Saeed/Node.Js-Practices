const fs = require("fs");
const zlib = require("zlib");

const readAbleStream = fs.createReadStream("./abc.txt", {
    encoding: "utf-8",
    highWaterMark: 2
});
 
const gzipStream = zlib.createGzip();  // Create a gzip transform stream

// Pipe the readable stream through gzip and then to a writable stream
readAbleStream.pipe(gzipStream).pipe(fs.createWriteStream("./abc2.txt.gz"));

const writeAbleStream = fs.createWriteStream("./abc1.txt");

// Directly pipe the readable stream to another writable stream
readAbleStream.pipe(writeAbleStream);
