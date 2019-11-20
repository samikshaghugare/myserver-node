var express = require("express");
var obj = express();

var studrouter=require("./student");

obj.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

obj.use(express.json());
obj.use("/students",studrouter);

obj.listen(6789,function(){
    console.log("server stared on 6789...");
})