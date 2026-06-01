"use client";
import { useState } from "react";
import { login, signup } from "./actions";

const LoginPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading]= useState(false)

  const handleLoginLogoutToggle = () => {
    setIsSignIn(!isSignIn);
    setStatus("");
  };

  const handleLogin = async (formData) => {
    setStatus("Signing in...");
    setIsLoading(true);
    try {
      const res = await login(formData);
      if (res?.error) {
        console.error(res.error);
        setStatus(res.error);
      }
      if (res?.success) setStatus(res.success);
    } catch (error) {
      setStatus("An error occurred. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleSignup = async (formData) => {
    setStatus("Signing up...");
    setIsLoading(true);
    try {
      const res = await signup(formData);
      if (res?.error) {
        console.error(res.error);
        setStatus(res.error);
      }
      if (res?.success) setStatus(res.success);
    } catch (error) {
      setStatus("An error occurred. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    if (!isSignIn) {
      formData.append("name", name);
    }

    if (isSignIn) {
      handleLogin(formData);
    } else {
      handleSignup(formData);
    }
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
        className="flex flex-col space-y-2 md:space-y-4 items-center w-full"
        onSubmit={handleSubmit}
      >
        {!isSignIn && (
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex px-4 py-3 bg-gray-950 font-semibold text-gray-100 border border-gray-700 rounded-md w-full focus:outline-none focus:border-red-600 transition"
            placeholder="Enter Name"
            autoComplete="name"
            required
          />
        )}

        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex px-4 py-3 bg-gray-950 font-semibold text-gray-100 border border-gray-700 rounded-md w-full focus:outline-none focus:border-red-600 transition"
          placeholder="Enter Email"
          autoComplete="email"
          required
        />

        <input
          type="password"
          name="password"
          minLength={6}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="flex px-4 py-3 bg-gray-950 font-semibold text-gray-100 border border-gray-700 rounded-md w-full focus:outline-none focus:border-red-600 transition"
          placeholder="Enter Password (At least 6 characters)"
          autoComplete={isSignIn ? "current-password" : "new-password"}
          required
        />

        <div className="flex flex-col space-y-2 md:space-y-4 items-center w-full">
          <button
            type="submit"
            disabled={isLoading}
            className="flex justify-center text-lg md:text-xl cursor-pointer bg-red-600 hover:bg-red-700 disabled:bg-red-700 disabled:opacity-50 text-white font-bold rounded-md w-full px-4 py-3 transition-all ease-in-out duration-200"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                {isSignIn ? "Signing in..." : "Signing up..."}
              </span>
            ) : isSignIn ? (
              "Sign In"
            ) : (
              "Sign Up"
            )}
          </button>

          {status && (
            <p
              className={`mt-2 text-lg font-semibold text-center ${
                status.includes("Check") || status.includes("success")
                  ? "text-green-500"
                  : "text-red-600"
              }`}
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
          className="flex cursor-pointer text-white font-semibold text-left hover:opacity-80 transition"
          onClick={handleLoginLogoutToggle}
          role="button"
          tabIndex={0}
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
