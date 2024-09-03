import { useTheme } from 'next-themes';
import React, { useContext, useEffect, useState } from 'react'
import useTranslation from '@hooks/useTranslation';
import { ThemePreferences } from '@constants/StaticData';


const SettingsController = () => {
    const { t } = useTranslation();
    const { setTheme } = useTheme();
    
    const [path, setPath] = useState<string>("");
    const [toggleIndex, setToggleIndex] = useState<number>(0);
    
    const themePreferences = ThemePreferences(t);

    useEffect(() => {
      setPath(window.location.pathname);
    }, []);
  
  return { setTheme, t, setToggleIndex, toggleIndex, themePreferences, path}
}

export default SettingsController