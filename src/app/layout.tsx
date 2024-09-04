'use client'

import "@styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "@components/Navbar";
import NextAuthProvider from "@contexts/NextAuthContext";

import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import AccountProvider from "@contexts/AccountContext";
import { ThemeProvider } from "@contexts/ThemeContext";
import SettingsProvider from "@contexts/SettingsContext";
import { LanguageProvider } from "@contexts/LanguageContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <NextAuthProvider>
        <QueryClientProvider client={queryClient}>
          <AccountProvider>
            <LanguageProvider>
              <SettingsProvider>
                <body className={inter.className}>
                  <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                  >
                    <ToastContainer
                      position="top-right"
                      autoClose={1000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      theme="light"
                    />
                    <div className="main">
                      <div className="custom-gradient-light dark:custom-gradient-dark" />
                    </div>

                    <main className="app">
                      <Navbar />
                      {children}
                    </main>
                  </ThemeProvider>
                </body>
              </SettingsProvider>
            </LanguageProvider>
          </AccountProvider>
        </QueryClientProvider>
      </NextAuthProvider>
    </html>
  );
}
