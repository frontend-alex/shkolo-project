'use client'

import React, { useEffect, useState, createContext } from 'react'
import { TChildrens, TSettingsContext } from '@constants/Types';

export const SettingsContext = createContext<TSettingsContext | undefined>(undefined);

const SettingsProvider: React.FC<TChildrens> = ({children}) => {

  const [background, setBackground ] = useState(() => {

    if(typeof window !== 'undefined'){
      const storedLanguage = JSON.parse(localStorage.getItem("backgroundColor") || JSON.stringify(false))
      return storedLanguage || false;
    }
    return false
  })




  useEffect(() => {
    if(typeof window !== 'undefined'){
      localStorage.setItem('backgroundColor', JSON.stringify(background))
    }
  }, [background])

  return (
    <SettingsContext.Provider value={{ background, setBackground }}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider