var expr =  require("express")
var app =expr()

var path = require("path")
// in below code :  we are proving the express () to access multiple and different folder using .use() middleware and hence we provide different path in them

console.log(__dirname)
app.use("/route", expr.static("../img"))
app.use("/route", expr.static("../public", {index : "vitinha.html"})) // this ../public inside app.use() is called relative path

app.listen(6767)