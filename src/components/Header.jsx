"use client";

import { signout } from "@/app/auth/login/actions";
import { MAIN_LOGO_URL } from "@/utils/constants";
import { useAuth } from "@/utils/providers/AuthProvider";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "./Button";

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
      className={`fixed top-0 left-0 z-50 flex w-full items-center h-auto
        px-2 pt-[calc(env(safe-area-inset-top,0.75rem))] pb-3
        md:px-12 md:pt-[calc(env(safe-area-inset-top,0.5rem))] md:pb-2 transition-all duration-200 ease-in-out
        ${isScrolled ? "bg-black/70 backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="flex md:max-w-7x w-full mx-auto items-center justify-between">
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
              <Button
                label="Sign Out"
                color="red"
                size={isScrolled ? "regular" : "large"}
                className="w-full rounded-md"
              />
            </form>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
