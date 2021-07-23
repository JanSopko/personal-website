import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {createContext, useState} from "react";
import {LanguagesEnum} from "../language-config/languages.enum";

export const LanguageContext = createContext<LanguagesEnum>(LanguagesEnum.ENGLISH);

function MyApp({ Component, pageProps }: AppProps) {
  const [language, setLanguage] = useState(LanguagesEnum.ENGLISH); //todo prerobit

  return (
      <LanguageContext.Provider value={language}>
        <div id="main-container">
            <Component {...pageProps} setLanguage={setLanguage}/>
        </div>
      </LanguageContext.Provider>
  );
}
export default MyApp
