const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://prayagahire365:7jbU0wj5uzs7sEve@cluster101.ctkeaof.mongodb.net/SLA");

const userSchema = mongoose.Schema({
    user: String,
    password: String
})

const user = mongoose.model('users',userSchema);

module.exports = {user}