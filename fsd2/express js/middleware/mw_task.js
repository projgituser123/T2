var express = require("express")
var app = express()

const entryLog = (req,res,next)=>{
    console.log("student entered the class !!")
    next()
}
const checkId = (req,res,next)=>{
    const hasId = false
    if(hasId){
        req.student = "dvc"
        console.log("id is verified !!")
        next()
    }
    else{
        res.send("accss denied! no id card")
    }
}

app.use("/classroom", entryLog, checkId)
app.get("/classroom",(req,res)=>{
    res.send("welcome " + req.student + " to the class...")
})
app.listen(9029)