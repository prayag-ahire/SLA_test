const express = require("express");
const { createUser } = require("./types");
const { user } = require("./db");
const app = express();

app.use(express.json());

app.post("/signup",function(req,res){
// this is for creating new account

})

app.post("/signin",async function(req,res){
// if you have already signup then 

const createPayload = req.body;
const parsedPayload = createUser.safeParse(createPayload)
// you want some exseption then use parse
//you want only sucsess and failer then use safeparse

if(!parsedPayload.success){
    res.status(411).json({
        masg:"you sent the wrong information",
    })
    return;
}

await user.create({
    user:createPayload.user,
    password: createPayload.password
})

res.json({
    masg:"user account created successfully"
})
})


app.listen(3000);