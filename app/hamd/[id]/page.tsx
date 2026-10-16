"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { hamds } from "@/data/hamd";
import { useLanguage } from "@/components/LanguageProvider";

const pageContent = {
  hinglish: {
    back: "← Hamd par wapas jaayein",
    poet: "Shaair",
    notFound: "Hamd nahi mili",
  },
  hindi: {
    back: "← हम्द पर वापस जाएँ",
    poet: "शायर",
    notFound: "हम्द नहीं मिली",
  },
  urdu: {
    back: "← حمد پر واپس جائیں",
    poet: "شاعر",
    notFound: "حمد نہیں ملی",
  },
} as const;

export default function HamdDetailPage() {
  const params = useParams<{ id: string }>();
  const { language } = useLanguage();

  const kalam = hamds.find((item) => item.id === params.id);
  const text = pageContent[language];

  if (!kalam) {
    return (
      <main
        className="container"
        lang={language === "urdu" ? "ur" : language === "hindi" ? "hi" : "en"}
        dir={language === "urdu" ? "rtl" : "ltr"}
      >
        <h1>{text.notFound}</h1>
        <Link href="/hamd">{text.back}</Link>
      </main>
    );
  }

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
        <Link href="/hamd">{text.back}</Link>

        <h1>{kalam.title}</h1>

        <p>
          {text.poet}: {kalam.poet}
        </p>
      </section>

      <section className="kalam-section">
        <article className="kalam-card lyrics">
          <h2>{kalam.title}</h2>

          <p
            lang={
              language === "urdu"
                ? "ur"
                : language === "hindi"
                  ? "hi"
                  : "en"
            }
            dir={language === "urdu" ? "rtl" : "ltr"}
            style={{ whiteSpace: "pre-wrap" }}
          >
            {lyrics}
          </p>
        </article>
      </section>
    </main>
  );
}
