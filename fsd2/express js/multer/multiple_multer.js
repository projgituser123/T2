var expr = require("express")
const app = expr()
var multer = require("multer")

app.use(expr.urlencoded())
app.use(expr.static(__dirname, {index : "form.html"}))

var upload = multer({storage : multer.diskStorage({
    destination : "LJU",
    filename : function (req, file, cb){
        cb(null, file.fieldname + Date.now() + ".png")
        }
    }) , limits : {fileSize : 1024*1024} // to set the max limit of file size
})
const maxfile = 3
app.post("/data", upload.array("pedri_celebration", maxfile),(req,res) => {
    res.type("text/html")
    file = req.file
    if(file){
        for (i of file ){ // for of loop iterates on the values and for in loop iterates over keys and indexes....
            res.write("Your file named as <span style='color : indigo'>" + i.originalname + "</span> has been uploaded...")
        }
    }
    else{
        res.send("No file uploaded.")
    }
    if (upload.array.length > maxfile){
        res.write("Uploading more than " + maxfile + " are not allowed !!")
    }
    
    res.send()
})
app.listen(8767)