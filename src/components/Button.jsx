import React from "react";

const Button = ({ label, onClick, type, src, color, className, size }) => {
  const colorMap = {
    red: "bg-red-600 hover:bg-red-700 text-white",
    zinc: "bg-zinc-600 text-white",
    blue: "text-blue-400 hover:bg-blue-400 border-blue-400 hover:text-white",
    black: "text-white bg-black hover:bg-white border-black hover:text-black",
    white: "text-black bg-white",
    noColor: "",
  };
  const selectedColor = colorMap[color] || colorMap.orange;

  const sizeMap = {
    small: "md:min-w-none w-fit h-auto p-1 font-medium text-sm",
    regular: "md:min-w- w-fit h-auto p-0.5 md:p-1.5 font-semibold text-base",
    large: "md:min-w-20 w-fit h-auto py-0.5 px-2 md:py-2 md:px-5 font-semibold md:text-lg",
  };
  const selectedSize = sizeMap[size] || sizeMap.regular;

  return (
    <button
      onClick={onClick}
      type={type}
      className={`flex active:scale-95 transition-all ease-in-out duration-200 items-center space-x-2 cursor-pointer justify-center rounded-md
        ${className}
        ${selectedColor}
        ${selectedSize}
        ${className}
      `}
    >
      {src && <img src={src} alt="Button Icon" className="flex h-5 w-5" />}
      <span>{label && label}</span>
    </button>
  );
};

export default Button;
