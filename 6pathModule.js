//path module

const path=require('path')
// console.log(path.sep)//this gives platform specific seperator

const filepath=path.join('/content','subfolder','text.txt')//this function joins the paths of '/content','subfolder' and 'text.txt' and returns in a normalized form.
console.log(filepath)

const base =path.basename(filepath)//gives the base file name i.e the location where we will reach finally.
console.log(base)


const absolute =path.resolve(__dirname,'content','subfolder','text.txt')//gives the absolute(complete) path required to reach the location.
console.log(absolute);