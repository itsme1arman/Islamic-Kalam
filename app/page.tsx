"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Language = "hinglish" | "hindi" | "urdu";
type Theme = "light" | "dark";

const content = {
  hinglish: {
    badge: "ADAB · AQEEDAT · MOHABBAT",
    title1: "Alfaaz jo dil ko",
    title2: "chhoo jaayein,",
    title3: "aqeedat jo rooh ko",
    title4: "roshan kare.",
    description:
      "Naat Sharif, Manqabat, Hamd, Salam aur buzurgan-e-deen ki zindagi ka muntakhab majmua — mohabbat aur adab ke saath.",
    explore: "Explore Kalam",
    biography: "Read Biography",
    placeholder: "Naat, Manqabat ya naam search karein...",
    search: "Search",
    categories: "Hamari Collections",
    categoriesTitle: "Kalam ki duniya",
    categoriesDescription:
      "Apni pasand ka kalam chunein aur aqeedat ke safar ka hissa banein.",
    naat: "Naat Sharif",
    manqabat: "Manqabat",
    hamd: "Hamd",
    salam: "Salam",
    bio: "Biography",
    stat1: "KALAM CATEGORIES",
    stat2: "MOHABBAT AUR AQEEDAT",
    stat3: "ADAB KI PEHCHAAN",
    language: "Language",
    theme: "Theme",
    light: "Light",
    dark: "Dark",
  },
  hindi: {
    badge: "अदब · अकीदत · मोहब्बत",
    title1: "ऐसे अल्फ़ाज़ जो दिल को",
    title2: "छू जाएँ,",
    title3: "अकीदत जो रूह को",
    title4: "रोशन करे।",
    description:
      "नात शरीफ़, मनक़बत, हम्द, सलाम और बुज़ुर्गाने-दीन की ज़िंदगी का चुनिंदा संग्रह — मोहब्बत और अदब के साथ।",
    explore: "कलाम देखें",
    biography: "जीवनी पढ़ें",
    placeholder: "नात, मनक़बत या नाम खोजें...",
    search: "खोजें",
    categories: "हमारा संग्रह",
    categoriesTitle: "कलाम की दुनिया",
    categoriesDescription:
      "अपनी पसंद का कलाम चुनें और अकीदत के सफ़र का हिस्सा बनें।",
    naat: "नात शरीफ़",
    manqabat: "मनक़बत",
    hamd: "हम्द",
    salam: "सलाम",
    bio: "जीवनी",
    stat1: "कलाम की श्रेणियाँ",
    stat2: "मोहब्बत और अकीदत",
    stat3: "अदब की पहचान",
    language: "भाषा",
    theme: "थीम",
    light: "लाइट",
    dark: "डार्क",
  },
  urdu: {
    badge: "ادب · عقیدت · محبت",
    title1: "الفاظ جو دل کو",
    title2: "چھو جائیں،",
    title3: "عقیدت جو روح کو",
    title4: "روشن کرے۔",
    description:
      "نعت شریف، منقبت، حمد، سلام اور بزرگانِ دین کی زندگی کا منتخب مجموعہ — محبت اور ادب کے ساتھ۔",
    explore: "کلام دیکھیں",
    biography: "سوانح حیات",
    placeholder: "نعت، منقبت یا نام تلاش کریں...",
    search: "تلاش",
    categories: "ہمارا مجموعہ",
    categoriesTitle: "کلام کی دنیا",
    categoriesDescription:
      "اپنی پسند کا کلام منتخب کریں اور عقیدت کے سفر کا حصہ بنیں۔",
    naat: "نعت شریف",
    manqabat: "منقبت",
    hamd: "حمد",
    salam: "سلام",
    bio: "سوانح حیات",
    stat1: "کلام کی اقسام",
    stat2: "محبت اور عقیدت",
    stat3: "ادب کی پہچان",
    language: "زبان",
    theme: "تھیم",
    light: "لائٹ",
    dark: "ڈارک",
  },
};

const categoryItems = [
  { key: "naat", href: "/naat", symbol: "۞" },
  { key: "manqabat", href: "/manqabat", symbol: "✧" },
  { key: "hamd", href: "/hamd", symbol: "☾" },
  { key: "salam", href: "/salam", symbol: "❋" },
  { key: "bio", href: "/biography", symbol: "✦" },
] as const;

