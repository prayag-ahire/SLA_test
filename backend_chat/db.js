const mongoose = require("mongoose");

const connectDB = ()=>{
    try{
        mongoose.connect("mongodb+srv://prayagahire365:7jbU0wj5uzs7sEve@cluster101.ctkeaof.mongodb.net/chat-app");
        console.log("connected to mongoDB");
    }
    catch(error){
        console.log("error connecting to mongoDB",error.message)
    }
    
}

module.exports = {connectDB};