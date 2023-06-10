const {Schema, model} = require("mongoose");

const ProductSchema = new Schema({
    name: String,    
    picture: String,
    brand: String,
    price: String,
    description: String
});

module.exports = model("Products", ProductSchema);