import React from "react";
import { createClient } from "@/utils/supabase/server";
import { signout } from "@/app/login/actions";

const BrowsePage = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold">Browse Page</h1>
      {user ? (
        <div className="mt-4 space-y-4">
          <p>Welcome, {user.user_metadata?.full_name || user.email}!</p>
          <form action={signout}>
            <button className="bg-red-600 px-4 py-2 rounded text-white font-bold transition hover:bg-red-700">
              Sign Out
            </button>
          </form>
        </div>
      ) : (
        <p>Please log in to view this page.</p>
      )}
    </div>
  );
};

export default BrowsePage;
