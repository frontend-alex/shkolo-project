"use client";
import Image from "next/image";

import Line from "@components/ui/line";
import React from "react";
import ProfileLayout from "@components/layouts/ProfileLayout";
import ProfileController from "@controllers/ProfileController";

import { Button } from "@components/ui/button";
import { Skeleton } from "@components/ui/skeleton";
import { EllipsisVertical, Link, Mail, User } from "lucide-react";
import { Email, ProfileImage, Username } from "@components/ui/loading-items";
import { Dialog, DialogTrigger, DialogContent } from "@components/ui/dialog";

const Profile = () => {
 
  const { profileDataCards, t, path, session, status } = ProfileController();

  return (
    <div className="w-full">
      <ProfileLayout path={path}>
        <div className="flex-col-3">
          <div className="flex-between">
            <div className="flex-col-3">
              <h1 className="text-2xl font-bold">Profile Information</h1>
              <p className="max-w-[500px]">
                Welcome to your personalized profile page. Share your
                exceptional prompts and inspire others with the power of your
                imagination
              </p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <EllipsisVertical className="cursor-pointer" />
              </DialogTrigger>
              <DialogContent className="sm:max-w-xl p-5 rounded-lg h-[540px] overflow-y-scroll">
                <div className="bg-neutral-300 dark:bg-neutral-900 top-0 w-full h-[55px] rounded-t-lg absolute z-[-1]" />
                <form className="flex-col-3">
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex-col-3">
                      <ProfileImage status={status} data={session?.user}/>
                      <div>
                        <Username status={status} data={session?.user}/>
                        <Email status={status} data={session?.user}/>
                      </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-3 items-center">
                      <Button className="flex items-center gap-3" variant={'outline'}><Link size={15}/>Copy Link</Button>
                    </div>  
                  </div>
                  <div className="flex-col-3"> 
                      <Line/>
                      <div className="grid-3 items-center">
                          <p className="text-black dark:text-white">Name</p>
                          <div className="flex flex-col lg:flex-row gap-3 col-span-2">
                            <input placeholder="First Name" className="input w-full"/>
                            <input placeholder="Last Name" className="input w-full"/>
                          </div>    
                      </div>
                      <Line/>
                      <div className="grid-3 items-center">
                          <p className="text-black dark:text-white">Email Address</p>
                          <div className="relative flex flex-col lg:flex-row gap-3 col-span-2">
                            <Mail className="absolute left-3 text-neutral-500 dark:text-neutral-700 top-[33%]" size={15}/>
                            <input placeholder="example@gmail.com" className="input w-full px-10"/>
                          </div>    
                      </div>
                      <Line/>
                      <div className="grid-3 items-center">
                          <p className="text-black dark:text-white">Username</p>
                          <div className="relative flex flex-col lg:flex-row gap-3 col-span-2">
                            <User className="absolute left-3 text-neutral-500 dark:text-neutral-700 top-[33%]" size={15}/>
                            <input placeholder="Username" className="input w-full px-10"/>
                          </div>    
                      </div>
                      <Line/>
                      <div className="grid-3 items-center">
                          <p className="text-black dark:text-white">Profile Image</p>
                          <div className="relative flex items-center flex-row gap-3 col-span-2">
                            <ProfileImage status={status} data={session?.user}/>
                            <Button variant={'outline'}>Change Picture</Button>
                          </div>    
                      </div>
                      <Line/>
                    <div className="flex flex-row gap-3 items-center justify-end">
                      <Button variant={'outline'}>Cancel</Button>
                      <Button variant={'default'}>Save Changes</Button>
                    </div>
                  </div>  
                </form>
              </DialogContent>
            </Dialog>
          </div>
          <div className="grid-2 gap-5">
            {profileDataCards.map((item, index) => (
              <div
                key={index}
                className=" transition-all group border hover:border-orange-600 shadow-md  dark:hover:border-orange-600 flex-between border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 rounded-md p-5"
              >
                <div className="flex-col-1 lg:w-1/2">
                  <h1>{item.heading}</h1>
                  {status === "loading" ? (
                    <Skeleton className="skeleton h-[10px] w-full bg-neutral-200" />
                  ) : (
                    <p>{item.paragraph as string}</p>
                  )}
                </div>
                <i>{item.icon}</i>
              </div>
            ))}
          </div>
        </div>
      </ProfileLayout>
    </div>
  );
};

export default Profile;
