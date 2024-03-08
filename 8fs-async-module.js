//file system module

//Asynchronous approach(non-blocking approach) : here we use callbacks so read and write will be done when callbacks are passed

const {readFile,writeFile}=require('fs');

readFile('./content/text2.txt','utf8',(err,result)=>{
    if(err)
    {
        console.log(err)
        return
    }
    const text2=result;
    console.log(text2)
    readFile('./content/subfolder/text.txt','utf8',(err,result)=>{
        if(err)
        {
            console.log(err)
            return
        }
        const text1=result;
        console.log(text1)
        writeFile('./content/text3async.txt',`this is the 3rd text file ${text1} , ${text2}`,(err,result)=>{
            if(err)
            {
                console.log(err)
                return;
            }
            console.log(result)
        })
    })
})