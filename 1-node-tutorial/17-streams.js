// Streams

// At its simplest, streams are used to read or write sequentially. Basically when you have to edit and manipulate streaming data
// for example: a continuous source or a very big file
// streams come in really handy
// There are 4 different types of strings, 1. Writeable, 2. Readable, 3. Duplex and 4. Transform
// Streams extend eventemitter class, we can use events on stream

const {createReadStream} = require('fs')

const stream = createReadStream('./content/big.txt',{highWaterMark:90000})
// default 64kb
// last buffer - reaminder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt',{highWaterMark})
// const stream = createReadStream('./content/big.txt',{encoding:"utf-8"})
stream.on('data',(result)=>{
    console.log(result)
})

stream.on('error',(err)=>console.log(err))