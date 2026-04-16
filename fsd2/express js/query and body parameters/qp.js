var express = require("express")
var app = express() // object of express js
/*
app.get("/about",(req,res)=>{
    res.send(req.query)
})
*/
app.get("/", (req,res)=>{
    res.send(`<form method = "get" action = "/about_details">
       Username :  <input type = "text" name = "user_name"> <br>
        Password : <input type = "password" name = "pwd"><br>
        <input type = "submit">
    </form>`)
})
app.get("/about_details", (req,res)=>{
    res.send("welcome "+ req.query.user_name + "\nYour password is = " + req.query.pwd)
})
app.listen(8001)