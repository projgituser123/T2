/* 
 write express script to maintain session and  print how many times 
user visit the page. For ex., if user visit first time ,”you have visited 
page First time” message will print. if user visit second time ,”you 
have visited page second time” message will print. and so on
*/
var es = require ("express-session")
const expr = require("express")
const app = expr()

app.use(es({
    resave : false,
    secret : "LJU", 
    saveUninitialized: false, 
    maxAge : 0
}))

app.get("/", (req,res) =>{
    if (req.session.page_views){
        req.session.page_views++
        res.send(`<h1 style = "color : indigo">You have enter this page ${req.session.page_views} times...</h1>`)
    }
    else{
        req.session.page_views = 1
         res.send(`<h1 style = "color : lime-green ">Welcome ! thank for vsiting the page!!!</h1>`)
    }
})
app.listen(9098)