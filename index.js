const express= require("express");
const app= express();
const path= require("path");

const port=8080;

app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    res.render("home.ejs")
})

app.get("/hello",(req,res)=>{
    res.send("hello")
})

app.get("/rolldice",(req,res)=>{
    let diceVal=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{diceVal})
})

app.get("/ig/:username",(req,res)=>{
    const instaData=require("./data.json");
    console.log(instaData  );
    
    let {username}=req.params;
    const followers=["divyansh","atul","vijay"];
    
    // res.render("instagram.ejs",{username,followers});
   const data=instaData[username];

   if(data){
    res.render("instagram.ejs",{username,data});
   }else{
    res.render("error.ejs")
   }
    
})

app.listen(port,()=>{
    console.log(`listening to port ${8080}`);
    
})