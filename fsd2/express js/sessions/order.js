var expr = require("express")
var app =expr()

var es = require("express-session")

app.use(expr.urlencoded()) // for post method in forms and this is in-built middleware...
app.use(es({
    secret : "LJU-PB",
    resave : false,
    saveUninitialized : false,
    maxAge :0
}))
app.use("/form",expr.static(__dirname, {index : "order_login.html"}))

app.post("/login", (req,res) => {
    req.session.username = req.body.user
    res.redirect("/order_page")
})
app.post("/order_page", (req,res) => {
    req.session.prod_name = req.body.prod
    req.session.prod_quantity = req.body.quant

    res.redirect("/order_details")
})
app.get("/order_details", (req,res) => {
    res.type("text/html")
    res.send(`<h1>Welcome ! here you can view the order details = </h1><br>
            Your name is : <h3>${req.session.username}</h3>
            You ordered = ${req.session.prod_name} product
            Product quantity = ${req.session.prod_quantity}<br>
            <a href = "/">Log-out</a>
            `)
})
app.get("/" ,(req,res) => {
    res.type("text/html")
    res.write("Welcome to Home page")
    res.write(`<a href = "/form">login to the website</a>`)
    res.send()
})
app.listen(4545)