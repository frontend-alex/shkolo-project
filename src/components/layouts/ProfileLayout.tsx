"use client";

import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import useTranslation from "@hooks/useTranslation";

import { useSession } from "next-auth/react";
import { NavbarDropdownLinks } from "@constants/StaticData";
import SettingsProvider, { SettingsContext } from "@contexts/SettingsContext";
import { TProfileLayout, TProfileSidebarLinks, TSettingsContext } from "@constants/Types";

const ProfileLayout = ({ children, path }: TProfileLayout) => {
  const { t } = useTranslation();
  const { data: session } = useSession();

  const { background } = useContext(SettingsContext) as TSettingsContext

  const profileLinks = NavbarDropdownLinks(t, 25);


  return (
      <div className={`${background ?" bg-b-c" : ""} p-8 grid-4 gap-5 mb-5 lg:mb-0 rounded-md`}>
        <div className="hidden lg:flex flex-col gap-10">
          <div className="flex-col-3">
            <Image
              src={session?.user?.image as string}
              className="rounded-full"
              height={70}
              width={70}
              alt="pfp"
            />
            <h1 className="font-bold text-xl">
              {session?.user?.name?.split(" ")[0]}
            </h1>
          </div>
          <div className="flex-col-3">
            {profileLinks.map((link: TProfileSidebarLinks, id: number) => {
              const { path: p, name, icon } = link;
              return (
                <Link href={p} key={id} className="flex-3 group">
                  <i
                    className={
                      path === p ? "text-orange-600" : "text-stone-400"
                    }
                  >
                    {icon}
                  </i>
                  <h1 className="text-xl group-hover:text-stone-400 transition-all">
                    {name}
                  </h1>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="col-span-3">{children}</div>
      </div>
  );
};

export default ProfileLayout;
