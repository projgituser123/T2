var exp = require("express");
var app = exp() // made a express object

var jsonobj = {"name":"pedri","club":"barca", "position":"cm","jnum":8,"classplayer":true};

app.get("/",function(req,res){
    res.set("Content-type", "text/plain") // it is similar to res.writeHead(status code, {content type : text/plain})
    res.write("Hello express js")
    //res.send("ending the response") 
    res.send() // it is similar to res.end() but you cannot send any string data in res.send() method if you have written res.write() already..
})
app.get("/res_send",function(req,res){
    res.set("content-type","text/plain")
    res.send("No write method \nsending data from res.send...")
})
app.get("/send_json_data", function(req, res){
    res.type("application/json")
    //res.write(jsonobj.jnum.toString()) // res.write only allows the string data, so we have to concate the value of jsonobj with a string "" or you can write jsonobj.jnum.toString()
   // res.set("content-type","application/json")
   // res.write(JSON.stringify(jsonobj))
    //res.write(jsonobj) // this will give TypeError. therefore in res.write(data should be in string)
   // res.send(JSON.stringify(jsonobj)) // it will print the data
   //res.send(jsonobj) // the main fetaure of res.send() it will support all the datatype even w/o writing the LOC :res.set(), so you can also just write res.send (string/int/json) and it will automatically "set" the response's datatype/content-type..
   res.send(jsonobj.jnum)
})
app.get("/html_res",function(req,res){
    res.type(".html")
    res.write("string")
    res.write("<h1> welcome to express js \nthis is html data...<h1>")
    res.send()
})
app.get("/res_json", function(req,res){
    res.type("application/json")
    res.json(jsonobj) // this will send the data and also automatically terminate the response.
})
app.get("/params/:pname/:ptype", function(req,res){
    res.send(req.params) // it will create json object where the key is "pname" and whatever you write after say for eg:  http://localhost:80001/params/pedri then; pedri is your value // answer is = {"pname" : "pedri", "ptype" : "cm"}
    // you can also write req.query but you have to give proper url format
})
app.listen(8001, ()=>{
    console.log("server started...")
})