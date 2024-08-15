const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://prayagahire365:7jbU0wj5uzs7sEve@cluster101.ctkeaof.mongodb.net/paytm");

const userSchema = new mongoose.Schema({
    username:String,
    password: String,   
    firstName:String,
    lastName: String,
})


const accountSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    balance:{
        type:Number,
        required:true
    }
})
const User = mongoose.model('User',userSchema);
const Account = mongoose.model('Account',accountSchema);
module.exports = {
    User,Account
}