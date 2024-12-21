"use client";

import { useEffect, useState } from "react";
import Loader from "../components/Loader";

export interface Client {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
    rating: {
        rate: number;
        count: number;
    }
}

export default function Client () {
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState<Client[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            } finally {
                setLoading (false);
            }
        };
        fetchData();
    }, []);

    if(loading) return (<div>
        <Loader/>
    </div>)

return (
    <div className="min-h-screen bg-gray-100 py-8">
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">PRODUCTS LIST</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8">
        {products.map((item) => {
          const { image, id, title, price, description, category, rating } = item;

          return (
            <div
              key={id}
              className="bg-white rounded-lg shadow p-4 flex flex-col items-center"
            >
              <img src={image} alt={title} className="h-40 object-contain mb-4" />
              <h2 className="text-lg font-bold text-gray-800 text-center">{title}</h2>
              <br/>
             <p className="text-sm text-gray-600 font-semibold text-center mt-2 mb-4">{description}</p>
              <div className="flex flex-col items-center">
                <span className="text-blue-500 font-bold">${price}</span>
                <span className ="text-sm text-gray-800 font-bold mt-1">{category}</span>
                </div>
                <div className="flex items-center text-gray-500">
            ⭐ {rating.rate} ({rating.count} reviews)
          </div>
          <br/>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Buy Now
        </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}