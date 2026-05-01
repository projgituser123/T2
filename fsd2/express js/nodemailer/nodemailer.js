var expr = require("express")
const app = expr()

const nm = require("nodemailer")

app.use(expr.urlencoded())
app.use(expr.static("../public", {index : "form.html"}))

app.post("/login", (req,res) => {
    var trans = nm.createTransport({
        host : "smtp.gmail.com",
        auth : {user : "sender@gmail.com", pass : "app password"},
        port : 465
    })
    var mailoption = {
        from : "sender@gmail.com",
        to : req.body.user_email,
        subject : "Response as in mail.."
       
})

/*
let express = require("express")
let app = express()
let nodemailer = require("nodemailer");

app.use(express.static("../Public",{index:"nodeMail.html"}))

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "abc@gmail.com",
    pass: 1234,
  },
});

app.post("/login", async (req, res) => {
  try {
    const info = await transporter.sendMail({
      from: 'ljkuTeam@gmail.com',
      to: req.body.umail,
      subject: "Account Created , Password Saved",
      text: "Hello User",
      html: "<b>Success ✅</b>",
    });
  } catch (err) {
    console.error("Error while sending mail:"); 
  }
});



*/