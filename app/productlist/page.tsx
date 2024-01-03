"use client";
import React from "react";
import Link from "next/link";
import useProduct from "../hooks/useProduct";
import { useEffect } from "react";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { deleteCookie } from 'cookies-next';


const Page = () => {
  const router = useRouter();
  const {data,error,loading} = useProduct("https://dummyjson.com/products");
  if (loading) return <h1>LOADING...</h1>;
  if (error) { 
    console.error(error);
    return <h1>Error loading data</h1>;
  }
  const logout = () => {
    deleteCookie("token");
    router.push("/login");
  };
  return (
    <div className="w-full bg-gray-100">
      <h1 className="text-cyan-600 text-center font-bold text-3xl p-2">
        Product List
      </h1> 
      <span>
        <button onClick={logout} className="absolute top-2 right-2 text-cyan-600 font-semibold text-2xl"> Logout </button>
      </span>
      <div>
        <div className="container grid grid-cols-1 min-w-full max-w-screen-xl md:grid-cols-2 gap-10 lg:grid-cols-3 xl:grid-cols-4 p-10 mx-auto">
          {data &&
            data.map((item: any) => 
            (
              <Link key={item.id} href={`/productlist/${item.id}`}>
                <div
                  key={item.id}
                  className="p-4 border-gray-200 border-2 hover:border-gray-400 rounded-xl bg-white"
                >
                  <img
                    src={item.images[0]}
                    width={500}
                    height={500}
                    className="w-full h-80 object-contain"
                    alt="images"
                  />
                  <div className="px-2 flex flex-col">
                    <p className="mb-1">
                      <b>Name: </b> {item.title}
                    </p>
                    <p>
                      <b>Price: </b> ${item.price}
                    </p>
                    <div className="flex items-center justify-between">
                      <p>
                        <b>Brand: </b> {item.brand}
                      </p>
                      <p className="hover:text-cyan-500 font-semibold uppercase hover:scale-300 duration-300">
                        {"More Info>>"}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};


export default Page;

