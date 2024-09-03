import Image from "next/image";
import { Skeleton } from "./skeleton";

export type TStatus = {
  status?: string;
  session?: any;
};

export const ProfileImage = ({ status, session }: TStatus) => {
  return (
    <>
      {status === "loading" ? (
        <Skeleton className="skeleton rounded-full h-[70px] w-[70px]" />
      ) : (
        <Image
          src={session?.user?.image as string}
          className="rounded-full border-2 border-white dark:border-neutral-800"
          height={70}
          width={70}
          alt="pfp"
        />
      )}
    </>
  );
};
export const SmallProfileImage = ({ status, session }: TStatus) => {
  return (
    <>
      {status === "loading" ? (
        <Skeleton className="skeleton rounded-full h-[70px] w-[70px]" />
      ) : (
        <Image
          src={session?.user?.image as string}
          className="rounded-full"
          height={37}
          width={37}
          alt="pfp"
        />
      )}
    </>
  );
};
export const Username = ({ status, session }: TStatus) => {
  return (
    <>
      {status === "loading" ? (
        <Skeleton className="h-[20px] skeleton w-1/2" />
      ) : (
        <h1 className="font-bold text-xl">
          {session?.user?.name?.split(" ")[0]}
        </h1>
      )}
    </>
  );
};

export const Email = ({ status , session}: TStatus) => {
  return (
    <>
      {status === "loading" ? (
        <Skeleton className="h-[20px] skeleton w-1/2" />
      ) : (
        <p>{session?.user?.email}</p>
      )}
    </>
  );
};
