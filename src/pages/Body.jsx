"use client";

import { useState } from "react";
import Browse from "../app/browse/page";
import Login from "../app/login/LoginPage";

const Body = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div className="w-full px-2 md:px-10">
      {!isAuthenticated ? <Login /> : <Browse />}
    </div>
  );
};

export default Body;
