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