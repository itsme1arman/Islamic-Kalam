"use client";

import Link from "next/link";
import { useState } from "react";

const categories = [
  {
    number: "01",
    title: "Naat Sharif",
    urdu: "نعتِ رسول ﷺ",
    description: "Aaqa-e-Kareem ﷺ ki shaan mein mohabbat bhare alfaaz.",
    href: "/naat",
    symbol: "ﷺ",
    label: "ISHQ-E-RASOOL",
  },
  {
    number: "02",
    title: "Manqabat",
    urdu: "منقبت",
    description: "Auliya-e-Kiram aur buzurgan-e-deen ki madah.",
    href: "/manqabat",
    symbol: "م",
    label: "MADAH-E-AULIYA",
  },
  {
    number: "03",
    title: "Hamd",
    urdu: "حمدِ باری تعالیٰ",
    description: "Allah Ta'ala ki hamd-o-sana mein likhe khoobsurat alfaaz.",
    href: "/hamd",
    symbol: "الله",
    label: "HAMD-O-SANA",
  },
  {
    number: "04",
    title: "Salam",
    urdu: "سلام",
    description: "Adab aur aqeedat se labrez salam ka majmua.",
    href: "/salam",
    symbol: "ﷺ",
    label: "ADAB-O-SALAM",
  },
  {
    number: "05",
    title: "Biography",
    urdu: "سیرت و حالات",
    description: "Buzurgan-e-deen ki zindagi aur unki taleemaat.",
    href: "/biography",
    symbol: "س",
    label: "SEERAT-O-TALEEMAT",
  },
];

const featuredItems = [
  {
    title: "Naat Sharif",
    subtitle: "Ishq-e-Rasool ﷺ",
    description: "Dil ko sukoon dene wale naatiya kalaam padhein.",
    href: "/naat",
    symbol: "ﷺ",
    number: "01",
  },
  {
    title: "Manqabat",
    subtitle: "Madah-e-Auliya",
    description: "Auliya-e-Kiram ki shaan mein likha gaya kalaam.",
    href: "/manqabat",
    symbol: "م",
    number: "02",
  },
  {
    title: "Islamic Biography",
    subtitle: "Seerat aur Tareekh",
    description: "Azeem Islami shakhsiyaton ki zindagi se seekhein.",
    href: "/biography",
    symbol: "س",
    number: "03",
  },
];

