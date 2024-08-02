import { redirect } from "next/navigation";
import { supabaseServerClient } from "@/utility/supabase/supabaseServer";

export default async function userSessionVerification() {
  const supabase = await supabaseServerClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return data.user
}
