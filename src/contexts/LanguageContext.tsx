"use client";

import { toast } from "react-toastify";
import { createContext, ReactNode, useEffect, useState } from "react";

export interface LanguageContextInterface {
  language: string;
  changeLanguage: (lang: string) => void;
}

interface LanguageProviderProps {
  children: ReactNode;
}
export const LanguageContext = createContext<
  LanguageContextInterface | undefined
>(undefined);

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<string>(() => {
    const storedLanguage = localStorage.getItem("language");
    return storedLanguage ? storedLanguage : "sh";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const changeLanguage = (lng: string) => {
    setLanguage(lng);
    toast.success("Language changed successfully!");
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
