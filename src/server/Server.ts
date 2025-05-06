import express from "express";
import dotenv from "dotenv";
import routes from "./routes";

dotenv.config();

const server = express();

server.use(express.json());
server.use(routes);

export default server;