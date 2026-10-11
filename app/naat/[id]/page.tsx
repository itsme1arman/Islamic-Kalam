"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { naats } from "@/data/naat";

export default function KalamDetailPage() {
  const params = useParams<{ id: string }>();
  const [language, setLanguage] = useState("roman");

  const kalam = naats.find((item) => item.id === params.id);

  if (!kalam) {
    return (
      <main className="container">
        <h1>Naat not found</h1>
        <Link href="/naat">← Back to Naat</Link>
      </main>
    );
  }

  const lyrics = kalam.lyrics[
    language as keyof typeof kalam.lyrics
  ];

  return (
    <main className="container">
      <section className="page-head">
        <Link href="/naat">← Back to Naat</Link>
        <h1>{kalam.title}</h1>
        <p>Poet: {kalam.poet}</p>
      </section>

      <section className="kalam-section">
        <div className="language-buttons">
          <button onClick={() => setLanguage("roman")}>
            Roman Urdu
          </button>

          <button onClick={() => setLanguage("urdu")}>
            اردو
          </button>

          <button onClick={() => setLanguage("hindi")}>
            हिन्दी
          </button>
        </div>

        <article
          className="kalam-card lyrics"
          lang={language === "urdu" ? "ur" : language === "hindi" ? "hi" : "en"}
          dir={language === "urdu" ? "rtl" : "ltr"}
        >
          <h2>{kalam.title}</h2>
          <p style={{ whiteSpace: "pre-wrap" }}>{lyrics}</p>
        </article>
      </section>
    </main>
  );
}
