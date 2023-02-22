const express = require("express");
const mongoose = require('mongoose')
const connection = mongoose.connect('mongodb+srv://JayShukla:jayshukla@cluster0.9zippbx.mongodb.net/MYCAL?retryWrites=true&w=majority')
const app= express();
app.use(express.json())
 let Dbmodel ;
let email;
// Creating new user collection  step 2 
function CDB(nameofcollection){
email=nameofcollection;
const DBCmodel = mongoose.model(nameofcollection,mongoose.Schema({
    title:String,
    discription:String,
    date:String,
    time:String,
    email:String
}))

Dbmodel=DBCmodel
}
// Creating new user collection step 2








app.get("/",(req,res)=>{
    res.send("Server is Active ")
})

// Creating new user collection step 1
app.post("/regis",(req,res)=>{

    let data= req.body;

CDB(data.email)

res.send("usercollection is created ")

});
// Creating new user collection step 1

// new event creating 
app.post("/newevent",(req,res)=>{
let data = req.body;

Dbmodel.insertMany([data])
res.send({"msg":"new event added "})
})

// new event creating 

app.get("/allevents",async(req,res)=>{

    let data = await Dbmodel.find()

res.send({"msg":"le bhai data","Data":data})

})



app.listen(8000,()=>{

try {
    connection;
    console.log("Connection to db successful")
} catch (error) {
    
}

    console.log("Listning to port 8000")
})

