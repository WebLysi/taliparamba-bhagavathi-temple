import { createContext, useContext, ReactNode } from "react";
import { useParams, useNavigate } from "react-router-dom";
import enTranslations from "@/translations/en";
import mlTranslations from "@/translations/ml";

type Language = "en" | "ml";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const { lang } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const language = (lang as Language) || "en";

  const setLanguage = (newLang: Language) => {
    navigate(`/${newLang}`);
  };

  // Select translations based on language
  const translations = language === "ml" ? mlTranslations : enTranslations;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
