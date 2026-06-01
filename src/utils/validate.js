export const checkValidData = (emailInputValue, passwordInputValue) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    emailInputValue,
  );
  const isPasswordValid = /^.{8,}$/.test(passwordInputValue);

  return {
    emailValidateError: isEmailValid ? null : "Please enter correct email",
    passwordValidateError: isPasswordValid
      ? null
      : "Please enter correct Password",
  };
};
