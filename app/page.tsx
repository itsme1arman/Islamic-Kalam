"use client";

import Link from "next/link";
import { useState } from "react";

const categories = [
  {
    title: "Naat Sharif",
    arabic: "نعت",
    description: "Ishq-e-Rasool ﷺ ke pur-noor alfaaz",
    href: "/naat",
    number: "01",
  },
  {
    title: "Salam",
    arabic: "سلام",
    description: "Adab aur aqeedat ka izhaar",
    href: "/salam",
    number: "02",
  },
  {
    title: "Manqabat",
    arabic: "منقبت",
    description: "Auliya-e-Kiram ki shaan",
    href: "/manqabat",
    number: "03",
  },
  {
    title: "Hamd",
    arabic: "حمد",
    description: "Allah Ta'ala ki hamd-o-sana",
    href: "/hamd",
    number: "04",
  },
  {
    title: "Seerat",
    arabic: "سیرت",
    description: "Islami tareekh aur paighaam",
    href: "/biography",
    number: "05",
  },
];

export default function HomePage() {
  const [search, setSearch] = useState("");

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const query = search.trim();

    if (query) {
      window.location.href = `/naat?search=${encodeURIComponent(query)}`;
    }
  }

  return (
    <main className="site-home">
      <header className="site-header">
        <Link href="/" className="brand">
          <span className="brand-mark">۞</span>
          <span>
            <strong>Islamic Kalam</strong>
            <small>WORDS OF FAITH</small>
          </span>
        </Link>

        <nav className="header-nav">
          <Link href="/naat">Kalaam</Link>
          <a href="#quran">Quran</a>
          <a href="#study">Study</a>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-label">
          <span className="status-dot" />
          YOUR ISLAMIC SPACE
        </div>

        <p className="hero-bismillah" lang="ar" dir="rtl">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>

        <h1>
          Read with faith.
          <br />
          <span>Live with purpose.</span>
        </h1>

        <p className="hero-description">
          Quran ki roshni, Kalaam ki mithaas aur ilm ka safar —
          sab ek hi jagah.
        </p>

        <form className="main-search" onSubmit={handleSearch}>
          <span className="search-icon" aria-hidden="true">
            ⌕
          </span>

          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Naat, Hamd ya koi Kalaam search karein..."
            aria-label="Search Islamic Kalaam"
          />

          <button type="submit">Search ↗</button>
        </form>

        <div className="hero-bottom">
          <span>QURAN</span>
          <i />
          <span>KALAAM</span>
          <i />
          <span>ILM</span>
        </div>
      </section>

      <section className="daily-ayah" id="quran">
        <div className="ayah-topline">
          <span className="section-kicker">A MOMENT OF REFLECTION</span>
          <span className="ayah-reference">AL-QURAN · 94:5</span>
        </div>

        <div className="ayah-content">
          <p className="ayah-arabic" lang="ar" dir="rtl">
            فَإِنَّ مَعَ الْعُسْرِ يُسْرًا
          </p>

          <p className="ayah-translation">
            “Toh beshak mushkil ke saath aasani hai.”
          </p>

          <p className="ayah-note">
            Har mushkil ke saath Allah ki taraf se aasani ki umeed rakhein.
          </p>

          <a
            href="https://quran.com/94/5"
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            Quran mein padhein <span>↗</span>
          </a>
        </div>
      </section>

      <section className="collection-section" id="kalaam">
        <div className="section-heading">
          <div>
            <span className="section-kicker">THE COLLECTION</span>
            <h2>Explore Kalaam<span>.</span></h2>
          </div>

          <Link href="/naat" className="view-all">
            View collection ↗
          </Link>
        </div>

        <div className="category-list">
          {categories.map((category) => (
            <Link
              href={category.href}
              className="category-item"
              key={category.title}
            >
              <span className="category-number">{category.number}</span>

              <span className="category-arabic" lang="ar" dir="rtl">
                {category.arabic}
              </span>

              <span className="category-info">
                <strong>{category.title}</strong>
                <small>{category.description}</small>
              </span>

              <span className="category-arrow">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="study-section" id="study">
        <div className="study-copy">
          <span className="section-kicker">GO BEYOND READING</span>
          <h2>
            Read it.
            <br />
            Understand it.
            <br />
            <span>Remember it.</span>
          </h2>

          <p>
            Quran padhein, ayat ke maani samjhein aur apne deeni
            mutaale ko behtar tareeqe se organize karein.
          </p>

          <a
            href="https://quran.com"
            target="_blank"
            rel="noreferrer"
            className="study-button"
          >
            Start your journey <span>↗</span>
          </a>
        </div>

        <div className="study-cards">
          <a
            href="https://quran.com"
            target="_blank"
            rel="noreferrer"
            className="study-card"
          >
            <span className="study-card-icon">۞</span>
            <span className="study-card-label">01 / READ</span>
            <strong>Read the Quran</strong>
            <small>Tilawat, tarjuma aur mutaala</small>
            <span className="study-card-arrow">↗</span>
          </a>

          <a
            href="https://qirtaas.io"
            target="_blank"
            rel="noreferrer"
            className="study-card"
          >
            <span className="study-card-icon">✎</span>
            <span className="study-card-label">02 / ORGANIZE</span>
            <strong>Islamic Notes</strong>
            <small>Deeni ilm aur references ko organize karein</small>
            <span className="study-card-arrow">↗</span>
          </a>

          <a
            href="https://tazkiya.chat"
            target="_blank"
            rel="noreferrer"
            className="study-card"
          >
            <span className="study-card-icon">☾</span>
            <span className="study-card-label">03 / REFLECT</span>
            <strong>Understand Ayat</strong>
            <small>Quran ki taleemat ko aur gehraai se explore karein</small>
            <span className="study-card-arrow">↗</span>
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <Link href="/" className="footer-brand">
          ۞ Islamic Kalam
        </Link>

        <p>Ilm se roshni, alfaaz se aqeedat.</p>

        <div className="footer-links">
          <Link href="/naat">Kalaam</Link>
          <a href="#quran">Quran</a>
          <a href="#study">Study</a>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Islamic Kalam</span>
          <span>Made with care and purpose.</span>
        </div>
      </footer>
    </main>
  );
}
