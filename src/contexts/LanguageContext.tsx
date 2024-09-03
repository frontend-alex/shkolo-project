"use client";

import { toast } from "react-toastify";
import { createContext, ReactNode, useEffect, useState, useCallback } from "react";
import { TChildren, TChildrens, TLanguageContext } from "@constants/Types";

export const LanguageContext = createContext<TLanguageContext | undefined>(undefined);

export const LanguageProvider: React.FC<TChildrens> = ({ children }) => {
  const [language, setLanguage] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const storedLanguage = localStorage.getItem("language");
      return storedLanguage || "sh";
    }
    return "sh";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language);
    }
  }, [language]);

  const changeLanguage = useCallback((lng: string) => {
    setLanguage(lng);
    toast.success("Language changed successfully!");
  }, []);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
