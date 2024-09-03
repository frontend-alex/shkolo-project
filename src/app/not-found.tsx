import React from "react";
import Link from "next/link";
import { Button } from "@components/ui/button";

const Unauthorize = () => {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden -mt-10">
      <img src="/assets/icons/404.png" />

      <div className="flex-col-3 text-center max-w-[500px] mx-auto">
        <h1 className="text-2xl font-bold lg:text-4xl">Page Not Found</h1>
        <p>
          Sorry, the page you're looking for doesn't exist. It might have been
          moved, renamed, or deleted. Please check the URL for any errors or
          return to the homepage to conti
        </p>
        <div className="flex flex-col lg:flex-row gap-4">
          <Link className="w-full" href="/profile">
            <Button variant={"outline"} className="w-full">
              Go Back
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Unauthorize;
