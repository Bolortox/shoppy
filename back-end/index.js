import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import { getProdData, prodRouter } from "./routes/ProductsR.js";
mongoose.connect(
  "mongodb+srv://bolortogosboujee:YKQJCyO8XUM1rnmN@bolortox.i93uz.mongodb.net/test"
);
const PORT = 8080;
const server = express();

server.use(cors());
server.use("/api", prodRouter);
server.use("/api", getProdData )

server.listen(PORT, () => {
  console.log(`server is working http://localhost:${PORT}`);
});
