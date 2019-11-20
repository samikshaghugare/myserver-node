var express = require("express");
var studrouter = express();
var mysql = require("mysql");

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'manager',
    database : 'student'
});

var mydata=[];
connection.connect();

studrouter.get("/",function(req,res){
    connection.query("select * from student_tbl",function(err,result){
        if(err==null)
        {
            mydata=result;
            res.contentType("application/json");
            res.send(JSON.stringify(mydata));
        }
        else
        {
            res.send("something went wrong");
        }
    });
});

module.exports=studrouter;

