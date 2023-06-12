const {Schema, model} = require("mongoose");

const UserSchema = new Schema({
    user: String,    
    passowrd: String,    
});

module.exports = model("Users", UserSchema);