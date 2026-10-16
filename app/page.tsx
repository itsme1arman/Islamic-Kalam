"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { useLanguage } from "@/components/LanguageProvider";

type Language = "hinglish" | "hindi" | "urdu";

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
    featureLabel: "A JOURNEY OF DEVOTION",
    featureTitle1: "Har lafz mein",
    featureTitle2: "mohabbat.",
    featureDescription:
      "Aise kalaam ka majmua jo dil ko sukoon de aur rooh ko roshan kare.",
    bottomTitle: "Kalam se judein, adab ke saath.",
    bottomDescription:
      "Naat, Manqabat, Hamd, Salam aur Islami biographies.",
    calligraphyCaption: "ISHQ · ADAB · AQEEDAT",
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
    featureLabel: "अकीदत का एक सफ़र",
    featureTitle1: "हर लफ़्ज़ में",
    featureTitle2: "मोहब्बत।",
    featureDescription:
      "ऐसे कलाम का संग्रह जो दिल को सुकून दे और रूह को रोशन करे।",
    bottomTitle: "अदब के साथ कलाम से जुड़ें।",
    bottomDescription:
      "नात, मनक़बत, हम्द, सलाम और इस्लामी जीवनियाँ।",
    calligraphyCaption: "इश्क़ · अदब · अकीदत",
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
    biography: "سوانح حیات پڑھیں",
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
    featureLabel: "عقیدت کا ایک سفر",
    featureTitle1: "ہر لفظ میں",
    featureTitle2: "محبت۔",
    featureDescription:
      "ایسے کلام کا مجموعہ جو دل کو سکون دے اور روح کو روشن کرے۔",
    bottomTitle: "ادب کے ساتھ کلام سے جڑیں۔",
    bottomDescription:
      "نعت، منقبت، حمد، سلام اور اسلامی سوانح حیات۔",
    calligraphyCaption: "عشق · ادب · عقیدت",
    light: "لائٹ",
    dark: "ڈارک",
  },
} satisfies Record<Language, Record<string, string>>;

const categoryItems = [
  { key: "naat", href: "/naat", symbol: "۞" },
  { key: "manqabat", href: "/manqabat", symbol: "✧" },
  { key: "hamd", href: "/hamd", symbol: "☾" },
  { key: "salam", href: "/salam", symbol: "❋" },
  { key: "bio", href: "/biography", symbol: "✦" },
] as const;

export default function HomePage() {
  const { language, theme } = useLanguage();
  const [search, setSearch] = useState("");

  const t = content[language];

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const query = search.trim();

    if (query) {
      window.location.href = `/naat?search=${encodeURIComponent(query)}`;
    }
  }

  return (
    <div
      className={`ik-site ik-theme-${theme === "auto" ? "light" : theme}`}
      lang={language === "urdu" ? "ur" : language === "hindi" ? "hi" : "en"}
      dir={language === "urdu" ? "rtl" : "ltr"}
    >
      <section className="ik-hero">
        <div className="ik-badge">
          <span aria-hidden="true">✦</span>
          {t.badge}
          <span aria-hidden="true">✦</span>
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
            {t.explore} <span aria-hidden="true">↗</span>
          </Link>

          <Link href="/biography" className="ik-button ik-outline">
            {t.biography} <span aria-hidden="true">→</span>
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

          <button type="submit">
            {t.search} <span aria-hidden="true">↗</span>
          </button>
        </form>

        <div className="ik-hero-note">
          <span />
          <p>
            {language === "urdu"
              ? "علم سے روشنی"
              : language === "hindi"
                ? "ज्ञान से रोशनी"
                : "Ilm se roshni"}
          </p>
          <b>·</b>
          <p>
            {language === "urdu"
              ? "کلام سے محبت"
              : language === "hindi"
                ? "कलाम से मोहब्बत"
                : "Kalam se mohabbat"}
          </p>
          <b>·</b>
          <p>
            {language === "urdu"
              ? "ادب کے ساتھ"
              : language === "hindi"
                ? "अदब के साथ"
                : "Adab ke saath"}
          </p>
          <span />
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
                <span className="ik-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>

              <div className="ik-medallion" aria-hidden="true">
                {item.symbol}
              </div>

              <h3>{t[item.key]}</h3>

              <span className="ik-card-link">
                {t.explore} <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="ik-feature">
        <div className="ik-feature-copy">
          <span className="ik-label">{t.featureLabel}</span>

          <h2>
            {t.featureTitle1}
            <br />
            <em>{t.featureTitle2}</em>
          </h2>

          <p>{t.featureDescription}</p>

          <Link href="/naat" className="ik-button ik-primary">
            {t.explore} <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="ik-calligraphy">
          <div className="ik-calligraphy-ring" />
          <span className="ik-star" aria-hidden="true">
            ✦
          </span>

          <p lang="ar" dir="rtl">
            صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ
          </p>

          <span className="ik-gold-line" />
          <small>{t.calligraphyCaption}</small>
        </div>
      </section>

      <section className="ik-bottom">
        <div className="ik-bottom-logo" aria-hidden="true">
          ا
        </div>

        <div className="ik-bottom-copy">
          <span className="ik-label">ISLAMIC KALAM</span>
          <h2>{t.bottomTitle}</h2>
          <p>{t.bottomDescription}</p>
        </div>

        <Link href="/naat" className="ik-button ik-primary">
          {t.explore} <span aria-hidden="true">→</span>
        </Link>
      </section>
    </div>
  );
}
