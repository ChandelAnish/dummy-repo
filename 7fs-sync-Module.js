//file system(fs) module


//synchronous approach(blocking approach) :



// const fs=require('fs')
// const text= fs.readFileSync('./content/subfolder/text.txt','utf8');
// console.log(text)

//   OR

const {readFileSync,writeFileSync}=require('fs');//destructuring to get just the required method only

const text=readFileSync('./content/subfolder/text.txt','utf8')//utf8 - it is the default encoding so that node can decode the file present at that location
console.log(text)
writeFileSync('./content/text2.txt','this is text2.txt file',{flag:'a'})//if file text2.txt is not present then it will be created and the given txt will be written in it otherwise the contents of the given file will be overwritten. {flag:'a'} --> this is the 3rd argument and if flag:'a' then the text will be appended in the file.