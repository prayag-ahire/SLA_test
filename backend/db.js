const mongoose = require("mongoose");
const { number, string } = require("zod");

mongoose.connect("mongodb+srv://prayagahire365:7jbU0wj5uzs7sEve@cluster101.ctkeaof.mongodb.net/SLA");

const userSchema = mongoose.Schema({
    firstname:String,
    lastname:String,
    mobailno:String,
    gender:String,
    birthdate:String,
    username: String,
    password: String
})

const user = mongoose.model('users',userSchema);

module.exports = {user}