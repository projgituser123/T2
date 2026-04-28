// basically when filling up the form, we attach files or upload files... multer allows to interact those files with server based on their size allowance, what name they are saved on server, their data and interaction with server , etc etc etc..

var expr = require("express")
var multer = require("multer")
const app = expr()

app.use(expr.static(__dirname, {index : "form.html"}))

var store= multer.diskStorage({
    destination : "LJU", // a new folder will be created if not, and if existed the files will keep adding on, destination parameters can take paths also
    filename : function (req, file, cb){
        console.log(file) // req and file are both object and cb = callback
        cb(null, file.originalname) // we are allowing to save file with its oiginal name, we can also write file.fieldname .... cb no first paramter is for error handling, since we are not interested rn, keep it null or else write a error handling function in it...
    }
})

var upload = multer({storage : store })

app.post("/data", upload.single("pedri_celebration"), (req,res) => { // upload.single("pedri_celebration") is another kind of middleware and if you want to upload multiple files, give array as a parameters.
    var file = req.file
    console.log(file)
    if (file){
        res.type("text/html")
        res.send("<h1>Your file named : <span sytle = 'color : indigo'>" + file.originalname + "</span> has been uploaded to  " + file.destination + " </h1>" )
    }
    else{
        res.send("No file uploaded bro!!")
    }
})

app.listen(8787)