"use client";

import { signout } from "@/app/auth/login/actions";
import { useAuth } from "@/utils/providers/AuthProvider";
// import { useAppSelector } from "@/utils/store/hooks";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { user } = useAuth();
  // const loggedInUser = useAppSelector((store) => store?.user);
  // console.log("loggedUser", loggedInUser);
  return (
    <header className="flex border-b w-full items-center border-b-mauve-700 h-auto px-2 py-3 md:px-10 md:py-2 overflow-hidden">
      <div className="flex md:max-w-7xl w-full mx-auto items-center justify-between">
        <Link href="/browse">
          <Image
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-05-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="nextflix-logo"
            width={112}
            height={40}
            priority
            className="w-28 md:w-48 h-auto"
          />
        </Link>
        {/* {loggedInUser && ( */}
        {user && (
          <div className="flex items-center gap-4">
            <span className="text-white text-sm md:text-base">
              {/* {loggedInUser?.name} */}
              {user?.user_metadata?.full_name}
            </span>
            <form action={signout}>
              <button className="bg-red-600 cursor-pointer px-4 py-2 rounded text-white font-bold transition-all duration-200 hover:bg-red-700 w-full">
                Sign Out
              </button>
            </form>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
