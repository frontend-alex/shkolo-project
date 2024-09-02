'use client'

import ProfileLayout from "@components/layouts/ProfileLayout";
import React, { useEffect, useState } from "react";

const Posts = () => {
  const [ path, setPath ] = useState<string>('')

  useEffect(() => {
      setPath(window.location.pathname)
  }, [])

  return (
    <div className="w-full">
      <ProfileLayout path={path}>
        <div className="flex-col-3">
          <h1 className="text-2xl font-bold">Your Posts</h1>
          <p className="max-w-[500px]">
            Welcome to your personalized profile page. Share your exceptional
            prompts and inspire others with the power of your imagination
          </p>
        </div>
      </ProfileLayout>
    </div>
  );
};

export default Posts;
