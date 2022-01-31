const {readFile} = require("fs")

console.log("started a first task")
// Check File Path
readFile('./content/first.txt','utf-8',(err,result)=>{ // run this line of code
    if(err){
        console.log(err)
        return
    }
    console.log(result); // offload this one, only when the taks is done, we invoke the callback
    console.log("completed first task")
})
console.log('starting next task')