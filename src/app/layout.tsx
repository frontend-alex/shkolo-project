import "@styles/globals.css";

import Navbar from "@components/Navbar";
import NextAuthProvider from "@contexts/NextAuthContext";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@contexts/ThemeContext";
import { LanguageProvider } from "@contexts/LanguageContext";
import SettingsProvider from "@contexts/SettingsContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <LanguageProvider>
        <SettingsProvider>
          <body className={inter.className}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <NextAuthProvider>
                <div className="main">
                  <div className="custom-gradient-light dark:custom-gradient-dark" />
                </div>

                <main className="app">
                  <Navbar />
                  {children}
                </main>
              </NextAuthProvider>
            </ThemeProvider>
          </body>
        </SettingsProvider>
      </LanguageProvider>
    </html>
  );
}
