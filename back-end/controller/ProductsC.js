import { Product } from "../model/ProductsM.js";


const createProduct = async (request, response) => {
  
    const result = await Product.create({
      name: "Fireplace",
      image:
        "https://i.pinimg.com/736x/1c/c2/1e/1cc21e15ef31db67f1346e37fff7c6f5.jpg",
   
      price: "25000"
     
    });
    response.json({
      success: true,
      data: result,
    });

};
const getProdData = async (request, response) => {
  const result = await Product.find();

  response.json({
    success: true,
    data: result,
  });
};


export { createProduct , getProdData };
