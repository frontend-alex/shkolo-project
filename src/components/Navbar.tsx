"use client";

import Link from "next/link";
import Image from "next/image";
import SignInButton from "./ui/sign-in-button";
import NavbarController from "@controllers/NavbarController";

import { signOut } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import { Skeleton } from "./ui/skeleton";
import { SmallProfileImage } from "./ui/loading-items";

const Navbar = () => {
  const {
    status,
    session,
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
              <SmallProfileImage status={status} data={session.user}/>
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
         <SignInButton/>
        )}
    </nav>
  );
};

export default Navbar;
