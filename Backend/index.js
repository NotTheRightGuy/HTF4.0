const express = require('express');
const mongoose = require("mongoose");
const app = express();
const PetRoutes = require("./routes/PetRoutes");
const UserRoutes = require("./routes/UserRoutes");
const PORT = process.env.PORT || 4000;


app.use("/pets",PetRoutes)
app.use("/users", UserRoutes)

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


//server
app.listen(PORT, (err)=>{
    if(err){
        console.log("Server not started");
    }else{
        console.log("Server started "+ PORT);
    }
});