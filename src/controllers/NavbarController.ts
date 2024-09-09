import useTranslation from "@hooks/useTranslation";

import { useState, useEffect } from "react";
import { getProviders, useSession } from "next-auth/react";
import { NavbarDropdownLinks } from "@constants/StaticData";

const NavbarController = () => {
  const { t } = useTranslation();
  const { data: session, status } = useSession();

  const [providers, setProviders] = useState<any>(null);
  const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);

  const navbarDropdownLinks = NavbarDropdownLinks(t, 15)

  useEffect(() => {
    const getProvidersFunc = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    getProvidersFunc();

  }, []);

  return {session, providers, toggleDropdown, setToggleDropdown, t, navbarDropdownLinks, status };
};

export default NavbarController;
