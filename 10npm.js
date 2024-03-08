//npm(node package manager) - it is like world's biggest code store
//it enables us to reuse our own code and also use code written by other developers and also share our own with other developers.
//npm projects are hosted at npmjs.com

//npm is also called packages,dependencies and modules

//npm - global command , comes with node
//npm --version

//package - it is a folder that contains the javascript code

//local dependency(package) - use it only in this particular project
//npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>

//bootstrap,express etc are npm packages


//package.json - manifest file (stores important info about project/package)
//manual approach (creat package.json in thr root,creat properties etc)
//npm init (step by step ,press enter to skip)
//npm init -y (everything default)


//all the packages we install will be shown in the package.json


const _=require('lodash')
const items=[1,[2,[3,[4]]]]
const allInOne=_.flatMapDeep(items);
console.log(allInOne);