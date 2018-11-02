const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const DotEnv = require('dotenv');
DotEnv.config( { path : './variables.env'})
var app = express();
app.use(bodyParser());
app.use(bodyParser.json({limit:'10mb'}));
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req,res,next){
   res.setHeader( 'Access-Control-Allow-Origin', process.env.PORT);
  //  res.setHeader( 'Access-Control-Allow-Origin', process.env.PORT);
  
   res.setHeader( 'Access-Control-Allow-Methods', 'GET, POST, OPTIONS, DELETE');
   res.setHeader( 'Access-Control-Allow-Headers', 'Accept,Accept-Language,Content-Language,Content-Type');
   res.setHeader( 'Access-Control-Expose-Headers', 'Content-Length,Content-Range');
next();
});

app.use(express.static(__dirname + '/dist/cvSiteAng'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/dist/cvSiteAng/index.html'));
});

app.post("/sendmail",function (req, res){
   Envoi = req.body;

   var transporter = nodemailer.createTransport({
     service: 'gmail',
       auth: {
         user: "floriannodemailer@gmail.com",
         pass: "[N0d1ma!l1r]"
       }
     });
     // Voir doc nodemailer, c'est pour créer un mail qui n'en est pas un chez eux.

     var mailOptions = {
       from: Envoi.email,
       to: "floriannodemailer@gmail.com",
       subject: "Message de " + Envoi.name + " :" + Envoi.Object,
       text: "Contact :" + Envoi.email + "\n" + Envoi.message
     };
     // DOnnée du mail

     transporter.sendMail(mailOptions, function (error, info) {
       if (error) {
         console.log(error);
       } else {
         console.log("Email sent: " + info.response);
       }
     });

   res.end(JSON.stringify('Votre a message a été envoyé'));
})


app.listen(process.env.PORT ||8012, ()=>{
   console.log('Listen on PORT 8012');
})