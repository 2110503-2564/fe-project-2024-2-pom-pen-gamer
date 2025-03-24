'use client';
import { authOptions } from "../[...nextauth]/authOptions";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";
import { dbConnect } from "@/db/dbConnect";
import User from "@/db/models/User";  // Update to use User model
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import registerUser from "@/libs/userRegister";
 import { useState } from "react";


export default   function RegisterPage() {

  const [name, setName] = useState("");
  const [telnumber, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-xl text-blue-700 mb-4 text-center">Create User</div>

        {/* Name Field */}
        <div className="flex items-center my-2">
          <label className="w-auto block text-gray-700 pr-4" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue="admin1"
            placeholder="Name"
            required
            className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        {/* Telephone Field */}
        <div className="flex items-center my-2">
          <label className="w-auto block text-gray-700 pr-4" htmlFor="tel">Telephone</label>
          <input
            type="text"
            id="tel"
            name="tel"
            defaultValue="02-12345678"
            placeholder="Telephone"
            required
            className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
            value={telnumber}
            onChange={(e) => {
              setTel(e.target.value);
            }}
          />
        </div>

        {/* Email Field */}
        <div className="flex items-center my-2">
          <label className="w-auto block text-gray-700 pr-4" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue="admin1@gmail.com"
            placeholder="Email"
            required
            className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        {/* Password Field */}
        <div className="flex items-center my-2">
          <label className="w-auto block text-gray-700 pr-4" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            defaultValue="1111111"
            placeholder="Password"
            required
            className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        {/* Submit Button */}
        <button
          className="w-full bg-blue-500 hover:bg-blue-700 text-white p-2 rounded mt-4"
           onClick={async() => {const response =await registerUser( name,telnumber,email,password);
                       alert(response);}}
        >
          Create User
        </button>
   
    </div>
  );
}