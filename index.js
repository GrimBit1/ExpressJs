console.log("Hi");

const express = require("express");

const app = express();

// console.log(app)

app.get("/", (req, res) => {
  res.send("Hi Im Aditya");

  // res.status(404)
  console.log("Wr got a request on page /");

});


app.get('/hello/:name',(req,res)=>{  // to make parameter in url :Variable is USED
    res.send(`Hello ${req.params.name}`)
})

app.get("/about", (req, res) => {
  res.sendFile(`${__dirname}/index.html`) // to send the file to client
  // res.json({ name: "Aditya" }); // to send the json file

  res.status(418); // to send the status code

  console.log("Wr got a request on page /home");

});


app.listen(5000, () => {
  // console.log("We got a request")
});

