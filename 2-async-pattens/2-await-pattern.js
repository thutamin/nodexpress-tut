const {readFile,writeFile} = require("fs");
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)
// const getText = (path) =>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf-8',(err,data)=>{
//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve(data)
//             }
//         })
//     })
// }


// getText('./content/first.txt').then(result => console.log(result)).catch((err)=> console.log(err));

// Since we are using promises, we can use async await and wait till promise is settled and decide what we want to do

const start = async() =>{
    try{
        const first = await readFilePromise('./content/first.txt','utf-8');
        const second = await readFilePromise('./content/second.txt','utf-8');
        await writeFilePromise('./content/result-mind-grenade.txt',`This is Awesome: ${first},${second} `)
        console.log(first)
        console.log(second)
    }catch(error){
        console.log(error)
    }
}

start()