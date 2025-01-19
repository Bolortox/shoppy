import { useEffect, useState } from "react";

export const ProductDisplay = () => {
  interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
  }

  const [products, setProduct] = useState<Product[]>([]);

  const getProdData = async () => {
    const response = await fetch("http://localhost:8080/api/prod");
    const data = await response.json();
    setProduct(data.data);
  };
  console.log(products);

  useEffect(() => {
    getProdData();
  }, []);
  return (
    <div className="w-screen min-h-screen bg-[#edece9] font-title">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 gap-4">
          {products?.map((prod: Product) => (
            <div key={prod.id} className=" ">
              <div className="w-[520px] aspect-square overflow-hidden">
                <img
                  src={prod.image}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4 text-center">
                <h2 className="text-xl font-medium">{prod.name}</h2>
                <p className="text-sm mt-2">{prod.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
