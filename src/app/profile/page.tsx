"use client";

import React, { useEffect, useState } from "react";
import useTranslation from "@hooks/useTranslation";
import ProfileLayout from "@components/layouts/ProfileLayout";

import { useSession } from "next-auth/react";
import { ProfileDataCards } from "@constants/StaticData";

const Profile = () => {
  const { t } = useTranslation();
  const { data: session } = useSession();
  const profileDataCards = ProfileDataCards(t, {
    user: {
      email: session?.user?.email ?? "No email provided",
      name: session?.user?.name ?? "No name provided",
    },
  });

  const [ path, setPath ] = useState<string>('')

  useEffect(() => {
      setPath(window.location.pathname)
  }, [])


  return (
    <div className="w-full">
      <ProfileLayout path={path}>
        <div className="flex-col-3">
          <h1 className="text-2xl font-bold">Profile Information</h1>
          <p className="max-w-[500px]">
            Welcome to your personalized profile page. Share your exceptional
            prompts and inspire others with the power of your imagination
          </p>
          <div className="grid-2 gap-5 mb-5 lg:mb-0">
            {profileDataCards.map((item, index) => (
              <div
                key={index}
                className=" transition-all group border hover:border-orange-600 shadow-md  dark:hover:border-orange-600 flex-between border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 rounded-md p-5"
              >
                <div className="flex-col-1">
                  <h1>{item.heading}</h1>
                  <p>{item.paragraph as string}</p>
                </div>
                <i>{item.icon}</i>
              </div>
            ))}
          </div>
        </div>
      </ProfileLayout>
    </div>
  );
};

export default Profile;
