import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {createContext, useState} from "react";
import {LanguagesEnum} from "../language-config/languages.enum";


const DEFAULT_LANGUAGE: LanguagesEnum = LanguagesEnum.SLOVAK;
export const LanguageContext = createContext<LanguagesEnum>(DEFAULT_LANGUAGE);

function MyApp({ Component, pageProps }: AppProps) {
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

  return (
      <LanguageContext.Provider value={language}>
        <div id="main-container">
            <Component {...pageProps} setLanguage={setLanguage}/>
        </div>
      </LanguageContext.Provider>
  );
}
export default MyApp
