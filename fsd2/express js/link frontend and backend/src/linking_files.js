var expr = require("express")
var path = require("path")

 var app =expr()

// this code is for : to select and run specific html css files when there are multiple exisiting files sitting in public ...
console.log(__dirname)

app.use("/route", expr.static("../public", {index : "pedri.html"}))

app.listen(6767)