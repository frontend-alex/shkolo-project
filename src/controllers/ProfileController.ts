import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import useTranslation from "@hooks/useTranslation";
import { ProfileDataCards } from "@constants/StaticData";

const ProfileController = () => {
  const { t } = useTranslation();
  const { data: session, status } = useSession();

  const profileDataCards = ProfileDataCards(t, {
    user: {
      email: session?.user?.email ?? "No email provided",
      name: session?.user?.name ?? "No name provided",
    },
  });

  const [path, setPath] = useState<string>("");

  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  return { profileDataCards, t, path , session, status};
};

export default ProfileController;
