"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import useTranslation from "@hooks/useTranslation";
import ProfileLayout from "@components/layouts/ProfileLayout";

import { useTheme } from "next-themes";
import { ThemePreferences } from "@constants/StaticData";
import Line from "@components/ui/line";
import { Check } from "lucide-react";
import { Switch } from "@components/ui/switch";
import ThemeButton from "@components/ui/theme-button";
import { Button } from "@components/ui/button";

const page = () => {
  const { t } = useTranslation();
  const { setTheme } = useTheme();
  const themePreferences = ThemePreferences(t);

  const [path, setPath] = useState<string>("");
  const [toggleIndex, setToggleIndex] = useState<number>(0);

  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  return (
    <div className="w-full">
      <ProfileLayout path={path}>
        <div className="flex-col-5">
          <div className="flex-col-3">
            <h1 className="text-2xl font-bold">Settings</h1>
            <p className="max-w-[500px]">
              Welcome to your personalized settings page. You can change your
              username or customize the theme and the color to your own likings.
            </p>
          </div>

          {/* theme  */}
          <div className="flex-col-3">
            <Line />
            <div className="grid-3">
              <div className="flex-col-2">
                <h1>Theme Preference</h1>
                <p>Selec or customize your UI theme.</p>
              </div>
              <div className="flex lg:hidden mt-2">
                <ThemeButton/>
              </div>
              <div className="hidden lg:flex flex-col lg:flex-row items-center lg:col-span-2 gap-5">
                {themePreferences.map((theme, index) => (
                  <div className="flex-col-1">
                    <div
                      className="relative"
                      onClick={() => {
                        setTheme(theme.setter);
                        setToggleIndex(theme.index);
                      }}
                    >
                      <div
                        className={`border rounded-md p-1 ${
                          index === toggleIndex
                            ? "border-orange-600"
                            : "border-neutral-200 dark:border-neutral-800"
                        }`}
                      >
                        <img
                          src={theme.image}
                          className="h-full lg:h-[120px] w-full clear-start rounded-md"
                          alt="theme-image"
                        />
                      </div>
                      {index === toggleIndex ? (
                        <Check className="absolute text-black bg-orange-600 rounded-full p-1 bottom-2 left-2" />
                      ) : (
                        ""
                      )}
                    </div>
                    <p>{theme.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* theme  */}

          {/* transparent background */}
          <div className="flex-col-3">
            <Line />
            <div className="flex-between">
              <div className="flex-col-2">
                <h1>Transparent background</h1>
                <p>Make the account panel background transparent.</p>
              </div>
              <Switch/>
            </div>
          </div>
          {/* transparent background */}

          {/* account deletion*/}
          <div className="flex-col-3">
            <Line/>
            <div className="flex-col-2">
                <h1>Account management</h1>
                <p>You can either deactive or permanently delete your account.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <Button variant={'destructive'} className="opacity-50 w-full lg:w-max">Deactivate Account</Button>
              <Button variant={'destructive'} className="w-full lg:w-max">Delete Account</Button>
            </div>

          </div>
          {/* account deletion*/}


        </div>
      </ProfileLayout>
    </div>
  );
};

export default page;
