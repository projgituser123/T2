var expr = require("express")
var app=expr()

app.use(expr.static("../public", {index : "calculator_pb.html"}))

app.get("/calcans", (req,res)=>{
    num1 = parseInt(req.query.num1)
    num2 = parseInt(req.query.num2)

    if ((num1>0)&&(num2>0)){
        if(req.query.formula == "add"){
            add = num1+num2
            res.write("addition of number is = " + add)
        }
        else if(req.query.formula == "sub"){
            sub = num2 -num1
            res.write("subtraction is = "+ sub)
        }
        else if(req.query.formula == "mul"){
            mul = num1*num2
            res.write("multiplication of two number is = "+ mul)
        }
        else{
            res.write("please select any formula ...")
        }
    }
    else{
        res.write("please input valid number..")
    }
    res.send()
})
app.listen(8000)