"use client";
import { useState } from "react";
import { login, signup } from "./actions";

const LoginPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const handleLoginLogoutToggle = () => {
    setIsSignIn(!isSignIn);
    setStatus("");
  };

  const handleLogin = async (formData) => {
    setStatus("Signing in...");
    const res = await login(formData);
    if (res?.error) setStatus(res.error);
    if (res?.success) setStatus(res.success);
  };

  const handleSignup = async (formData) => {
    setStatus("Signing up...");
    const res = await signup(formData);
    if (res?.error) setStatus(res.error);
    if (res?.success) setStatus(res.success);
  };

  return (
    <div className="space-y-3 md:space-y-5 w-full max-w-100 mx-auto">
      <div className="flex flex-col space-y-2">
        <h1 className="text-white font-bold text-2xl md:text-4xl flex tracking-tight">
          Enter your info to sign in
        </h1>
        <p className="text-gray-400 text-lg md:text-xl flex tracking-tight">
          Or get started with a new account.
        </p>
      </div>
      <form
        // onSubmit={handleSubmit}
        className="flex flex-col space-y-2 md:space-y-4 items-center w-full"
      >
        {!isSignIn && (
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex px-4 py-3 bg-gray-950 font-semibold text-gray-100 border border-gray-700 rounded-md w-full"
            placeholder="Enter Name"
            autoComplete="off"
            required
          />
        )}
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex px-4 py-3 bg-gray-950 font-semibold text-gray-100 border border-gray-700 rounded-md w-full"
          placeholder="Enter Email"
          autoComplete="off"
        />
        <input
          type="password"
          name="password"
          minLength={6}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="flex px-4 py-3 bg-gray-950 font-semibold text-gray-100 border border-gray-700 rounded-md w-full"
          placeholder="Enter Password (At least 6 characters)"
        />

        <div className="flex flex-col space-y-2 md:space-y-4 items-center w-full">
          {isSignIn ? (
            <button
              formAction={handleLogin}
              className="flex justify-center text-lg md:text-xl cursor-pointer bg-red-600 hover:bg-red-700 text-white font-bold rounded-md w-full px-4 py-3 transition-all ease-in-out duration-200"
            >
              Sign In
            </button>
          ) : (
            <button
              formAction={handleSignup}
              className="flex justify-center text-lg md:text-xl cursor-pointer bg-red-600 hover:bg-red-700 text-white font-bold rounded-md w-full px-4 py-3 transition-all ease-in-out duration-200"
            >
              Sign up
            </button>
          )}
          {status && (
            <p
              className={`mt-2 text-lg font-semibold ${status.includes("Check") || status.includes("success") ? "text-green-500" : "text-red-600"}`}
              role="status"
              aria-live="polite"
            >
              {status}
            </p>
          )}
        </div>
      </form>
      <div className="flex flex-col space-y-2 md:space-y-3 w-fit">
        <p
          className="flex cursor-pointer text-white font-semibold text-left"
          onClick={handleLoginLogoutToggle}
        >
          {isSignIn ? (
            <>
              New to Nextflix?
              <span className="px-1 font-bold">Sign Up.</span>
            </>
          ) : (
            <>
              Already a user?<span className="px-1 font-bold">Sign In.</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
