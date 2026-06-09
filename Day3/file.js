// creating file from server using the built in module fs
const fs=require('fs')

// creating a file by using fs => Asynchronous way
fs.writeFile('Readme.txt','This is the file created by server', (err)=>{
    if(err) throw err
    console.log('The file is created sucessfully "Asynchronous" ');
}) 



