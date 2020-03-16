var express = require("express");
var app = express();

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("home");
})
app.get("/about",(req,res)=>{
    res.render("about");
})

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});