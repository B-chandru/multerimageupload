
require('dotenv').config();
const express = require('express')
const app = express()
const connection = require('./db')
const imguploadRoutes = require("./routes/imageuploadroutes")



 app.use((req,res,next)=>{ console.log(req.url,req.method); next() } );

 app.use(express.static("public"));
 app.set('view engine', 'ejs')
 app.use(express.urlencoded({ extended: false}));
 

 app.use('/',imguploadRoutes);
 connection()

const PORT= process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log("server running on 5000...")
})
