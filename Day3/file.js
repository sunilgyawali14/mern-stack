// creating file from server using the built in module fs
const fs=require('fs')

// // creating a file by using fs => Asynchronous way
// fs.writeFile('Readme.txt','This is the file created by server', (err)=>{
//     if(err) throw err
//     console.log('The file is created sucessfully "Asynchronous" ');
// }) 

// // creating a file using fs -> synchronous way 
// fs.writeFileSync('syncronous.txt','syncronous way of creating file')
// console.log('successfully crated a synchronous file');

// Asynchronous way of reading file ;
fs.readFile('Readme.txt','utf-8',(err, data)=>{
    if(err) throw err
    console.log(data);
})