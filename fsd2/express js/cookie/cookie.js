var express = require("express")
var app = express()

const cp = require("cookie-parser") // these are all third party middleware

app.use(cp()) // make a object of cookie-parser and put it in app.use or we are binding the middleware with out app

app.get("/cookie", (req,res) =>{
    res.cookie("player_name", "pookie_pedri")
    res.cookie("ex_player", "vitinha")
    res.cookie("playstle", "possession")
    res.cookie("bottlers" , "bukayo saka lmaoo")
    res.cookie("relagation" , "spurs", {maxAge : 2000})
    // res.cookie("manager sacked", "liam rosenior", {expires : new Date(Date.now() + 10000)}) // this LOC RETURNS AN ERROR because of the space in name and value
    res.cookie("manager_sacked", "liam_rosenior", {expires : new Date(Date.now() + 10000)})
    res.clearCookie("bottlers")

    res.send(req.cookies)
})
app.listen(9010)