import Flag from 'react-world-flags';
import React, { useContext } from 'react'
import useTranslation from '@hooks/useTranslation';
import LanguageContext from '@contexts/LanguageContext';

import { Button } from './button';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, } from './dropdown-menu'
import { TLanguageContext } from '@constants/Types';
import { ChevronDown } from 'lucide-react';
import { footerLanguages } from '@constants/StaticData';
import { toast } from 'react-toastify';

const LanguageDropdown = () => {
    const { t } = useTranslation();
    const { language, changeLanguage } = useContext(LanguageContext) as TLanguageContext
  
    return (
      <DropdownMenu>
      <DropdownMenuTrigger className='w-full relative'>
        <Button variant='outline' className='flex gap-1 items-start justify-start w-full'>
          <Flag className='h-5 w-5' code={language}/>
          <p className='capitalize'>{language}</p>
        </Button>
        <ChevronDown className='absolute right-5 top-[22%] text-stone-400'/>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {footerLanguages.map((lang, index) => (
          <DropdownMenuItem disabled={lang.language === language} className='flex-3' key={index} onClick={() => changeLanguage(lang.language)}>
            <Flag className='w-5 h-5' code={lang.language}/>
            <p>{lang.name}</p>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LanguageDropdown