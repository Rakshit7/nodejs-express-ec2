import express from "express";

const app = express();

app.use("/", (req, res) => {
    res.json("Server is up and running 😎😎");
})
app.listen(5001, () => {
    console.log("Server is up and running 😎😎");
})