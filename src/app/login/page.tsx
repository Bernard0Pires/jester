import { login, signup } from "../api/auth/auth";
import { redirect } from "next/navigation";
import { supabaseServerClient } from "@/utility/supabase/supabaseServer";

export default async function LoginPage() {
  const supabase = await supabaseServerClient();

  const { data, error } = await supabase.auth.getUser();
  if (data?.user) {
    redirect("/");
  }

  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button formAction={login}>Log in</button>
      <button formAction={signup}>Sign up</button>
    </form>
  );
}
