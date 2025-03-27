const mongoose = require("mongoose");

const URI = "mongodb+srv://Sruthi_123:Sruthi999@cluster0.ki4xh.mongodb.net/mern-app"; 

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
})
.then(() => console.log("MongoDB connected Successfully"))
.catch(err => console.log("MongoDB connection failed:", err));