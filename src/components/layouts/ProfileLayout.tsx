'use client'

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { useSession } from "next-auth/react";
import { TProfileSidebarLinks } from "@constants/Types";
import { ProfileSideLinks } from "@constants/StaticData";
import useTranslation from "@hooks/useTranslation";


const ProfileLayout = ({ children, path }: { children: React.ReactNode, path: string}) => {
  const { t } = useTranslation();
  const { data: session } = useSession();

  const profileLinks = ProfileSideLinks(t);

  return (
    <div className="grid-4 gap-5 mb-5 lg:mb-0">
      <div className="hidden lg:flex flex-col gap-10">
        <div className="flex-col-3">
          <Image
            src={session?.user?.image as string}
            className="rounded-full"
            height={70}
            width={70}
            alt="pfp"
          />
          <h1 className="font-bold text-xl">{session?.user?.name?.split(' ')[0]}</h1>
        </div>
        <div className="flex-col-3">
          {profileLinks.map((link: TProfileSidebarLinks, id: number) => {
            const { path: p, name, icon } = link;
            return (
              <Link href={p} key={id} className="flex-3 group">
                <i className={path === p ? "text-orange-600" : "text-stone-400"}>{icon}</i>
                <h1 className="text-xl group-hover:text-stone-400 transition-all">{name}</h1>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="col-span-3">
        {children}
      </div>
    </div>
  );
};

export default ProfileLayout;
