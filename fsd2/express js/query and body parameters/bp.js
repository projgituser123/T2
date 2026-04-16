var express = require("express")
var app = express()

app.use(express.urlencoded({extended : true}))
app.get("/", (req,res)=>{
    res.send(`<form method = "post" action = "/about_details">
       Username :  <input type = "text" name = "user_name"> <br>
        Password : <input type = "password" name = "pwd"><br>
        <input type = "submit">
    </form>`)
})
app.post("/about_details", (req,res)=>{
    res.send("welcome "+ req.body.user_name + "\nYour password is = " + req.body.pwd)
})
app.listen(8001)