"use client";

import Link from "next/link";
import { useState } from "react";

const categories = [
  {
    number: "01",
    title: "Naat Sharif",
    urdu: "نعتِ رسول ﷺ",
    description:
      "Aaqa-e-Kareem ﷺ ki shaan mein mohabbat bhare alfaaz.",
    href: "/naat",
    symbol: "ﷺ",
  },
  {
    number: "02",
    title: "Manqabat",
    urdu: "منقبت",
    description:
      "Auliya-e-Kiram aur buzurgan-e-deen ki madah mein kalaam.",
    href: "/manqabat",
    symbol: "م",
  },
  {
    number: "03",
    title: "Biography",
    urdu: "سیرت و حالات",
    description:
      "Buzurgan-e-deen ki zindagi, taleemaat aur roohani safar.",
    href: "/biography",
    symbol: "س",
  },
];

export default function HomePage() {
  const [query, setQuery] = useState("");

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const search = query.trim();

    window.location.href = search
      ? `/naat?search=${encodeURIComponent(search)}`
      : "/naat";
  }

  return (
    <main className="ik-site">

      {/* HERO SECTION */}
      <section className="ik-hero">
        <div className="ik-decoration ik-decoration-left">
          ۞
        </div>

        <div className="ik-decoration ik-decoration-right">
          ۞
        </div>

        <div className="ik-hero-content">

          <div className="ik-badge">
            <span>✦</span>
            ADAB · AQEEDAT · MOHABBAT
            <span>✦</span>
          </div>

          <p className="ik-bismillah" lang="ar" dir="rtl">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>

          <h1>
            Alfaaz jo dil ko
            <br />
            chhoo jaayein,
            <br />
            <em>aqeedat jo rooh ko</em>
            <br />
            roshan kare.
          </h1>

          <p className="ik-description">
            Naat Sharif, Manqabat aur buzurgan-e-deen ki
            zindagi ka muntakhab majmua — mohabbat aur
            adab ke saath.
          </p>

          <div className="ik-actions">
            <Link href="/naat" className="ik-button ik-primary">
              Explore Kalam <span>↗</span>
            </Link>

            <Link href="/biography" className="ik-button ik-outline">
              Buzurgan-e-Deen <span>→</span>
            </Link>
          </div>

          <form className="ik-search" onSubmit={handleSearch}>
            <span className="ik-search-icon">⌕</span>

            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Naat, Manqabat ya naam search karein..."
              aria-label="Search Islamic Kalam"
            />

            <button type="submit">
              Search <span>↗</span>
            </button>
          </form>

          <div className="ik-hero-note">
            <span />
            Ilm se roshni
            <b>·</b>
            Kalam se mohabbat
            <b>·</b>
            Adab ke saath
            <span />
          </div>

        </div>

        <div className="ik-scroll">
          ↓
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="ik-intro">
        <div className="ik-eyebrow">
          <span />
          AAPKA ISTAQBAAL HAI
          <span />
        </div>

        <h2>
          Ek jagah,
          <br />
          <em>roohani kalaam ka khazana.</em>
        </h2>

        <p>
          Islamic Kalam par padhiye pasandeeda naatein,
          manqabatein aur un azeem hastiyon ke halaat
          jinhone apni zindagi deen, ilm aur mohabbat
          ke liye waqf ki.
        </p>
      </section>

      {/* CATEGORIES */}
      <section className="ik-categories">

        <div className="ik-section-heading">
          <div>
            <span className="ik-label">
              EXPLORE OUR COLLECTION
            </span>

            <h2>
              Apni pasand ka
              <br />
              <em>kalaam chuniye</em>
            </h2>
          </div>

          <span
            className="ik-heading-arabic"
            lang="ar"
            dir="rtl"
          >
            محبت و عقیدت
          </span>
        </div>

        <div className="ik-card-grid">

          {categories.map((category) => (
            <Link
              href={category.href}
              className="ik-card"
              key={category.href}
            >
              <div className="ik-card-top">
                <span>{category.number}</span>
                <span className="ik-arrow">↗</span>
              </div>

              <div className="ik-medallion">
                <span lang="ar">{category.symbol}</span>
              </div>

              <h3>{category.title}</h3>

              <p
                className="ik-urdu"
                lang="ur"
                dir="rtl"
              >
                {category.urdu}
              </p>

              <p className="ik-card-description">
                {category.description}
              </p>

              <div className="ik-card-link">
                Collection dekhein
                <span>→</span>
              </div>
            </Link>
          ))}

        </div>
      </section>

      {/* FEATURED SECTION */}
      <section className="ik-feature">

        <div className="ik-feature-copy">
          <span className="ik-label">
            KALAAM KI DUNIYA
          </span>

          <h2>
            Har lafz mein
            <br />
            <em>mohabbat,</em>
            <br />
            har misre mein aqeedat.
          </h2>

          <p>
            Naat-o-Manqabat ke alfaaz ko padhein,
            samjhein aur apni roohani riwayat se judein.
          </p>

          <Link href="/naat" className="ik-text-link">
            Naat Sharif padhein
            <span>↗</span>
          </Link>
        </div>

        <div className="ik-calligraphy">
          <div className="ik-calligraphy-ring" />

          <span className="ik-star">✳</span>

          <p lang="ar" dir="rtl">
            صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ
          </p>

          <span className="ik-gold-line" />

          <small>
            ISHQ · ADAB · AQEEDAT
          </small>
        </div>

      </section>

      {/* QUOTE */}
      <section className="ik-quote">
        <span className="ik-quote-mark">“</span>

        <p>
          Adab, aqeedat aur mohabbat —
          yahi hai hamare kalaam ki pehchaan.
        </p>

        <span className="ik-gold-line" />

        <small>ISLAMIC KALAM</small>
      </section>

      {/* FINAL CTA */}
      <section className="ik-bottom">

        <div className="ik-bottom-logo">
          ا
        </div>

        <div className="ik-bottom-copy">
          <span className="ik-label">
            ISLAMIC KALAM
          </span>

          <h2>
            Rooh ko chhoo lene wale
            <em> alfaaz.</em>
          </h2>

          <p>
            Naat, Manqabat aur buzurgan-e-deen ka
            safar shuru karein.
          </p>
        </div>

        <Link href="/naat" className="ik-button ik-primary">
          Explore Kalam <span>↗</span>
        </Link>

      </section>

    </main>
  );
}
