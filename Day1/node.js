import fs from 'fs';

 setTimeout(() => {
     console.log('This is a message from setTimeout');// 3rd executed after 2 seconds
 }, 2000);

 console.log('This is a message from the main thread'); // node.js first executes the main thread 

 var a=36
 console.log("number is : ", a);//2nd ecuted