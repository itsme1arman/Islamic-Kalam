"use client";

import Link from "next/link";
import { manqabats } from "@/data/manqabat";
import { useLanguage } from "@/components/LanguageProvider";

const pageContent = {
  hinglish: {
    title: "Manqabat",
    description: "Manqabat ke khoobsurat kalaam ka majmua",
    poet: "Shaair",
    readMore: "Kalaam padhein",
    empty: "Abhi koi Manqabat maujood nahi hai.",
  },
  hindi: {
    title: "मनक़बत",
    description: "मनक़बत के खूबसूरत कलाम का संग्रह",
    poet: "शायर",
    readMore: "कलाम पढ़ें",
    empty: "अभी कोई मनक़बत उपलब्ध नहीं है।",
  },
  urdu: {
    title: "منقبت",
    description: "منقبت کے خوبصورت کلام کا مجموعہ",
    poet: "شاعر",
    readMore: "کلام پڑھیں",
    empty: "فی الحال کوئی منقبت موجود نہیں ہے۔",
  },
} as const;

export default function ManqabatPage() {
  const { language } = useLanguage();
  const text = pageContent[language];

  const lyricLanguage =
    language === "hinglish" ? "roman" : language;

  return (
    <main
      className="container ik-category-page"
      lang={
        language === "urdu"
          ? "ur"
          : language === "hindi"
            ? "hi"
            : "en"
      }
      dir={language === "urdu" ? "rtl" : "ltr"}
    >
      <section className="page-head ik-category-head">
        <h1>{text.title}</h1>
        <p>{text.description}</p>
      </section>

      <section className="kalam-section">
        {manqabats.length === 0 ? (
          <p className="ik-category-empty">{text.empty}</p>
        ) : (
          <div className="kalam-grid ik-category-grid">
            {manqabats.map((kalam) => {
              const lyrics =
                kalam.lyrics[
                  lyricLanguage as keyof typeof kalam.lyrics
                ];

              const preview = lyrics?.split("\n")[0] ?? "";

              return (
                <article
                  className="kalam-card ik-category-card"
                  key={kalam.id}
                >
                  <h2>{kalam.title}</h2>

                  <p className="ik-category-poet">
                    {text.poet}: {kalam.poet}
                  </p>

                  <p
                    className="kalam-preview"
                    lang={
                      language === "urdu"
                        ? "ur"
                        : language === "hindi"
                          ? "hi"
                          : "en"
                    }
                    dir={language === "urdu" ? "rtl" : "ltr"}
                  >
                    {preview}
                  </p>

                  <Link
                    className="read-more"
                    href={`/manqabat/${kalam.id}`}
                  >
                    {text.readMore} →
                  </Link>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
