const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const app = express();
const ProductSchema = require("./schemas/ProductShema");
const UserSchema = require("./schemas/UserSchema");
const PORT = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());
mongoose.connect("mongodb+srv://admin:admin@cluster0.7cz8got.mongodb.net/db_products?retryWrites=true&w=majority");

const products = [
    {
        id: 946346453131,
        name: 'Echo Dot (8ª Geração)',        
        picture: 'https://cdn.akamai.steamstatic.com/steam/apps/367520/header.jpg',
        brand: 'Amazon',
        price: '250,00',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ab atque commodi obcaecati corporis dolorem illum nihil ratione libero. Illo voluptate amet dolorem? Consectetur cumque exercitationem architecto et! Vel, deserunt!'        
    },
    {
        id: 946346453132,
        name: 'Echo Dot (7ª Geração)',        
        picture: 'https://cdn.akamai.steamstatic.com/steam/apps/367520/header.jpg',
        brand: 'Amazon',
        price: '200,00',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ab atque commodi obcaecati corporis dolorem illum nihil ratione libero. Illo voluptate amet dolorem? Consectetur cumque exercitationem architecto et! Vel, deserunt!'        
    },
    {
        id: 946346453133,
        name: 'Echo Dot (5ª Geração)',        
        picture: 'https://cdn.akamai.steamstatic.com/steam/apps/367520/header.jpg',
        brand: 'Amazon',
        price: '180,00',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ab atque commodi obcaecati corporis dolorem illum nihil ratione libero. Illo voluptate amet dolorem? Consectetur cumque exercitationem architecto et! Vel, deserunt!'        
    },
]


//Conectando
app.get("/", (request, response) => {
    return response.json({ Ping: "Pong" });
});

//GET ALL
app.get("/products", async (request, response) => {
    const res = await ProductSchema.find();
    return response.json(res);
});

//GET BY ID
app.get("/products/:id", async (request, response) => {
    const id = request.params.id;
    const res = await ProductSchema.findById(id);
    if(!res){
        return response.status(404).json({message: "item not found"});
    }
    return response.json(res);

    // const product = products.find(
    //     (product)=>product.id === Number(request.params.id)
    // );
    // if(!product){
    //     return response.status(404).json({message: "item not found"});
    // }
    // return response.json(product);
});

//POST 
app.post("/products", async (request, response) => {
    const id = request.params.id;
    const res = await ProductSchema.create(request.body)
    // const body = request.body;
    // products.push({id: Date.now(), ...body });
    // return response.status(201).json({message: "item created"})
    return response.status(201).json(res);
});

//DELETE
app.delete("/products/:id", async (request, response) => {
    const id = request.params.id;

    try {
        await ProductSchema.findByIdAndRemove(id);
        return response.status(204).json()
    } catch (error) {
        return response.status(500)
    };
    
    // const indexProduct = products.findIndex((product)=>product.id === Number(request.params.id));
    // console.log(indexProduct)
    // products.splice(indexProduct, 1);
    // return response.json({message: "deleted item"})
})

//PUT
app.put("/products/:id", async (request, response) => {
    const id = request.params.id;
    const body = request.body
    const res = await ProductSchema.findByIdAndUpdate({_id: id}, body);
    return response.json(res);

    // const indexProduct = products.findIndex((product)=>product.id === Number(request.params.id));
    // products[indexProduct].description = request.body.description
   
    // return response.json({message: "modified item"})
})


//User

//GET ALL
app.get("/user", async (request, response) => {
    const res = await UserSchema.find();
    return response.json(res);
});

//GET BY ID
app.get("/user/:id", async (request, response) => {
    const id = request.params.id;
    const res = await UserSchema.findById(id);
    if(!res){
        return response.status(404).json({message: "item not found"});
    }
    return response.json(res);

    // const product = products.find(
    //     (product)=>product.id === Number(request.params.id)
    // );
    // if(!product){
    //     return response.status(404).json({message: "item not found"});
    // }
    // return response.json(product);
});

//POST 
app.post("/user", async (request, response) => {
    const id = request.params.id;
    const res = await UserSchema.create(request.body)
    // const body = request.body;
    // products.push({id: Date.now(), ...body });
    // return response.status(201).json({message: "item created"})
    return response.status(201).json(res);
});

//DELETE
app.delete("/user/:id", async (request, response) => {
    const id = request.params.id;

    try {
        await UserSchema.findByIdAndRemove(id);
        return response.status(204).json()
    } catch (error) {
        return response.status(500)
    };
    
    // const indexProduct = products.findIndex((product)=>product.id === Number(request.params.id));
    // console.log(indexProduct)
    // products.splice(indexProduct, 1);
    // return response.json({message: "deleted item"})
})

//PUT
app.put("/products/:id", async (request, response) => {
    const id = request.params.id;
    const body = request.body
    const res = await UserSchema.findByIdAndUpdate({_id: id}, body);
    return response.json(res);

    // const indexProduct = products.findIndex((product)=>product.id === Number(request.params.id));
    // products[indexProduct].description = request.body.description
   
    // return response.json({message: "modified item"})
})

app.listen(PORT, ()=>console.log("servidor iniciado em http://localhost:" + PORT))