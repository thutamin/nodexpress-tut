// started operating system process
console.log('first')
setTimeout(()=>{ // this one gets offloaded, only when the synchronous process is done, the callback is invoked
    console.log('second')
},0)
console.log("third")
// completed and exited operating system process