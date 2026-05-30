"use client";

import { useState } from "react";
import Browse from "../app/browse/page";
import Login from "./LoginPage";

const Body = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return <div className="">{!isAuthenticated ? <Login /> : <Browse />}</div>;
};

export default Body;
