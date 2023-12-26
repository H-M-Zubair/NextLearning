"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
const page = ({ params }: { params: any }) => {
 
  const [product, setProduct] = useState<any>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${params.id}`
        );
        const data = response.data;
        console.log("Product details fetched successfully:", data);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details", error);
      }
    };
    
    fetchData();
  }, [params.id]);
  if (!product) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h1 className="text-black flex justify-center text-6xl p-4 font-bold border-b-4 ">
        {" "}
        Product Details
      </h1>
      <div>
        <div className=" border-4 rounded-lg mt-56 flex flex-row p-4">
          <img
            src={product.images[0]}
            alt="Product Image"
            className="h-96 object-contain rounded-lg"
          />
          <div className="ml-4 mt-4 ">
            <p className="lg:text-4xl md:text-3xl text-xl my-3 ">  <b>Title:</b> {product.title}</p>
            <p className="lg:text-4xl md:text-3xl text-xl my-3"> <b>Price:</b>  {product.price} </p>
            <p className="lg:text-4xl md:text-3xl text-xl my-3"><b>Brand:</b> {product.brand} </p>
            <p className="lg:text-4xl md:text-3xl text-xl my-3"><b>Category:</b> {product.category}</p>
            <p className="lg:text-4xl md:text-3xl text-xl my-3"> <b>Description:</b>{product.description} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
