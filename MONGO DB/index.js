const mongoose = require('mongoose');

main().then(()=>{console.log("success");})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');}

let userSchema = new mongoose.Schema({'name':String,
                              age:Number,
                              email:String
});

let User= new mongoose.model("User",userSchema);
// let user1 = new User({'name':'sujal',age:19,email:'bsujal2006@gmail.com'});
// user1.save();

// User.insertMany([{name:'surya',age:18,email:'suryahn.gmail.com'},{name:'satyam',age:20,email:'satyampawar.is24@rvce.edu.in'}])
// .then((res)=>
//     {console.log(res)})
// .catch((err)=>{console.log("error",err)});

User.deleteOne({name:'sujal'}).then(()=>{console.log("deleted")})
.catch((err)=>{
    console.log("Error :",err);
});

