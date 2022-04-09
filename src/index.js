const express = require("express");
const mongoose = require("mongoose");
const User = require("./model/user.model");
const PORT = 8080;
const DB_URL = "mongodb://127.0.0.1:27017/codejudge";

const connect = () => {
    return mongoose.connect(DB_URL);
}

let app = express();
app.use(express.json());

app.post("/api/leads", async (req,res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (e){
        console.log(e.message);
        res.status(400);
    }
})

app.get("/api/leads", async (req, res) => {
    try {
        const user = await User.find();
        res.status(200).json(user);
    }catch (e){
        console.log(e.message);
        res.status(404);
    }
})
app.get("/api/leads/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    }catch (e){
        console.log(e.message);
        res.status(404);
    }
})

app.listen(PORT, async () => {
    try {
       await connect()
       console.log(`WOrking on ${PORT}`);   
    } catch (e) {
        console.log(e.message);
    }
});
