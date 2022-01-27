const {readFileSync, writeFileSync, readFile} = require('fs'); // different ways of how we cann access the methods by destructuring
// const fs = require('fs');

console.log("start")

const first = readFileSync('./content/first.txt','utf-8') // readFileSync returns the values in the file and we assigned them to a variable
const second = readFileSync('./content/second.txt','utf-8')

writeFileSync('./content/result-sync.txt',`Here is the result: ${first}, ${second}`) // if the file is not there node will create one, if the file is there, node will overwrite the file contents

// in order to append - writeFileSync("filepath",{flag: 'a'})
const result = readFileSync('./content/result-sync.txt','utf-8')

console.log(result)

console.log("doen with this task")
console.log("starting the next one.")