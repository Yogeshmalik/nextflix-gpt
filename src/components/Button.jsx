import React from "react";

const Button = ({ label, onClick, src, className }) => {
  return (
    <button
      onClick={onClick}
      className={`flex focus:scale-95 transition-all ease-in-out duration-200 font-semibold rounded-md md:px-4 md:py-2 px-3 py-1.5 md:min-h-12 md:min-w-20 text-base md:text-xl items-center space-x-2 cursor-pointer ${className}`}
    >
      <img src={src} alt="Button Icon" className="flex h-5 w-5" />
      <span>{label}</span>
    </button>
  );
};

export default Button;
