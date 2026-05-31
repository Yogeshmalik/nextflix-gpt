import LoginPage from "./LoginPage";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

const Login = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/browse");
  }

  return (
    <>
      <LoginPage />
    </>
  );
};

export default Login;
