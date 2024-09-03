import React from "react";
import NavbarController from "@controllers/NavbarController";

import { signIn } from "next-auth/react";
import { TSignInButton } from "@constants/Types";
import { cn } from "@lib/utils";

const SignInButton = ({ className }: TSignInButton) => {
  const { providers } = NavbarController();

  return (
    <>
      {providers &&
        Object.values(providers).map((provider: any) => (
          <button
            type="button"
            key={provider.name}
            onClick={() => {
              signIn(provider.id);
            }}
            className={cn("fill-button", className)}
          >
            Sign in
          </button>
        ))}
    </>
  );
};

export default SignInButton;
