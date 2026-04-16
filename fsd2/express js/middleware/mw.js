var express = require("express")
var app = express()

const addName = (req,res,next)=>{
    req.name = "pedri"
    console.log("name is added")
    next()
}
const addClub = (req,res,next)=>{
    req.club = "bodo/glimt"
    console.log("club name added !!")
    next() // now change this LOC to : res.send() this LOC will terminate the middleware and code will not run further "club name added"
}
const addPosition = (req, res, next)=>{
    req.position = "central midfield"
    console.log("position added")
    next()
}
app.get("/class_player",addName, addClub, addPosition,(req,res)=>{
    res.send("Best " + req.position + "award goes to = " + req.name + " from " + req.club )
})
app.listen(9098)