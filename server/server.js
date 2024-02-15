const express = require("express");
const app = express();

const database = require("./config/database");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 4000;

//database connect
database.connect();

app.get("/" , (req,res) => {
    return res.json({
        success:true,
        message:"SERVER IS LIVE"
    })
})

app.listen(PORT , () => {
    console.log(`Server is Running at ${PORT}...`)
})