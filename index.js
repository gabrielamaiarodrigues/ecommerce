const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://user:ufrpesd2023@cluster0.m46gy5n.mongodb.net/")
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

  app.get("/api/test", ()=>{
    console.log("teste ok")
  })
app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
  });