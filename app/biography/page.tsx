"use client";

import { biographies } from "@/data/biographies";
import { useLanguage } from "@/components/LanguageProvider";

const pageContent = {
  hinglish: {
    title: "Islami Shakhsiyatein",
    description: "Mashhoor Islami ulama aur shayaron ki zindagi ke baare mein padhein.",
    birth: "Paidaish",
    death: "Wisaal",
    biography: "Mukhtasar Sawaneh Hayat",
    empty: "Abhi koi biography maujood nahi hai.",
  },
  hindi: {
    title: "इस्लामी शख़्सियात",
    description: "प्रसिद्ध इस्लामी विद्वानों और शायरों की ज़िंदगी के बारे में पढ़ें।",
    birth: "जन्म",
    death: "विसाल",
    biography: "संक्षिप्त जीवनी",
    empty: "अभी कोई जीवनी उपलब्ध नहीं है।",
  },
  urdu: {
    title: "اسلامی شخصیات",
    description: "مشہور اسلامی علماء اور شعراء کی زندگی کے بارے میں پڑھیں۔",
    birth: "پیدائش",
    death: "وصال",
    biography: "مختصر سوانح حیات",
    empty: "فی الحال کوئی سوانح حیات موجود نہیں ہے۔",
  },
} as const;

export default function BiographyPage() {
  const { language } = useLanguage();
  const text = pageContent[language];

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
        {biographies.length === 0 ? (
          <p className="ik-category-empty">{text.empty}</p>
        ) : (
          <div className="kalam-grid ik-category-grid">
            {biographies.map((person) => {
              const biography =
                language === "hinglish"
                  ? person.roman
                  : language === "hindi"
                    ? person.hindi
                    : person.urdu;

              return (
                <article
                  className="kalam-card ik-category-card"
                  key={person.id}
                >
                  <h2>{person.name}</h2>

                  <p>
                    <strong>{text.birth}:</strong> {person.birth}
                  </p>

                  <p>
                    <strong>{text.death}:</strong> {person.death}
                  </p>

                  <div
                    className="biography-text"
                    lang={
                      language === "urdu"
                        ? "ur"
                        : language === "hindi"
                          ? "hi"
                          : "en"
                    }
                    dir={language === "urdu" ? "rtl" : "ltr"}
                  >
                    <h3>{text.biography}</h3>
                    <p>{biography}</p>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
