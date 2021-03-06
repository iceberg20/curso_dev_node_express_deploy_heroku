var PORT = process.env.PORT || 3000;

var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

app.use("/",router);

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});

app.listen(PORT,function(){
  console.log("Live at Port" + PORT);
});