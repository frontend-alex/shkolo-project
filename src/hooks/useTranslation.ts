'use client'

import { useContext } from 'react';

import { Language, translations } from '@/constants/translation';
import { LanguageContext, LanguageContextInterface } from '@/contexts/LanguageContext';

const useTranslation = () => {
    const { language } = useContext(LanguageContext) as LanguageContextInterface

    const t = (key: keyof typeof translations[Language]) => {
        return translations[language][key] || null
    } 
  return { t }
}

export default useTranslation