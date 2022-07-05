const express = require('express');
const app = express();
const port = 5000;
const path =require ('path')
const hbs =require('hbs')

// public static_path
const static_path = path.join(__dirname,"../public");
const templates_path = path.join(__dirname,"../templates/views");
const partial_path = path.join(__dirname,"../templates/partials");



app.set('view engine', 'hbs'); // handle bar
app.use(express.static(static_path));
app.set('views',templates_path);
hbs.registerPartials(partial_path);

// routing
app.get("/",(req,res)=>{
    res.render('index.hbs')
})
app.get("/about",(req,res)=>{
    res.render('about.hbs')
})
app.get("/weather",(req,res)=>{
    res.render('weather.hbs')
})
app.get("/*",(req,res)=>{
    res.render('404error.hbs',{
        errorMsg:'Oops! page not found'
    })
})

app.listen(port , ()=>{
    console.log(`listen to the port number ${port}`);
})