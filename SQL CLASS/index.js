const mysql = require('mysql2');
const { faker } = require('@faker-js/faker');
const express=require("express");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "views")); // Correct way to set the views directory
app.set("view engine", "ejs"); // Set EJS as the view engine

let data=[];


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test',
    password:'Sujal@08',
  });

  function user(){
   return [faker.string.uuid(),
   faker.internet.username(), // before version 9.1.0, use userName()
   faker.internet.email(),
   faker.internet.password()];
}
let num;
app.get("/",(req,res)=>{
   connection.query('SELECT * FROM T3',(err,result)=>{
   if(err){
      console.log("Error :",err);
   }
   else{
      res.render("noOfUsers",{result});
      console.log(result);
   }
});
});


app.listen(3000,()=>{console.log("server started !!")});
  

for(let i=0;i<100;i++){
   data.push(user());
}

let q ="INSERT INTO T3 (id,username,email,password) values ?"
  connection.query(q,[data],(err,result)=>{
   try{
      if(err){
         throw err;
      }
      else{
         console.log(result);
      }
   }
   catch{
      console.log("err :",err);
   }
  })
//   connection.end();

