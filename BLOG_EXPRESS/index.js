const express = require("express");

const router = require("./routes/blog");

const app = express();

const port = 3000

let exphbs = require("express-handlebars");


// console.log(exphbs)

app.engine("handlebars", exphbs.engine());

app.set("view engine", "handlebars");


app.use(express.static(`${__dirname}/public`));


app.use("/", router);


// app.get('/',(req,res)=>{
//     res.sendFile(`${__dirname}/index.html`)
// })

app.listen(port, () => {
  console.log(`We are running on http://localhost:${port}/`);

});

