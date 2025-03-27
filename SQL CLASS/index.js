const mysql = require('mysql2');
const { faker } = require('@faker-js/faker');

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
  
let data=[];
for(let i=0;i<101;i++){
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
  connection.end();

