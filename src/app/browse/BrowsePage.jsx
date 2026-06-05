"use client";

import React from "react";
import { signout } from "@/app/auth/login/actions";
import { useAuth } from "@/utils/providers/AuthProvider";
import OriginalsHeader from "@/components/OriginalsHeader";

const BrowsePage = () => {
  const { user } = useAuth();

  return (
    <div className="p-10 text-white h-full">
      <OriginalsHeader />
      <h1 className="text-3xl font-bold text-center">Browse Page</h1>
      {user ? (
        <div className="mt-6 space-y-4 max-w-md mx-auto">
          <p className="text-lg">
            Welcome, {user.user_metadata?.full_name || user.email}!
          </p>
          <form action={signout}>
            <button className="bg-red-600 cursor-pointer px-4 py-2 rounded text-white font-bold transition-all duration-200 hover:bg-red-700 w-full">
              Sign Out
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default BrowsePage;
