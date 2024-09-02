import useTranslation from "@hooks/useTranslation";

import { useState, useEffect } from "react";
import { getProviders, useSession } from "next-auth/react";
import { NavbarDropdownLinks } from "@constants/StaticData";

const NavbarController = () => {
  const { t } = useTranslation();
  const { data: session } = useSession();

  const [providers, setProviders] = useState<any>(null);
  const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);

  const navbarDropdownLinks = NavbarDropdownLinks(t)

  useEffect(() => {
    const getProvidersFunc = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    getProvidersFunc();
  }, []);

  return {session, providers, toggleDropdown, setToggleDropdown, t, navbarDropdownLinks };
};

export default NavbarController;
