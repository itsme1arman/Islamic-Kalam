"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Language = "hinglish" | "hindi" | "urdu";
export type Theme = "light" | "dark" | "auto";

type Dictionary = Record<string, string>;

const translations: Record<Language, Dictionary> = {
  hinglish: {
    settings: "Settings",
    language: "Language",
    theme: "Theme",
    auto: "Auto",
    light: "Light",
    dark: "Dark",
    explore: "Explore",
    home: "Home",
    naat: "Naat Sharif",
    manqabat: "Manqabat",
    salam: "Salam",
    hamd: "Hamd",
    biography: "Biography",
    personalities: "Islamic Personalities",
    about: "About Us",
    contact: "Contact Us",
    privacy: "Privacy Policy",
    disclaimer: "Disclaimer",
    terms: "Terms & Conditions",
    purpose: "Our Purpose",
    knowMore: "Know More",
    footerDescription:
      "Naat Sharif, Manqabat aur buzurgan-e-deen ki zindagi se judi maloomat ka ek majmua.",
    purposeDescription:
      "Hamara maqsad Islamic kalaam aur deeni shakhsiyat se mutalliq maloomat ko aasaan aur munazzam andaaz mein pesh karna hai.",
    motto: "Ilm se roshni · Kalam se mohabbat",
    footerCredit: "Made with ♥ for the love of Kalam",
    allRights: "All rights reserved.",
    search: "Search",
    readMore: "Read More",
    previous: "Previous",
    next: "Next",
    noResults: "Koi result nahi mila.",
    published: "Published",
    draft: "Draft",
  },

  hindi: {
    settings: "सेटिंग्स",
    language: "भाषा",
    theme: "थीम",
    auto: "ऑटो",
    light: "लाइट",
    dark: "डार्क",
    explore: "देखें",
    home: "होम",
    naat: "नात शरीफ़",
    manqabat: "मनक़बत",
    salam: "सलाम",
    hamd: "हम्द",
    biography: "जीवनी",
    personalities: "इस्लामी हस्तियाँ",
    about: "हमारे बारे में",
    contact: "संपर्क करें",
    privacy: "गोपनीयता नीति",
    disclaimer: "अस्वीकरण",
    terms: "नियम और शर्तें",
    purpose: "हमारा उद्देश्य",
    knowMore: "और जानें",
    footerDescription:
      "नात शरीफ़, मनक़बत और बुज़ुर्गाने-दीन की ज़िंदगी से जुड़ी जानकारी का एक संग्रह।",
    purposeDescription:
      "हमारा उद्देश्य इस्लामी कलाम और दीनी हस्तियों से जुड़ी जानकारी को आसान और व्यवस्थित रूप में प्रस्तुत करना है।",
    motto: "इल्म से रोशनी · कलाम से मोहब्बत",
    footerCredit: "कलाम की मोहब्बत के लिए ♥ से बनाया गया",
    allRights: "सर्वाधिकार सुरक्षित।",
    search: "खोजें",
    readMore: "और पढ़ें",
    previous: "पिछला",
    next: "अगला",
    noResults: "कोई परिणाम नहीं मिला।",
    published: "प्रकाशित",
    draft: "ड्राफ़्ट",
  },

  urdu: {
    settings: "ترتیبات",
    language: "زبان",
    theme: "تھیم",
    auto: "خودکار",
    light: "لائٹ",
    dark: "ڈارک",
    explore: "دیکھیں",
    home: "صفحۂ اول",
    naat: "نعت شریف",
    manqabat: "منقبت",
    salam: "سلام",
    hamd: "حمد",
    biography: "سوانح حیات",
    personalities: "اسلامی شخصیات",
    about: "ہمارے بارے میں",
    contact: "رابطہ کریں",
    privacy: "رازداری کی پالیسی",
    disclaimer: "وضاحتی بیان",
    terms: "شرائط و ضوابط",
    purpose: "ہمارا مقصد",
    knowMore: "مزید جانیں",
    footerDescription:
      "نعت شریف، منقبت اور بزرگانِ دین کی زندگی سے متعلق معلومات کا ایک مجموعہ۔",
    purposeDescription:
      "ہمارا مقصد اسلامی کلام اور دینی شخصیات سے متعلق معلومات کو آسان اور منظم انداز میں پیش کرنا ہے۔",
    motto: "علم سے روشنی · کلام سے محبت",
    footerCredit: "کلام کی محبت کے لیے ♥ سے بنایا گیا",
    allRights: "جملہ حقوق محفوظ ہیں۔",
    search: "تلاش کریں",
    readMore: "مزید پڑھیں",
    previous: "پچھلا",
    next: "اگلا",
    noResults: "کوئی نتیجہ نہیں ملا۔",
    published: "شائع شدہ",
    draft: "مسودہ",
  },
};

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  t: (key: string) => string;
  ready: boolean;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("hinglish");
  const [theme, setThemeState] = useState<Theme>("auto");
  const [ready, setReady] = useState(false);

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next);

    try {
      localStorage.setItem("ik-language", next);
    } catch {
      // Keep the setting in memory if storage is unavailable.
    }
  }, []);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);

    try {
      localStorage.setItem("ik-theme", next);
    } catch {
      // Keep the setting in memory if storage is unavailable.
    }
  }, []);

  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem("ik-language");
      const savedTheme = localStorage.getItem("ik-theme");

      if (
        savedLanguage === "hinglish" ||
        savedLanguage === "hindi" ||
        savedLanguage === "urdu"
      ) {
        setLanguageState(savedLanguage);
      }

      if (
        savedTheme === "auto" ||
        savedTheme === "light" ||
        savedTheme === "dark"
      ) {
        setThemeState(savedTheme);
      }
    } catch {
      // Use default settings.
    }

    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;

    const root = document.documentElement;
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const applySettings = () => {
      const effectiveTheme =
        theme === "auto"
          ? media.matches
            ? "dark"
            : "light"
          : theme;

      root.lang =
        language === "urdu"
          ? "ur"
          : language === "hindi"
            ? "hi"
            : "en";

      root.dir = language === "urdu" ? "rtl" : "ltr";
      root.dataset.ikLanguage = language;
      root.dataset.ikTheme = effectiveTheme;
      root.dataset.ikThemePreference = theme;

      window.dispatchEvent(
        new CustomEvent("ik-settings-change", {
          detail: {
            language,
            theme: effectiveTheme,
            themePreference: theme,
          },
        })
      );
    };

    applySettings();

    if (theme === "auto") {
      media.addEventListener("change", applySettings);

      return () => media.removeEventListener("change", applySettings);
    }
  }, [language, theme, ready]);

  const t = useCallback(
    (key: string) => translations[language][key] ?? key,
    [language]
  );

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, theme, setTheme, t, ready }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider."
    );
  }

  return context;
    }
