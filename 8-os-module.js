const os = require('os') // this is a built in module. If you want to use an external module, you must install it first

// info about current user
// console.log(os.userInfo())
// console.log(os.homedir())
// console.log(os.hostname())

// // method returns the system uptime in seconds
// console.log(`The System uptime is ${os.uptime()} seconds`)
// console.log(`${os.totalmem()}`)


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMeme: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)