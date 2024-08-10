const { User } = require("../models/user.model");
const bcrypt = require("bcryptjs");
const { generateTokenAndSetCookie } = require("../utils/generatetoken");

const signup = async(req,res)=>{
    try{
        const body = req.body;
        if(body.password != body.confirmPassword){
            return res.status(400).json({
                error:"password don't match"
            });
        }

        const user = await User.findOne({username: body.username})

        if(user){
            return res.status(400).json({error:"username already exists"})
        }

        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(body.password,salt);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${body.username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${body.username}`;


        const newUSer = new User({
            fullName:body.fullName,
            username:body.username,
            password:hashpassword,
            gender:body.gender,
            profilePic: body.gender === "male" ? boyProfilePic : girlProfilePic
            
        })

        if(newUSer){
            generateTokenAndSetCookie(newUSer._id,res);
            await newUSer.save();

        res.status(201).json({
            _id:newUSer._id,
            fullname:newUSer.fullName,
            userName:newUSer.username,
        })
        }else{
            res.status(400).json({error: "Invalid user data"})
        }
    }
    catch(error)
    {
        console.log("eror in signup controller ,",error.message)
        res.status(500).json({error:"Interval Server error"})
    }
    
};

 const signin = async (req,res)=>{
    try{
         const body = req.body;
         const user = await User.findOne({username:body.username});
         const ispasswordCorrect = await bcrypt.compare(body.password,user?.password || "");
         
         if(!user || !ispasswordCorrect){
            return res.status(400).json({error:"Invalid username or password"});
         }

         generateTokenAndSetCookie(user._id,res);

         res.status(200).json({
            _id:user._id,
            fullName:user.fullName,
            username:user.username,
            profilePic:user.profilePic,
         });
    }catch(error){
        console.log("Error in login controller",error.message);
        res.status(500).json({error:"Internal Server error"});
    }
};

 const signout = (req,res)=>{
    try{
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json({message:"Logged out successfully"})
    }catch{
        console.log("Error in logout controller",error.message);
        res.status(500).json({error:"Internal Server Error"});
    }
};

module.exports = {
    signup,signin,signout
}