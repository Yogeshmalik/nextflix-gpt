"use client";
import { useRef, useState } from "react";
import { login, signup } from "./actions";
import { checkValidData } from "@/utils/validate";

const LoginPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [supabaseStatusMessage, setSupabaseStatusMessage] = useState("");
  const [validateEmailMessage, setValidateEmailMessage] = useState("");
  const [validatePasswordMessage, setValidatePasswordMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginLogoutToggle = () => {
    setIsSignIn(!isSignIn);
    setSupabaseStatusMessage("");
    setValidateEmailMessage("");
    setValidatePasswordMessage("");
  };

  const handleLogin = async (formData) => {
    setSupabaseStatusMessage("Signing in...");
    setIsLoading(true);
    try {
      const res = await login(formData);
      if (res?.error) {
        // console.error(res.error);
        setSupabaseStatusMessage(res.error);
      }
      if (res?.success) setSupabaseStatusMessage(res.success);
    } catch (error) {
      setSupabaseStatusMessage("An error occurred. Please try again.");
      // console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (formData) => {
    setSupabaseStatusMessage("Signing up...");
    setIsLoading(true);
    try {
      const res = await signup(formData);
      if (res?.error) {
        // console.error(res.error);
        setSupabaseStatusMessage(res.error);
      }
      if (res?.success) setSupabaseStatusMessage(res.success);
    } catch (error) {
      setSupabaseStatusMessage("An error occurred. Please try again.");
      // console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const emailInputValue = useRef(null);
  const passwordInputValue = useRef(null);

  const handleEmailChange = (e) => {
    const val = e.target.value;
    setEmail(val);

    // If there's an error and they fix it, remove the error immediately
    const { emailValidateError } = checkValidData(val, password);
    if (!emailValidateError) {
      setValidateEmailMessage("");
    } else if (validateEmailMessage) {
      setValidateEmailMessage(emailValidateError);
    }
  };

  const handleEmailBlur = () => {
    const { emailValidateError } = checkValidData(email, password);
    setValidateEmailMessage(emailValidateError);
  };

  const handlePasswordChange = (e) => {
    const val = e.target.value;
    setPassword(val);

    // If there's an error and they fix it, remove the error immediately
    const { passwordValidateError } = checkValidData(email, val);
    if (!passwordValidateError) {
      setValidatePasswordMessage("");
    } else if (validatePasswordMessage) {
      setValidatePasswordMessage(passwordValidateError);
    }
  };

  const handlePasswordBlur = () => {
    const { passwordValidateError } = checkValidData(email, password);
    setValidatePasswordMessage(passwordValidateError);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Call the function once and destructure the errors from the returned object
    const { emailValidateError, passwordValidateError } = checkValidData(
      email,
      password,
    );

    setValidateEmailMessage(emailValidateError);
    setValidatePasswordMessage(passwordValidateError);

    // Stop submission if form is invalid
    if (emailValidateError || passwordValidateError) return;

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

  // Evaluate the current state of email and password on every keystroke
  const { emailValidateError, passwordValidateError } = checkValidData(
    email,
    password,
  );

  // If either of these are NOT null, it means there is an error and the form is invalid
  const isFormInvalid =
    emailValidateError !== null || passwordValidateError !== null;

  return (
    <div className="space-y-4 sm:space-y-5 px-2 md:space-y-2 lg:space-y-6 w-full max-w-100 mx-auto h-full my-auto py-8">
      <div className="flex flex-col space-y-2 sm:space-y-1 lg:space-y-2.5">
        <h1 className="text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl flex tracking-tight">
          Enter your info to sign in
        </h1>
        <p className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl flex tracking-tight">
          Or get started with a new account.
        </p>
      </div>

      <form
        className="flex flex-col space-y-4 md:space-y-3 lg:space-y-5 items-center w-full"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        {!isSignIn && (
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex px-2.5 py-1.5 lg:px-3 lg:py-2 xl:px-4 xl:py-3 bg-gray-950 font-semibold text-gray-100 border border-gray-700 rounded-md w-full focus:outline-none focus:border-red-600 transition"
            placeholder="Enter Name"
            autoComplete="name"
            required
          />
        )}

        <input
          type="email"
          ref={emailInputValue}
          name="email"
          value={email}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          className={`flex px-2.5 py-1.5 sm:px-2 sm:py-1 lg:px-3 lg:py-2 xl:px-4 xl:py-3 bg-gray-950 font-semibold text-gray-100 border border-gray-700 rounded-md w-full focus:outline-none transition 
            ${supabaseStatusMessage ? "border-red-600" : "focus:border-white"}`}
          placeholder="Enter Email"
          autoComplete="off"
          required
        />
        <span className="flex -mt-4 text-red-600 font-semibold text-left w-full px-1">
          {validateEmailMessage}
        </span>

        <input
          type="password"
          ref={passwordInputValue}
          name="password"
          value={password}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          className={`flex px-2.5 py-1.5 sm:px-2 sm:py-1 lg:px-3 lg:py-2 xl:px-4 xl:py-3 bg-gray-950 font-semibold text-gray-100 border border-gray-700 rounded-md w-full focus:outline-none focus:border-red-600 transition 
            ${supabaseStatusMessage ? "border-red-600" : "focus:border-white"}`}
          placeholder="Enter Password (At least 8 characters)"
          autoComplete="new-password"
          required
        />
        <span className="flex -mt-4 text-red-600 font-semibold text-left w-full px-1">
          {validatePasswordMessage}
        </span>

        <div className="flex flex-col space-y-2 py-2 md:space-y-4 items-center w-full text-sm sm:text-base md:text-lg lg:text-xl">
          <button
            type="submit"
            // disabled={isLoading || isFormInvalid}
            disabled={isLoading}
            className="flex justify-center cursor-pointer bg-red-600 hover:bg-red-700 disabled:bg-red-700 disabled:opacity-50 text-white font-bold rounded-md w-full px-2.5 py-1.5 sm:px-2 sm:py-1 lg:px-3 lg:py-2 xl:px-4 xl:py-3 transition-all ease-in-out duration-200"
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

          {supabaseStatusMessage && (
            <p
              className={` text-lg font-semibold text-left w-full ${
                supabaseStatusMessage.includes("Check") ||
                supabaseStatusMessage.includes("success")
                  ? "text-green-500"
                  : "text-red-600"
              }`}
              role="supabaseStatusMessage"
              aria-live="polite"
            >
              {supabaseStatusMessage}
            </p>
          )}
        </div>
      </form>

      <div className="flex flex-col -mt-2 space-y-2 md:space-y-3 w-fit">
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
