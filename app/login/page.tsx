'use client'
import React from 'react'
import axios from 'axios';
import { setUser } from '../redux/slice';
import { useState,useEffect } from "react";
import { setCookie,getCookie } from 'cookies-next';
import {useRouter} from 'next/navigation';
import { useDispatch } from 'react-redux';
const Page = () => {
  const dispatch = useDispatch();
    const router=useRouter();
    const [details, setDetails] = useState({username: "",password: "",});
    useEffect(() => {
        if (getCookie("token")) {
          router.push("/productlist");
        }
      }, [router]);
    const handleChange = (e: any) => {
      const { name, value } = e.target;
      setDetails((prev) => {
        return { ...prev, [name]: value };
      });
    };
    const handleSubmit = (e: any) => {
      e.preventDefault(); //to avoid from reloading the Page
      axios.post("https://dummyjson.com/auth/login",details)
      .then((response:any)=>{
         const token=response.data.token;
         //Dispatches the User Data
         const { id, username, email, firstName, lastName } = response.data;
         console.log(id, username, email, firstName, lastName);
         dispatch(setUser({ id, username, email, firstName, lastName }));

        //Saving token in Cookie
         setCookie('token', token);
         router.push('/productlist');
    })
         //Throwing Error if not Fetched Data
    .catch((error) => {
      console.error('Login failed:', error);
    });
  };
  return (
    <div>
        <h1 className='text-center p-4 font-bold text-2xl bg-gray-400'>To See the Products You Have to Login First</h1>
        <div className='p-4 flex justify-center items-center'>
    <form onSubmit={handleSubmit} >
       <div className='py-2' >
       <label   htmlFor="">UserName: </label>
        <input type="text" className='border-2 border-gray-700 p-1' name="username" placeholder='Enter Unique Name' id="username" onChange={handleChange} />
       </div>
       <div>
       <label   htmlFor="">Password: </label>
        <input type="password" onChange={handleChange} className='border-2  border-gray-700 p-1' name="password" placeholder='Enter Password' id="password" />
        </div>
        <button type='submit' className='bg-slate-600 text-white rounded-md ' >Submit </button>
    </form>
    </div>
    </div>
  )
}
// username: 'kminchelle',
// password: '0lelplR',

export default Page