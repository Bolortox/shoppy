import express from "express";
import { createProduct, getProdData } from "../controller/ProductsC.js";

const prodRouter = express.Router();

prodRouter.post("/prod", createProduct);
prodRouter.get("/prod", getProdData)

export {prodRouter , getProdData};
