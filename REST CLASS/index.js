let express=require("express");
const app=express();
let path=require("path");
let methodOverride = require('method-override')
const { v4: uuidv4 } = require('uuid');

app.use(methodOverride('_method'))

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(3000,()=>{
    console.log("Server started");
});

let arr=[{username:"Sujal",content:"The second best time to start is now!!",id:uuidv4()}
    ,{username:"Sujal",content:"Batman has no limts!!",id:uuidv4()},
    {username:"Sujal",content:"WIN HEY YAA TOH LUN HEY!!",id:uuidv4()}];

app.get("/posts",(req,res)=>{
    res.render("Quora.ejs",{arr});});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})

app.post("/posts",(req,res)=>{
   let {username,content}=req.body;
   id=uuidv4();
   arr.push({username,content,id});
   res.redirect("/posts");
});

app.get("/posts/:id",(req,res)=>{
    console.log(req.params);
   let {id}=req.params;
   let post=arr.find((p)=>id===p.id);
   res.render("explore.ejs",{post});
});

app.get("/posts/edit/:id",(req,res)=>{
    let {id} = req.params;
    let post=arr.find((p)=>id===p.id);
    res.render("edit.ejs",{post});   
});

app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=arr.find((p)=>id===p.id);
    let newContent=req.body.content;
    post.content=newContent;
    res.redirect("/posts");
    
})
