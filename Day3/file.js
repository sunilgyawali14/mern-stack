// creating file from server using the built in module fs
const fs=require('fs');


// // creating a file by using fs => Asynchronous way
// fs.writeFile('Readme.txt','This is the file created by server', (err)=>{
//     if(err) throw err
//     console.log('The file is created sucessfully "Asynchronous" ');
// }) 

// // creating a file using fs -> synchronous way 
// fs.writeFileSync('syncronous.txt','syncronous way of creating file')
// console.log('successfully crated a synchronous file');

// Asynchronous way of reading file ;
// fs.readFile('Readme.txt','utf-8',(err, data)=>{
//     if(err) throw err
//     console.log(data);
// })

// TODO : synchronous way 
// const data= fs.readFileSync('syncronous.txt','utf-8' )
// console.log(data)


// UPDATE A FILE   => asynchronous way 
// fs.appendFile('Readme.txt','. The data is now updated by the appendFile.',(err)=>{
//     if(err) throw err
//     console.log('The file is updated successfully');
// })

// updating the file by synchronous
//  fs.appendFileSync('syncronous.txt','. \n synchronous way of updating file','utf-8')
// console.log('the data is updated ');

// DELETEING THE FILE => unlink "Asynchronous way "
// fs.unlink('syncronous.txt',(err)=>{
//     if (err) throw err 
//     console.log('The file is deleted .... ');
// })

// // deleteing the file ==> 'synchronous'
// fs.unlinkSync('Readme.txt')

//RENAME of file 
// step 1: create a random file 
// fs.writeFile('Readme.txt','This is the random file name', (err)=>{
//     if (err) throw err
//     console.log('The file is created successfully ');
// })
// RENAME 
fs.rename('Readme.txt','NewFile.md',(err)=>{
    if(err) throw err
    console.log('The random file name is renamed');
})