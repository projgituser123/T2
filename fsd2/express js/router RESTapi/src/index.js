const expr = require("express")
const app = expr()

var exported = require("./data.js") // single . means in the same directory and double .. means exit the current directory
app.use("/router", exported) // binding process
app.listen(6787)