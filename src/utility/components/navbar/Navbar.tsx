import { signout } from "@/app/login/actions";
import { supabaseServerClient } from "@/utility/supabase/supabaseServer";
import Link from "next/link";
import Button from "@/utility/components/buttons/button";
import NavLink from "@/utility/components/navbar/navbar-menu/navLink";

export default async function Navbar() {
  const supabase = await supabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <nav className="bg-slate-500 w-full h-[50px] inline-flex text-left pl-10 gap-10 ">
      {user !== null ? (
        <div className="w-full inline-flex text-left pl-10 gap-10">
          <NavLink href="/">
            Home
          </NavLink>
          <div className="w-full content-center text-right pr-10">
            <form action={signout}>
              <Button>Sign Out</Button>
            </form>
          </div>
        </div>
      ) : (
        <div className="w-full content-center text-right pr-10">
          <Link href="/login">
            <Button>Log In</Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
