// write express js code to meet the following requirements : Create a html file which contains a form of username password and login button and serve on the home page, after clicking a login button it should jump to save session page... store username and password in session page and also after saving these, redirect to fetch-session page... read the value, diaplay and provide a logout link... if user click on logout link.. delete the session and redirect to home page...

var expr = require("express")
var app = expr()
var es = require("express-session")

app.use("/form", expr.static(__dirname, {index : "session_form.html"})) // bind the html form file to browser 

app.use(es({
    secret : "LJU-PB",
    saveUninitialized: false,
    resave : false
})) // bind the session also 

app.get("/save_session", (req,res)=>{
  req.session.susername = req.query.user  // req.session.susername is a custom session key name 
  req.session.pass = req.query.pwd
  res.redirect("/fetch_session")
})
app.get("/fetch_session",(req,res) => {
    res.type("text/html")
    res.write(`<h1 style = "color : indigo ">Welcome ${req.session.susername} !!!!</h1>`)
    res.write(`<h1>Your password = ${req.session.pass} </h1>`)
    res.write(`<a href = "/delete_session">Log out</a>`)
    res.send()
})
app.get("/delete_session", (req,res) => {
    res.type("text/html")
    res.write("Log out successfully ... ")
    req.session.destroy() // to delete the session from the server side..
    res.write(`<a href="/">Redirect to home page</a>`)
    res.send()
})
app.get("/", (req, res) => {
    res.type("text/html")
    res.write(`Welcome home !!`)
    res.write(`<a href = "/form">Enter to the website</a>`)
    res.send()
})
app.listen(9909)