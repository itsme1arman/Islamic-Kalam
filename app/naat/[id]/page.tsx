"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { naats } from "@/data/naat";
import { useLanguage } from "@/components/LanguageProvider";

const pageContent = {
  hinglish: {
    back: "← Naat par wapas jaayein",
    poet: "Shaair",
    notFound: "Naat nahi mili",
    roman: "Roman Urdu",
    urdu: "اردو",
    hindi: "हिन्दी",
  },
  hindi: {
    back: "← नात पर वापस जाएँ",
    poet: "शायर",
    notFound: "नात नहीं मिली",
    roman: "रोमन उर्दू",
    urdu: "اردو",
    hindi: "हिन्दी",
  },
  urdu: {
    back: "← نعت پر واپس جائیں",
    poet: "شاعر",
    notFound: "نعت نہیں ملی",
    roman: "رومن اردو",
    urdu: "اردو",
    hindi: "ہندی",
  },
} as const;

export default function KalamDetailPage() {
  const params = useParams<{ id: string }>();
  const { language } = useLanguage();

  const kalam = naats.find((item) => item.id === params.id);
  const text = pageContent[language];

  // Naat na mile toh
  if (!kalam) {
    return (
      <main
        className="container"
        lang={language === "urdu" ? "ur" : language === "hindi" ? "hi" : "en"}
        dir={language === "urdu" ? "rtl" : "ltr"}
      >
        <h1>{text.notFound}</h1>
        <Link href="/naat">{text.back}</Link>
      </main>
    );
  }

  // Global language ke hisaab se lyrics select karo
  const lyricLanguage =
    language === "hinglish" ? "roman" : language;

  const lyrics = kalam.lyrics[lyricLanguage];

  return (
    <main
      className="container"
      lang={language === "urdu" ? "ur" : language === "hindi" ? "hi" : "en"}
      dir={language === "urdu" ? "rtl" : "ltr"}
    >
      <section className="page-head">
        <Link href="/naat">{text.back}</Link>

        <h1>{kalam.title}</h1>

        <p>
          {text.poet}: {kalam.poet}
        </p>
      </section>

      <section className="kalam-section">
        <div className="language-buttons">
          <button
            type="button"
            onClick={() => {
              window.location.href = "/settings";
            }}
          >
            {text.roman} / {text.urdu} / {text.hindi}
          </button>
        </div>

        <article
          className="kalam-card lyrics"
          lang={
            language === "urdu"
              ? "ur"
              : language === "hindi"
                ? "hi"
                : "en"
          }
          dir={language === "urdu" ? "rtl" : "ltr"}
        >
          <h2>{kalam.title}</h2>

          <p style={{ whiteSpace: "pre-wrap" }}>
            {lyrics}
          </p>
        </article>
      </section>
    </main>
  );
}
