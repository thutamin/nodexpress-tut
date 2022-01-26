// npm - global command, comes with node
// npm --version
// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packagename> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by stepm, press enter to skip)
// npm init -y (everything default)

// if you want to publish this package eventually the package name has to be unique

// why do we need this packge.json?
// this package is going to be stored as  a dependency

// when we first install our first dependency, npm adds the package to the package.json and then creates the node modules
// if you install a package that is big and requires other dependecies, npm will also install those.

const _ = require('lodash') // difference between the built-in node modules and the file modules, the installed (external ) modules
const items = [1,[2,[3,[4]]]];
const newItems = _.flattenDeep(items)

console.log(newItems)

// Why having package.json is crucial


// when we pushed the files to the github, we did not pushed the node modules, so how is someone going to know and able to run the app?

// nodemon dev dependency 
// npm i nodemon -D

//The reason on why the dev Dependecy is needed will be discussed

// Will you need nodemon in production?
// The answer is no. We are going to use something serious than nodemon in production. We are going to use it while we are creating the app


// Once the test script in the package.json has been set. Instead of running the app with the command app.js, npm run start can be used
// however to run the script in the dev environment such as nodemon, npm run dev must be used
// nodemo automatically restarts the script

console.log("Hello people")

// normal way to uninstall a package - npm uninstall <packagename>
// nuclear way to uninstall a package - npm 

// we will try to install nodemon packages globally to use nodemon in any of the projects
// Imagine a scenario where you are working on 20 node application at the same time
// When it comes to global packages you can install it from anywhere
console.log("helo wor")

// Yes we can install packages globally and one of the use case

// So what is package-lock.json
// if we look at our dependencies, some of the packages have versions'
// if you remember, some of the dependencies have more dependencies on their own.
// those dependencies have versions as well.
// you probably want them to have the same versions 
// if the versions changed, your project can become obsolete