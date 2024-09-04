import NextAuth, { DefaultSession } from "next-auth";

import { Dispatch, SetStateAction } from "react";
import { Language } from "./translation";

export type TChildren = React.ReactNode;
export type TChildrens = {
  children: React.ReactNode;
};

export type TProfileLayout = {
  children: TChildren;
  path: string;
};

export type TNavbarDropdownLinks = {
  path: string;
  name: string;
  icon: TChildren;
};

export type TthemePreferences = {
  setter: string;
  image: string;
  name: string;
  index: number;
};

export type TProfileSidebarLinks = {
  name: string;
  path: string;
  icon: TChildren;
};

export type TProfileDataCard<T> = {
  heading: string;
  paragraph: T;
  icon: TChildren;
};

export type TLanguagesSwitch = {
  name: string;
  language: string;
};

export type TSignInButton = {
  className?: string;
};

export type TProfileDataCards<T> = TProfileDataCard<T>[];

export type TCreatePostResponse = {
  status: number;
  data: string;
}

export type TCreatePostError = {
  message: string;
}

export type TFeed = {
  expandAll ?: boolean;
  setExpandAll ?: Dispatch<SetStateAction<boolean>> | undefined;
}

//---------------------------------->Context types<---------------------------------------//
export type TSettingsContext = {
  setBackground: Dispatch<SetStateAction<string | boolean>>;
  background: boolean | string;
};

export type TLanguageContext = {
  language: Language | string;
  changeLanguage: (lang: string) => void;
};

export type TAccountContext = {
  user: any;
};

//--------------------------->next-auth<-------------------------------------------//
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
  }
}
