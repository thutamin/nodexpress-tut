const {readFile, writeFile} = require('fs')
console.log('start') // The moment we start the task, we offload this task and starts another task
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result;
        writeFile('./content/result-async.txt',`Here is the result: ${first},${second}`,(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log("done with this task") // eventualy you will be done with this task
        })
    })
})
console.log("starting the next task")


// alternatives are using promises or async-await