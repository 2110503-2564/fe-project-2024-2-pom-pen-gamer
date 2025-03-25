'use client';

import { useState } from "react";
import { signIn } from "next-auth/react"; // Import signIn function from next-auth
import { useRouter } from "next/navigation"; // Use for redirection

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  // Handle login submission
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form default submission

    const response = await signIn("credentials", {
      redirect: false, // Prevent automatic redirect
      email,
      password,
    });

    if (response?.error) {
      setError("Invalid credentials, please try again.");
    } else {
      // If login is successful, redirect to the dashboard (or any other page)
      router.push("/"); // Redirect to the desired page
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100 bg-gray-200 bg-cover bg-center"  style={{backgroundImage : "url('/img/bg1.jpg')"}}>   
      <div className="p-10 my-10 bg-white rounded-lg shadow-lg w-full sm:w-[400px] border-4 border-red-900">
        <div className="text-3xl text-red-900 mb-4 text-center font-bold">Login</div>

        {/* Error message */}
        {error && (
          <div className="bg-red-200 text-red-800 p-2 rounded mb-4 text-center">
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          {/* Email Field */}
          <div className="flex items-center my-2">
            <label className="w-auto block text-gray-700 pr-4" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Field */}
          <div className="flex items-center my-4">
            <label className="w-auto block text-gray-700 pr-4" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-700 hover:bg-green-700 text-white p-2 rounded mt-4"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}