const EventEmitter = require('events')

const customEmitter = new EventEmitter()
// on - will listen for an event
// emit - will emit an event

customEmitter.on('response',(name,age)=>{
    console.log(`data received: ${name},${age}`)
}) // the name of the event - callback function - essentialy when this event takes place 
customEmitter.on('response',(name,age)=>{
    console.log(`Some other logic here: ${name},${age}`)
})

customEmitter.emit('response','john',34)

// Point 1 : We can have as many functions as we want with the response
// Point 2 : The order matters
// Point 3 : It doesn't matter to listen for an event if it has already been commited
// Point 4 : We can add more arguments 
// Events are core elements of node
