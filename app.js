const {readFile,writeFile} = require('fs')

// THe way the asynchronous works is that you have to make a call back
// We run a call back when we are done. When whatever function is complete we run that program

readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        return
    }
    const first = result;
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result;
        writeFile('./content/result-async.txt',`Here is the result : ${first},${second}`,(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(result)
        })
    })
})
