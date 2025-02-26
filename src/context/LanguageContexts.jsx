import {createContext, useState, useEffect} from "react";
import ceviri from "../data/translations.json";


  
import { createContext, useState, useEffect } from "react";
import ceviri from "../data/translations.json";


export const LanguageContexts = createContext();

export const LanguageContext = ({ children }) => {
    const [language, setLanguage] = useState("en");
    const [content, setContent] = useState(ceviri[language] || {});

    useEffect(() => {
        setContent(ceviri[language] || {});
    }, [language]);

    const dilDegistir = (yeniDil) => {
        setLanguage(yeniDil);
    };

    return (
        <LanguageContexts.Provider value={{ dilDegistir, content, language }}>
            {children}
        </LanguageContexts.Provider>
    );
};


export { LanguageContext };

