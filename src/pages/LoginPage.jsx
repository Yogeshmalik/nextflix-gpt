"use client";
import { useState } from "react";

const LoginPage = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  return (
    <div className="border-2 border-white space-y-3 md:space-y-5">
      <div className="flex flex-col space-y-2">
        <h1 className="text-white font-bold text-2xl md:text-4xl flex tracking-tight">
          Enter your info to sign in
        </h1>
        <p className="text-gray-400 text-lg md:text-xl flex tracking-tight">
          Or get started with a new account.
        </p>
      </div>
      <div className="flex flex-col space-y-2 md:space-y-4 items-center w-full">
        <input
          type="email"
          className="flex px-4 py-3 bg-gray-950 font-semibold text-gray-100 border border-gray-700 rounded-md w-full"
          placeholder="Enter Email"
        />
        <input
          type="password"
          className="flex px-4 py-3 bg-gray-950 font-semibold text-gray-100 border border-gray-700 rounded-md w-full"
          placeholder="Enter Password"
        />
      </div>
      <div className="flex flex-col space-y-2 md:space-y-4 items-center w-full">
        {!isSignIn ? (
          <button className="flex justify-center text-lg md:text-2xl cursor-pointer bg-red-600 hover:bg-red-700 text-white font-bold rounded-md w-full px-4 py-3 transition-all ease-in-out duration-200">
            Sign In
          </button>
        ) : (
          <button className="flex justify-center text-lg md:text-2xl cursor-pointer bg-red-600 hover:bg-red-700 text-white font-bold rounded-md w-full px-4 py-3 transition-all ease-in-out duration-200">
            Sign Out
          </button>
        )}
      </div>
      <div className="flex flex-col space-y-2 md:space-y-3">
        {isSignIn ? (
          <p className="flex cursor-pointer text-white font-semibold text-left">
            New to Nextflix? <span>Sign Up</span>
          </p>
        ) : (
          <p className="flex cursor-pointer text-white font-semibold text-left">
            Already a user? <span>Sign In</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
