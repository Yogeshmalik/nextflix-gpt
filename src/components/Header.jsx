"use client";

import { signout } from "@/app/auth/login/actions";
import { MAIN_LOGO_URL } from "@/utils/constants";
import { useAuth } from "@/utils/providers/AuthProvider";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const { user } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 flex w-full items-center border-bb
        h-auto px-2 py-3 md:px-10 md:py-2 transition-all duration-200 ease-in-out
        ${isScrolled ? "bg-black/70 backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="flex md:max-w-7xl w-full mx-auto items-center justify-between">
        <Link href="/browse">
          <Image
            src={MAIN_LOGO_URL}
            alt="nextflix-logo"
            width={112}
            height={40}
            priority
            className={` transition-all duration-200 ease-in-out
              
              ${isScrolled ? "w-20 md:w-28" : "w-24 md:w-44 h-auto"}`}
          />
        </Link>
        {user && (
          <div className="flex items-center gap-4">
            <span className="text-white text-sm md:text-base">
              {user?.user_metadata?.full_name}
            </span>
            <form action={signout}>
              <button
                className={`bg-red-600 cursor-pointer rounded py-1 text-white transition-all duration-200 hover:bg-red-700 w-full
                 ${isScrolled ? "md:px-3 md:py-1 px-2 font-semibold text-sm" : "md:px-4 md:py-2 px-3 font-bold"}
                `}
              >
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
