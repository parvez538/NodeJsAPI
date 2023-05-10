import express from "express";

const app=express();

app.use(express.json());

app.get("/",(req,resp)=>{

    resp.send("hello Everyone");

})

app.get("/api/users",(req,resp)=>{

    resp.json({
        success:true,
        users:[],
    })

})
app.post("/api/new",(req,resp)=>{

    const {name,email}=req.body;
     resp.json({
        success:true,
        massage:"Registered Successfully",
        name:name,
        email:email,
     })
})



app.listen(4000,()=>{
    console.log("server created on port 4000");
})