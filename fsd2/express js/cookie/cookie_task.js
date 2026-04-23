// 1) - create html file that conatins a form of first name last name password and submit 
// 2) - once the form submitted store all this enterd values to the respective cookies on /next page
// 3) - then redirect user to /admin page clear cookie set for lastname and display remaining cookies using postman 

var expr = require("express")
var app =expr()

const cp =require("cookie-parser")
console.log(__dirname)
app.use(cp())
app.use(expr.static(__dirname, {index : "task_cookie_form.html"}))
app.use(expr.urlencoded())

app.post("/next_cookie_page", (req,res)=>{
    res.cookie("first_name" , req.body.fname)
    res.cookie("last_name" , req.body.lname)
    res.cookie("password" , req.body.pwd)
    // res.send(req.cookies) // you should never end the response because you want to redirect to the next page....;/
    res.redirect("/admin")
})

app.get("/admin",(req,res)=>{
    res.clearCookie("lname")
    res.write("Welcome " +req.cookies.first_name+ "!!!")
    res.write("Your password was = " +req.cookies.password) 
    res.send()
})

app.listen(6767)