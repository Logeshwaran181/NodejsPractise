const {readFile,writeFile} = require('fs')
console.log('start');

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result;

    readFile('./content/secons.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
            }
            const second = result;
writeFile(
    './content/result-async.txt',
    `Here is the result : ${first}, ${second}`,
    { flag: 'a'}//append
,(wrr,result)=> {
    if(err){
        console.log(err)
        return
        }
        console.log('done with this task');
})
    })
})
console.log('starting next task');