const express = require('express');
const zod = require('zod');
const { User ,Account } = require('../db');
const { JWt_SECRET } = require('../config');
const jwt = require('jsonwebtoken');
const { authMiddleware } = require('../middleware');
const router = express.Router();


// create zod body for incoming body
const signupSchema = zod.object({
    username:zod.string().email(),
    password:zod.string(),
    firstName:zod.string(),
    lastName:zod.string(),

})
router.post("/signup",async (req,res) => {

    const {success} = signupSchema.safeParse(req.body); // this return obj so their for in brakets
    if(!success){
        return res.status(411).json({
            massage: "email already taken / Incorect inputs"
        })
    }

// check existing user is valid if true then stop their 
    const existingUser = await User.findOne({
        username: req.body.username
    })

    if (existingUser){
        return res.status(411).json({
            massage: "Email already taken / Incorect inputs11"
        })
    }

    const user = await User.create({
        username:req.body.username,
        password:req.body.password,
        firstName:req.body.firstName,
        lastName:req.body.lastName,

    },console.log("hii"))

    const userId = user._id;

    //crating new account
    await Account.create({
        userId,
        balance: 1000,
    })


// if user is not exist then create new user
    const token = jwt.sign({
        userId
    },JWt_SECRET);

    res.json({
        massage:"user created succesfully",
        token: token    
    })
})





//created zod for data validation that come form body  
const signinSchema = zod.object({
    username:zod.string().email(),
    password:zod.string()
})

router.post("/signin",async (req,res)=>{
const {success} = signinSchema.safeParse(req.body);

if(!success){
    return res.status(411).json({
        message: "Email is "
    })
}

const user = await User.findOne({
    username:req.body.username,
    password:req.body.password
})

if(user){
    const token =jwt.sign({
        userId:user._id
    },JWt_SECRET);

    res.json({
        token:token
    })
    return;
}

res.json(411).json({
    message:"Error while logging in"
})


const updateBody = zod.object({
    password:zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),

})

router.put("/",authMiddleware,async(req,res)=>{
    const {success} = updateBody.safeParse(req.body);

    if(!success){
        res.status(411).json({
            message: "Error while updating information"
        })
    }

    await User.updateOne(req.body,{
        id:req.userId
    })

    res.json({
        message:"update information successfully"
    })
})

router.get("/bulk", async(req,res)=>{
    const filter = req.query.filter || "";

    const users = await users.find({
        $or:[{
            firstName:{
                "$regex": filter
            }
        },{
            lastName:{
                "$regex":filter
            }
        }]
    })

    res.json({
        user: users.map(user=>({
            username:user.username,
            firstName:user.firstName,
            lastName:user.lastName,
            _id: user._id
        }))
    })
})
})
module.exports = router;