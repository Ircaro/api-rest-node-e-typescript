import express from "express";

const server = express();

server.get("/", (req, res) => {
    res.json({ message: "API is running!" });
});

export default server;

