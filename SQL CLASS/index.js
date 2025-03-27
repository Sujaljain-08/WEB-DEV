const mysql = require('mysql2');
const { faker } = require('@faker-js/faker');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test',
    password:'Sujal@08',
  });

  connection.query("select * from t1",(err,result)=>{
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
  connection.end();
  
 function user(){
    return {userId: faker.string.uuid(),
    username: faker.internet.username(), // before version 9.1.0, use userName()
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password()};
 }

