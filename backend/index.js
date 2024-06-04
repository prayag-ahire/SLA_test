const express = require("express");
const { createUser } = require("./types");
const { user } = require("./db");
const app = express();

app.use(express.json());


app.post("/signup", async function(req,res){
// this is for creating new account
const createPayload = req.body;
const parsedPayload = createUser.safeParse(createPayload);
// you want some exseption then use parse
//you want only sucsess and failer then use safeparse

if(!parsedPayload.success){
    res.status(411).json({
        masg:"you sent the wrong information"
    })
    return;
}

await user.create({
    firstname:createPayload.firstname,
    lastname:createPayload.lastname,
    mobailno:createPayload.mobailno,
    gender:createPayload.gender,
    birthdate:createPayload.birthdate,
    username:createPayload.username,
    password: createPayload.password
})

res.json({
    masg:"user account created successfully"
})

})




app.post("/signin",async function(req,res){
// if you have already signup then 

  const username = req.body.username;
  const password = req.body.password;

  const existtingUser = await user.findOne({username:username});

  if (existtingUser) {
    if(existtingUser.username == username && existtingUser.password == password){
        res.json({
            masg:"username and password is correct"
        })
    }else{
        res.json({
            masg:"Error WRONG input username and password"
        })
    }
}else{
    return res.status(403).json({
      msg: "User Does Not Exist ",
    });
  }
})


app.listen(3000);
