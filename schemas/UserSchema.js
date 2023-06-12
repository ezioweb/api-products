const {Schema, model} = require("mongoose");

const UserSchema = new Schema({
    user: String,    
    password: String,    
});

module.exports = model("Users", UserSchema);