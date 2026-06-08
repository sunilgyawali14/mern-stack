// Creating the server using the http module
const http=require('http') // step 1 acquire http--> import this http modeule in program
const { Server } = require('tls')

 const server= http.Server((req, res)=>{ //step2 :"http modeule"  call server .. by arrow callback function 
    res.end("This is the require data") // step3 : this response is shown in browser and provide to the user 
})

server.listen(8000, () =>{
    console.log("the server is running  port=8000 ")
})