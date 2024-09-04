import React from "react";
import Link from "next/link";
import SignInButton from "./ui/sign-in-button";

import { Button } from "./ui/button";

const Unauthorize = () => {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden -mt-10">
      <img src="/assets/icons/unauthorized.png" />

      <div className="flex-col-3 text-center max-w-[500px] mx-auto">
        <h1 className="text-2xl font-bold lg:text-4xl">Unauthorized Access</h1>
        <p>
          You do not have permission to view this page. It seems that you have
          tried to access a restricted area that requires specific
          authorization. If you believe this is an error or if you need access
          to this content, please contact your administrator or support team for
          assistance. We apologize for any inconvenience and appreciate your
          understanding.
        </p>
        <div className="flex flex-col lg:flex-row gap-4">
          <Link href="/" className="w-full">
            <Button variant={"outline"} className="w-full">
              Go Back
            </Button>
          </Link>
          <SignInButton className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Unauthorize;
