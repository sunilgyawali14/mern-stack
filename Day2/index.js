// Creating the server using the http module
const http = require("http"); // step 1 acquire http--> import this http modeule in program
const { json } = require("stream/consumers");

//  const server= http.Server((req, res)=>{ //step2 :"http modeule"  call server .. by arrow callback function
//     res.end("This is the require data") // step3 : this response is shown in browser and provide to the user
// })

// we can give the response as html,json(API,REact) ect

// lets provide the html tags as a response
// const server = http.Server((req, res) => {
//   res.end(`
//         <h1>HTML as a response  </h1>
//         <p>This is an Example that, We can send the html as a response</p>
//       `);
// });

// .........................................................................
// providing the json as a response 
// const server= http.Server((req, res)=>{
//     res.end(
//         JSON.stringify({
//             name: "Sunil Gyawali",
//             learn :"AI powered MERN-STACK"
//         }
//         ))})

//.............ROUTIUNG................
const server=http.createServer((req,res)=>{
    if(req.url=== '/'){
        res.end("This is the home page")
    }
    else if(req.url==='/about'){
        res.end("This is about Page")
    }
    else if(req.url==='/COntact'){
        res.end("This is contact  Page")
    } 
    else if(req.url==='/project'){
        res.end("This is project Page")
    }
     else if(req.url==='/services'){
        res.end("This is services Page")
    }

      else if(req.url==='/getintouch'){
        res.end("This is get in touch  Page")
    }
    
    else {
        res.end("404 - not found")
    }
})
server.listen(8004, () => {
  console.log("the server is running  port=8004 ");
});
