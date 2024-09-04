"use client";

import Link from "next/link";
import React, { useContext } from "react";
import Unauthorize from "@components/Unauthorize";
import useTranslation from "@hooks/useTranslation";

import { useSession } from "next-auth/react";
import { NavbarDropdownLinks } from "@constants/StaticData";
import { SettingsContext } from "@contexts/SettingsContext";
import {
  TProfileLayout,
  TProfileSidebarLinks,
  TSettingsContext,
} from "@constants/Types";
import { ProfileImage, Username, Email } from "@components/ui/loading-items";

const ProfileLayout = ({ children, path }: TProfileLayout) => {
  const { t } = useTranslation();
  const { data: session, status } = useSession();

  const { background } = useContext(SettingsContext) as TSettingsContext;

  const profileLinks = NavbarDropdownLinks(t, 25);

  if (status === "unauthenticated") return <Unauthorize />;

  return (
    <div
      className={`${
        background ? " bg-b-c" : ""
      } grid-4 gap-5 mb-5 lg:mb-0 rounded-md p-5`}
    >
      <div className="hidden lg:flex flex-col gap-10">
        <div className="flex-col-3">
          <ProfileImage status={status} session={session} />
          <div className="flex-col-1">
            <Username status={status} session={session} />
            <Email status={status} session={session} />
          </div>
        </div>
        <div className="flex-col-3">
          {profileLinks.map((link: TProfileSidebarLinks, id: number) => {
            const { path: p, name, icon } = link;
            return (
              <Link href={p} key={id} className="flex-3 group">
                <i
                  className={path === p ? "text-orange-600" : "text-stone-400"}
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
