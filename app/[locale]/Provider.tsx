import { I18nProviderClient } from '@/locales/client';
import React from 'react'

const Provider = ({children, locale}: {children: React.ReactNode, locale: string}) => {
  return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>;
}

export default Provider