var expr = require("express")
var app = expr()

// now bind the file path with the middleware using app.use()
app.use("/form", expr.static("../public", {index : "form.html"}))

app.use(expr.urlencoded()) // this is a inbuilt express js middleware and it is compulsory to write because you cannot direct use req.body.variable_name or we can say we have to parse it first for post methods....

// now to listen the response from the "get" in html form we use app.get
app.post("/form_details", (req,res) =>{
    // the submitted data from the form is visible in url query so we use req.query.key_name
    // if html has get="post" then here it will be req.body.variable_name
    // and id the html form has get="get" then here it will be app.get() plus req.query.bariable_name
    res.send("Welcome " + req.body.fname + " " + req.body.lname +"\nYour password was = " + req.body.pwd)
})

app.get("/pedri_review", (req,res)=>{
    res.set("Content-type","text/html") // it is similar method like res.writeHead() but this is express js
    msg = req.query.review
    msg = msg.split(".") // this forms a array
    
    // to access each line from the review text are use for loop :
    for (i in msg){
        res.write(msg[i] + "</br>")
    }
    res.send()
})
app.listen(8080)