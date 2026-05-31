"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function login(formData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.error("signIn: ", error);
    return { error: error.message };
  }

  revalidatePath("/", "layout");
  redirect("/browse");
}

export async function signup(formData) {
  const supabase = await createClient();

  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
    options: {
      data: {
        full_name: formData.get("name"),
      },
    },
  };

  const { error, data: authData } = await supabase.auth.signUp(data);

  if (error) {
    console.error("signUp: ", error);
    return { error: error.message };
  }

  if (authData?.user && !authData?.session) {
    return { success: "Check your inbox to confirm the new account." };
  }

  revalidatePath("/", "layout");
  redirect("/browse");
}

export async function signout() {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();

  await supabase.auth.signOut();

  if (error) {
    console.error("signOut: ", error);
    return { error: error.message };
  }

  revalidatePath("/", "layout");
  redirect("/login");
}
