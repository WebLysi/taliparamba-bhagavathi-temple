import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import en from "@/translations/en";
import ml from "@/translations/ml";
import conf from "@/translations/config"; // imported config

type Language = "en" | "ml";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof en; // keep your existing translation type
  cf: typeof conf; // expose config directly (no duplication)
}

const translations = { en, ml };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("lang") as Language | null;
    return saved ?? "en";
  });

  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
    cf: conf, // provide config imported from config file
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};