export default function HomePage() {
  const [language, setLanguage] = useState<Language>("hinglish");
  const [theme, setTheme] = useState<Theme>("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem("ik-language");
      const savedTheme = localStorage.getItem("ik-theme");

      if (
        savedLanguage === "hinglish" ||
        savedLanguage === "hindi" ||
        savedLanguage === "urdu"
      ) {
        setLanguage(savedLanguage);
      }

      if (savedTheme === "light" || savedTheme === "dark") {
        setTheme(savedTheme);
      }
    } catch {
      // Continue with default settings when storage is unavailable.
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("ik-language", language);
      localStorage.setItem("ik-theme", theme);
    } catch {
      // The page remains usable if storage is unavailable.
    }
  }, [language, theme]);

  const t = content[language];

  function submitSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const query = search.trim();

    if (query) {
      window.location.href = "/naat?search=" + encodeURIComponent(query);
    }
  }

  return (
    <div
      className={`ik-site ik-theme-${theme}`}
      dir={language === "urdu" ? "rtl" : "ltr"}
    >
      <section className="ik-hero">
        <div className="ik-settings-wrap">
          <button
            type="button"
            className="ik-settings-button"
            aria-label="Settings"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "×" : "⋯"}
          </button>

          {menuOpen && (
            <div className="ik-settings-menu">
              <div className="ik-setting-row">
                <span>{t.language}</span>

                <div className="ik-setting-options">
                  <button
                    type="button"
                    className={language === "hinglish" ? "active" : ""}
                    onClick={() => setLanguage("hinglish")}
                  >
                    Hinglish
                  </button>

                  <button
                    type="button"
                    className={language === "hindi" ? "active" : ""}
                    onClick={() => setLanguage("hindi")}
                  >
                    हिन्दी
                  </button>

                  <button
                    type="button"
                    className={language === "urdu" ? "active" : ""}
                    onClick={() => setLanguage("urdu")}
                  >
                    اردو
                  </button>
                </div>
              </div>

              <div className="ik-setting-row">
                <span>{t.theme}</span>

                <div className="ik-setting-options">
                  <button
                    type="button"
                    className={theme === "light" ? "active" : ""}
                    onClick={() => setTheme("light")}
                  >
                    ☀ {t.light}
                  </button>

                  <button
                    type="button"
                    className={theme === "dark" ? "active" : ""}
                    onClick={() => setTheme("dark")}
                  >
                    ☾ {t.dark}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="ik-hero-content">
          <div className="ik-brand">
            <div className="ik-brand-mark">ا</div>

            <div className="ik-brand-text">
              <span>Islamic Kalam</span>
              <small>NAAT · MANQABAT · BIOGRAPHY</small>
            </div>
          </div>

          <div className="ik-badge">
            <span>✦</span>
            {t.badge}
            <span>✦</span>
          </div>

          <p className="ik-bismillah" lang="ar" dir="rtl">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>

          <h1>
            {t.title1}
            <br />
            {t.title2}
            <br />
            <em>{t.title3}</em>
            <br />
            {t.title4}
          </h1>

          <p className="ik-description">{t.description}</p>

          <div className="ik-actions">
            <Link href="/naat" className="ik-button ik-primary">
              {t.explore} <span>↗</span>
            </Link>

            <Link href="/biography" className="ik-button ik-outline">
              {t.biography} <span>→</span>
            </Link>
          </div>

          <form className="ik-search" onSubmit={submitSearch}>
            <span className="ik-search-icon" aria-hidden="true">
              ⌕
            </span>

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder={t.placeholder}
              aria-label={t.placeholder}
            />

            <button type="submit">{t.search} ↗</button>
          </form>

          <div className="ik-hero-note">
            <span />
            <p>Ilm se roshni</p>
            <b>·</b>
            <p>Kalam se mohabbat</p>
            <b>·</b>
            <p>Adab ke saath</p>
            <span />
          </div>
        </div>
      </section>

      <section className="ik-stats">
        <div className="ik-stat">
          <strong>05</strong>
          <span>{t.stat1}</span>
        </div>

        <div className="ik-stat">
          <strong>∞</strong>
          <span>{t.stat2}</span>
        </div>

        <div className="ik-stat">
          <strong>01</strong>
          <span>{t.stat3}</span>
        </div>
      </section>

      <section className="ik-categories">
        <div className="ik-section-heading">
          <span className="ik-label">{t.categories}</span>
          <h2>{t.categoriesTitle}</h2>
          <p>{t.categoriesDescription}</p>
        </div>

        <div className="ik-card-grid">
          {categoryItems.map((item, index) => (
            <Link
              href={item.href}
              className="ik-card"
              key={item.key}
            >
              <div className="ik-card-top">
                <span>0{index + 1}</span>
                <span className="ik-arrow">↗</span>
              </div>

              <div className="ik-medallion">{item.symbol}</div>

              <h3>{t[item.key]}</h3>

              <span className="ik-card-link">
                {t.explore} <span>→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="ik-feature">
        <div className="ik-feature-copy">
          <span className="ik-label">A JOURNEY OF DEVOTION</span>

          <h2>
            Har lafz mein
            <br />
            <em>mohabbat.</em>
          </h2>

          <p>
            Aise kalaam ka majmua jo dil ko sukoon de aur rooh ko
            roshan kare.
          </p>

          <Link href="/naat" className="ik-button ik-primary">
            {t.explore} <span>↗</span>
          </Link>
        </div>

        <div className="ik-calligraphy">
          <div className="ik-calligraphy-ring" />
          <span className="ik-star">✦</span>
          <p lang="ar" dir="rtl">
            صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ
          </p>
          <span className="ik-gold-line" />
          <small>ISHQ · ADAB · AQEEDAT</small>
        </div>
      </section>

      <section className="ik-bottom">
        <div className="ik-bottom-logo">ا</div>

        <div className="ik-bottom-copy">
          <span className="ik-label">ISLAMIC KALAM</span>
          <h2>Kalam se judein, adab ke saath.</h2>
          <p>Naat, Manqabat, Hamd, Salam aur Islami biographies.</p>
        </div>

        <Link href="/naat" className="ik-button ik-primary">
          {t.explore} <span>→</span>
        </Link>
      </section>
    </div>
  );
                }
