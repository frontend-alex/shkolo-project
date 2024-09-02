"use client";

import Link from "next/link";
import Image from "next/image";
import NavbarController from "@controllers/NavbarController";

import { signIn, signOut } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import { LogOut } from "lucide-react";

const Navbar = () => {
  const {
    session,
    providers,
    toggleDropdown,
    setToggleDropdown,
    navbarDropdownLinks,
  } = NavbarController();

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <h1 className="font-bold">GradeEcho</h1>

      {/* Desktop Navigation */}
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Image
                  src={session.user.image as string}
                  width={37}
                  height={37}
                  className="rounded-full"
                  alt="profile"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 mt-2" align="end">
                {navbarDropdownLinks.map((link, index) => (
                  <Link href={link.path} key={index} className="cursor-pointer">
                    <DropdownMenuItem className="text-end px-5 py-2">
                      <div className="flex items-center gap-3 justify-between w-full">
                        {link.name}
                        <i>{link.icon}</i>
                      </div>
                    </DropdownMenuItem>
                  </Link>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem className="px-5 py-2 text-left">
                  <button
                    type="button"
                    className="flex-between w-full"
                    onClick={signOut as any}
                  >
                    Sign Out
                    <LogOut size={15} />
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider: any) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="fill-button"
                >
                  Sign in
                </button>
              ))}
          </>
        )}
    </nav>
  );
};

export default Navbar;
