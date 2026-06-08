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

const server= http.Server((req, res)=>{
    res.end(
        JSON.stringify({
            name: "Sunil Gyawali",
            learn :"AI powered MERN-STACK"
        }

        )
    )
})


server.listen(8002, () => {
  console.log("the server is running  port=8002 ");
});
