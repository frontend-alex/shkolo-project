'use client'

import { useContext } from 'react';

import { TLanguageContext } from '@constants/Types';
import { LanguageContext } from '@/contexts/LanguageContext';
import { Language, translations } from '@/constants/translation';

const useTranslation = () => {
    const { language } = useContext(LanguageContext) as TLanguageContext

    const t = (key: keyof typeof translations[Language]) => {
        return translations[language][key] || null
    } 
  return { t }
}

export default useTranslation