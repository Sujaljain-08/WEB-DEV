let express=require("express");
const app=express();
let path=require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(3000,()=>{
    console.log("Server started");
});

let arr=[{username:"Sujal",content:"The second best time to start is now!!"}
    ,{username:"Sujal",content:"Batman has no limts!!"},
    {username:"Sujal",content:"WIN HEY YAA TOH LUN HEY!!"}];

app.get("/posts",(req,res)=>{
    res.render("Quora.ejs",{arr});});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})

app.post("/posts",(req,res)=>{
   let {username,content}=req.body;
   arr.push({username,content});});