export default function HomePage() {
  const [query, setQuery] = useState("");

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const search = query.trim();

    if (!search) {
      window.location.href = "/naat";
      return;
    }

    window.location.href = `/naat?search=${encodeURIComponent(search)}`;
  }

  return (
    <div className="ik-site">
      {/* HERO SECTION */}
      <section className="ik-hero">
        <div className="ik-decoration ik-decoration-left" aria-hidden="true">
          ۞
        </div>

        <div className="ik-decoration ik-decoration-right" aria-hidden="true">
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
            Naat Sharif, Manqabat, Hamd, Salam aur buzurgan-e-deen ki
            zindagi ka muntakhab majmua — mohabbat aur adab ke saath.
          </p>

          <div className="ik-actions">
            <Link href="/naat" className="ik-button ik-primary">
              Explore Kalam <span aria-hidden="true">↗</span>
            </Link>

            <Link href="/biography" className="ik-button ik-outline">
              Read Biography <span aria-hidden="true">→</span>
            </Link>
          </div>

          <form className="ik-search" onSubmit={handleSearch}>
            <span className="ik-search-icon" aria-hidden="true">
              ⌕
            </span>

            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Naat, Manqabat ya naam search karein..."
              aria-label="Islamic Kalam search"
            />

            <button type="submit">
              Search <span aria-hidden="true">↗</span>
            </button>
          </form>

          <div className="ik-hero-note">
            <span aria-hidden="true" />
            Ilm se roshni
            <b>·</b>
            Kalam se mohabbat
            <b>·</b>
            Adab ke saath
            <span aria-hidden="true" />
          </div>
        </div>

        <div className="ik-scroll" aria-hidden="true">
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
          Islamic Kalam mein padhiye apni pasandeeda naatein, manqabatein,
          hamd-o-sana aur un azeem hastiyon ke halaat jinhone apni zindagi
          deen, ilm aur mohabbat ke liye waqf ki.
        </p>
      </section>

      {/* CATEGORY NAVIGATION */}
      <nav className="ik-category-nav" aria-label="Kalam categories">
        <div className="ik-category-nav-inner">
          {categories.map((category) => (
            <Link href={category.href} key={category.href}>
              <span>{category.title}</span>
              <span className="ik-nav-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
          ))}
        </div>
      </nav>

      {/* CATEGORIES */}
      <section className="ik-categories">
        <div className="ik-section-heading">
          <div>
            <span className="ik-label">EXPLORE OUR COLLECTION</span>

            <h2>
              Apni pasand ka
              <br />
              <em>kalaam chuniye</em>
            </h2>
          </div>

          <span className="ik-heading-arabic" lang="ar" dir="rtl">
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
                <span className="ik-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>

              <div className="ik-medallion">
                <span lang="ar">{category.symbol}</span>
              </div>

              <span className="ik-card-label">{category.label}</span>

              <h3>{category.title}</h3>

              <p className="ik-urdu" lang="ur" dir="rtl">
                {category.urdu}
              </p>

              <p className="ik-card-description">{category.description}</p>

              <div className="ik-card-link">
                Collection dekhein
                <span aria-hidden="true">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED COLLECTION */}
      <section className="ik-featured-section">
        <div className="ik-section-heading">
          <div>
            <span className="ik-label">A COLLECTION OF DEVOTION</span>

            <h2>
              Kalaam ki duniya,
              <br />
              <em>aapke liye.</em>
            </h2>
          </div>

          <p className="ik-featured-intro">
            Apni pasand ka kalaam chuniye aur aqeedat ke is khoobsurat safar
            ka hissa baniye.
          </p>
        </div>

        <div className="ik-featured-grid">
          {featuredItems.map((item) => (
            <article className="ik-featured-card" key={item.href}>
              <div className="ik-featured-art">
                <span className="ik-featured-number">{item.number}</span>

                <span className="ik-featured-symbol" lang="ar">
                  {item.symbol}
                </span>

                <span className="ik-featured-ornament" aria-hidden="true">
                  ۞
                </span>
              </div>

              <div className="ik-featured-body">
                <span className="ik-featured-subtitle">{item.subtitle}</span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <Link href={item.href} className="ik-text-link">
                  Explore collection <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FEATURE BANNER */}
      <section className="ik-feature">
        <div className="ik-feature-copy">
          <span className="ik-label">KALAAM KI DUNIYA</span>

          <h2>
            Har lafz mein
            <br />
            <em>mohabbat,</em>
            <br />
            har misre mein aqeedat.
          </h2>

          <p>
            Naat-o-Manqabat ke alfaaz ko padhein, samjhein aur apni roohani
            riwayat se judein.
          </p>

          <Link href="/naat" className="ik-text-link">
            Naat Sharif padhein <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="ik-calligraphy">
          <div className="ik-calligraphy-ring" />

          <span className="ik-star" aria-hidden="true">
            ✳
          </span>

          <p lang="ar" dir="rtl">
            صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ
          </p>

          <span className="ik-gold-line" />

          <small>ISHQ · ADAB · AQEEDAT</small>
        </div>
      </section>

      {/* BIOGRAPHY SECTION */}
      <section className="ik-biography">
        <div className="ik-biography-mark" aria-hidden="true">
          س
        </div>

        <div className="ik-biography-copy">
          <span className="ik-label">SEERAT · ILM · TAREEKH</span>

          <h2>
            Azeem hastiyon ki
            <br />
            <em>zindagi se seekhein.</em>
          </h2>

          <p>
            Buzurgan-e-deen ki zindagi, taleemaat aur ilm-o-adab ke safar ko
            padhein. Apni maloomat mein izafa karein aur Islami tareekh se
            judein.
          </p>

          <Link href="/biography" className="ik-button ik-primary">
            Explore Biography <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      {/* QUOTE */}
      <section className="ik-quote">
        <span className="ik-quote-mark" aria-hidden="true">
          “
        </span>

        <p>
          Adab, aqeedat aur mohabbat —
          <br />
          yahi hai hamare kalaam ki pehchaan.
        </p>

        <span className="ik-gold-line" />

        <small>ISLAMIC KALAM</small>
      </section>

      {/* FINAL CTA */}
      <section className="ik-bottom">
        <div className="ik-bottom-logo" aria-hidden="true">
          ا
        </div>

        <div className="ik-bottom-copy">
          <span className="ik-label">ISLAMIC KALAM</span>

          <h2>
            Rooh ko chhoo lene wale
            <em> alfaaz.</em>
          </h2>

          <p>
            Naat, Manqabat, Hamd, Salam aur buzurgan-e-deen ka safar shuru
            karein.
          </p>
        </div>

        <Link href="/naat" className="ik-button ik-primary">
          Explore Kalam <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </div>
  );
}
