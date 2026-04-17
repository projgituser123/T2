var expr = require("express")
var app = expr()

// now bind the file path with the middleware using app.use()
app.use("/form", expr.static("../public", {index : "form.html"}))

// now to listen the response from the "get" in html form we use app.get
app.get("/form_details", (req,res) =>{
    // the submitted data from the form is visible in url query so we use req.query.key_name
    res.send("Welcome " + req.query.fname + " " + req.query.lname +"\nYour password was = " + req.query.pwd)
})
app.listen(7878)