"use client";

import Link from "next/link";
import { useState } from "react";

const categories = [
  { title: "Naat Sharif", arabic: "نعت", href: "/naat" },
  { title: "Salam", arabic: "سلام", href: "/salam" },
  { title: "Manqabat", arabic: "منقبت", href: "/manqabat" },
  { title: "Hamd", arabic: "حمد", href: "/hamd" },
  { title: "Seerat", arabic: "سیرت", href: "/biography" },
];

export default function HomePage() {
  const [query, setQuery] = useState("");

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const value = query.trim();
    if (!value) return;

    window.location.href = `/naat?search=${encodeURIComponent(value)}`;
  }

  return (
    <main className="site-home">
      <header className="qh-header">
        <Link href="/" className="qh-brand">
          <span className="qh-logo">۞</span>
          <span>Islamic Kalam</span>
        </Link>

        <nav className="qh-nav">
          <a href="#quran">Quran</a>
          <a href="#kalaam">Kalaam</a>
          <a href="#learn">Learn</a>
        </nav>

        <Link href="/naat" className="qh-header-button">
          Explore
        </Link>
      </header>

      <section className="qh-hero">
        <div className="qh-hero-content">
          <span className="qh-eyebrow">
            YOUR SPACE FOR ISLAMIC KNOWLEDGE
          </span>

          <h1>
            Find peace in
            <br />
            <span>every word.</span>
          </h1>

          <p>
            Quran ki tilawat se lekar dil ko chhoo lene wale Kalaam tak,
            apne deeni safar ko yahan se shuru karein.
          </p>

          <form className="qh-search" onSubmit={handleSearch}>
            <span aria-hidden="true">⌕</span>

            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Naat, Hamd, Salam..."
              aria-label="Search Islamic Kalam"
            />

            <button type="submit" aria-label="Search">
              →
            </button>
          </form>

          <div className="qh-quick-links">
            <span>Explore:</span>
            <a href="#quran">Quran</a>
            <a href="#kalaam">Naat Sharif</a>
            <a href="#learn">Islamic Learning</a>
          </div>
        </div>

        <div className="qh-hero-side" aria-hidden="true">
          <div className="qh-orbit qh-orbit-one" />
          <div className="qh-orbit qh-orbit-two" />

          <div className="qh-center-symbol">
            <span>۞</span>
            <div className="qh-center-line" />
            <small>اقْرَأْ</small>
            <p>Read · Reflect · Remember</p>
          </div>
        </div>
      </section>

      <section className="qh-section qh-quran" id="quran">
        <div className="qh-section-heading">
          <div>
            <span className="qh-eyebrow">START WITH THE QURAN</span>
            <h2>Reconnect with the Quran</h2>
          </div>

          <span className="qh-section-icon">۞</span>
        </div>

        <div className="qh-quran-panel">
          <div className="qh-quran-copy">
            <span className="qh-mini-label">THE HOLY QURAN</span>
            <h3>Read. Understand. Reflect.</h3>
            <p>
              Quran padhein, tarjuma explore karein aur Allah ke paighaam
              par gaur karein.
            </p>

            <a
              className="qh-primary-button"
              href="https://quran.com"
              target="_blank"
              rel="noreferrer"
            >
              Open Quran <span>↗</span>
            </a>
          </div>

          <div className="qh-quran-arabic" lang="ar" dir="rtl">
            <span>بِسْمِ اللَّهِ</span>
            <span>الرَّحْمَٰنِ</span>
            <span>الرَّحِيمِ</span>
          </div>
        </div>
      </section>

      <section className="qh-section" id="kalaam">
        <div className="qh-section-heading">
          <div>
            <span className="qh-eyebrow">EXPLORE THE COLLECTION</span>
            <h2>Islamic Kalaam</h2>
            <p className="qh-heading-description">
              Alfaaz jo dil ko sukoon aur rooh ko taazgi dein.
            </p>
          </div>

          <Link href="/naat" className="qh-view-all">
            View all ↗
          </Link>
        </div>

        <div className="qh-category-grid">
          {categories.map((category, index) => (
            <Link
              href={category.href}
              className="qh-category"
              key={category.href}
            >
              <span className="qh-category-index">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="qh-category-arabic" lang="ar" dir="rtl">
                {category.arabic}
              </span>

              <strong>{category.title}</strong>

              <span className="qh-category-arrow">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="qh-learn-section" id="learn">
        <div>
          <span className="qh-eyebrow">KEEP LEARNING</span>
          <h2>Knowledge begins with curiosity.</h2>
          <p>
            Quran, Islamic notes aur deeni sawalon ko explore karne ke
            liye useful resources dekhein.
          </p>
        </div>

        <div className="qh-resource-links">
          <a href="https://qirtaas.io" target="_blank" rel="noreferrer">
            <span className="qh-resource-icon">✎</span>
            <span>
              <strong>Qirtaas</strong>
              <small>Explore Islamic study tools</small>
            </span>
            <span className="qh-resource-arrow">↗</span>
          </a>

          <a href="https://tazkiya.chat" target="_blank" rel="noreferrer">
            <span className="qh-resource-icon">☾</span>
            <span>
              <strong>Tazkiya</strong>
              <small>Explore Quranic learning</small>
            </span>
            <span className="qh-resource-arrow">↗</span>
          </a>
        </div>
      </section>

      <footer className="qh-footer">
        <Link href="/" className="qh-brand">
          <span className="qh-logo">۞</span>
          <span>Islamic Kalam</span>
        </Link>

        <p>Ilm se roshni. Kalaam se aqeedat.</p>

        <div className="qh-footer-bottom">
          <span>© {new Date().getFullYear()} Islamic Kalam</span>
          <a href="#top" onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}>
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}
