var expr = require("express")
const app = expr()

app.set("view engine", "ejs")

app.get("/", (req,res) => {
    res.render("first", {player_name : "pookie_pedri"})
    
})
app.listen(9090)//////////////////////////////////////