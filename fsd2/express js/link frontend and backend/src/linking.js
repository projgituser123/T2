var expr = require("express")
var path = require("path")

var app = expr()

//app.use("/", expr.static("public"))  // either you give full path or just give folder name of consisitng frontend files...

// expr.static(__dirname) = this LOC is used to connect the files of frontend to backend ; where .static() "is a built-in middleware function in Express. It serves static files and is based on serve-static." and __dirname give the absolute path of the file being present in respective folder.
// console.log(__dirname) //D:\dvc\fsd2\express js\link frontend and backend // if you use __dirname = then all the frontend file should be in same file where .js is also present
console.log(__dirname) // D:\dvc\fsd2\express js\link frontend and backend\src
absolute_path = path.join(__dirname, "../public") // here ".." means to exit from the current folder..... syntax = path.join("path1","path2")
console.log(absolute_path) // D:\dvc\fsd2\express js\link frontend and backend\public

app.use("/", expr.static(absolute_path))

app.listen(9091)

// the model and model when trained fully will detect whether player is at acl tear risk or not? recommend model or py lib for this specific both functionality and should i yolov8 or mediapipe or open cv or openpose?
//For detecting crucial joints (hip, knee, ankle) and calculating joint angles for ACL tear risk analysis, a combination of YOLOv8 Pose and MediaPipe is often recommended. However, for your specific goal of training a downstream risk-classification model, a modular approach using standard Python scientific libraries is best.