"use client";
import { useState } from "react";

const LoginPage = () => {
  const [isSignIn, setIsSignIn] = useState(false);

  const handleLoginLogoutToggle = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="border- border-white space-y-3 md:space-y-5 w-full">
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
        {isSignIn ? (
          <button className="flex justify-center text-lg md:text-xl cursor-pointer bg-red-600 hover:bg-red-700 text-white font-bold rounded-md w-full px-4 py-3 transition-all ease-in-out duration-200">
            Sign In
          </button>
        ) : (
          <button className="flex justify-center text-lg md:text-xl cursor-pointer bg-red-600 hover:bg-red-700 text-white font-bold rounded-md w-full px-4 py-3 transition-all ease-in-out duration-200">
            Sign up
          </button>
        )}
      </div>
      <div className="flex flex-col space-y-2 md:space-y-3">
        <p
          className="flex cursor-pointer text-white font-semibold text-left"
          onClick={handleLoginLogoutToggle}
        >
          {isSignIn ? (
            <>
              New to Nextflix?
              <span className="px-1 font-bold">Sign Up</span>
            </>
          ) : (
            <>
              Already a user?<span className="px-1 font-bold">Sign In</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
