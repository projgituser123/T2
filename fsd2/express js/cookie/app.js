/* 
You have been assigned to develop a user feedback form for a website 
using Express.js and cookies. Implement the following requirements: 
Process a form with the following fields: Name, Email , Message , Rating 
(radio buttons: Bad, Average, Good, Very Good, Excellent) When the user 
submits the form, store their feedback information (name, email, message, 
and rating) in a cookie named "feedback" that expires in 10 seconds. 
Display a confirmation message to the user after successfully submitting the 
form & Create a link to display the feedback details stored in the "feedback" 
cookie. When the user click to the link, retrieve the feedback information 
from the cookie and display it on the page also include a link on the 
feedback details page to Logout. When the user clicks the link, user 
redirected to home page. Make app.js file use get method in express js. No 
need to write html file having form elements.

*/

var expr = require("express")
var app = expr()

const cp = require("cookie-parser")

app.use(cp())
app.use(expr.static(__dirname, {index : "feedback.html"}))


app.get("/submit-feedback", (req,res) => {
    res.type("text/html")
    feedback = req.query
    console.log(feedback)
    res.cookie("feedback", feedback, {maxAge:10000})
    res.write(`Thank you for submitting the feedback!`)
    res.write(`\nMove to next page : <a href = "/feedback-details">Show feedback  details</a>`)
    res.send()
})
app.get("/feedback-details", (req,res)=>{
    feedback = req.cookies.feedback // why this LOC ? coz the we want to store the feedback details even after it gets wiped out after 10sec and we do not want undefined answer while printing...
    if (feedback){
        res.send(`<h1>feedbac Deatils :::</h1>
                <h3>Name : </h3>${feedback.name}
                <h3>Email : </h3>${feedback.email}
                <h3>Message : </h3>${feedback.message}
                <h3>Rating : </h3>${feedback.rating}
                <a href ="/">Logout</a>`)
    }
    else{
        res.send("No feedback available")
    }
})

app.listen(5656)