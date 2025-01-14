import { createContext, useState } from "react";

export const LanguageContext = createContext({
    language: "english",
    setLanguage: () => {}
})

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("english");
    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}