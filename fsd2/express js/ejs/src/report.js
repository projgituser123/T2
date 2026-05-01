var expr = require("express")
const app = expr()

app.set("view engine", "ejs")
app.use(expr.urlencoded())

app.get("/",(req,res) => {
    res.render("form")
})
app.post("/submit", (req,res) => {
    var name = req.body.student_name
    var marks = req.body.marks

    res.render("result", {name, marks})
})
app.listen(8080)