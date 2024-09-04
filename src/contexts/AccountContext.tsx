"use client";

import { TAccountContext, TChildrens } from "@constants/Types";
import { getSession, useSession } from "next-auth/react";
import React, { createContext, useEffect, useState } from "react";

export const AccountContext = createContext<TAccountContext | undefined>(
  undefined
);

const AccountProvider = ({ children }: TChildrens) => {

  const [user, setUser] = useState(() => {
    if (typeof window != "undefined") {
      const userIdLocalStorage = localStorage.getItem("userId");
      return userIdLocalStorage || '';
    }

    return '';
  });

  return (
    <AccountContext.Provider value={{ user }}>
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
