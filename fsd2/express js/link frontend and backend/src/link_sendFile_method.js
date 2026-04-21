var expr = require("express")
var app = expr()

var path = require("path")

var absolute_path = path.join(__dirname, "../public")
app.get("/pedri", (req,res)=>{
    res.sendFile(absolute_path + "/index.html") // so this method is alternative method of app.use("/", expr.static(absolute_pth or relative_path)) but the main difference is that app.use() wali method can serve html files with all dependencies (like external images, videos, mp4 or css files) but here in res.sendFile(), if you only write res.sendFile() LOC and run the code then this method doesnt recognise the external css because this method doesnt allows dependencies.... to forecfully allow the dependencies or css to work write the below code : 
})
app.use(expr.static("../public")) // dont give the path/route as a parameter here or else it wont work if you write "with" res.sendFile() then
app.listen(8888)