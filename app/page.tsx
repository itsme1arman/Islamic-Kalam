"use client";

import Link from "next/link";
import { useState } from "react";

const categories = [
  { name: "Naat Sharif", href: "/naat", symbol: "نعت" },
  { name: "Salam", href: "/salam", symbol: "سلام" },
  { name: "Manqabat", href: "/manqabat", symbol: "منقبت" },
  { name: "Hamd", href: "/hamd", symbol: "حمد" },
  { name: "Biography", href: "/biography", symbol: "سیرت" },
];

export default function HomePage() {
  const [search, setSearch] = useState("");

  return (
    <main className="home-page">
      <section className="luxury-home">
        <div className="luxury-frame">
          <div className="ornament ornament-top" aria-hidden="true">
            ✦
          </div>

          <div className="bismillah-content">
            <span className="arabic-overline" aria-hidden="true">
              ۞
            </span>

            <h1 lang="ar" dir="rtl" className="bismillah-title">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </h1>

            <div className="gold-divider" aria-hidden="true">
              <span />
              <i>✦</i>
              <span />
            </div>
          </div>

          <div className="ornament ornament-bottom" aria-hidden="true">
            ✦
          </div>
        </div>
      </section>

      <section className="home-search-section">
        <p className="home-tagline">ISLAMIC KALAAM COLLECTION</p>

        <h2>
          Find Your Favourite <span>Kalaam</span>
        </h2>

        <form
          className="home-search"
          onSubmit={(event) => {
            event.preventDefault();
            if (search.trim()) {
              window.location.href =
                `/naat?search=${encodeURIComponent(search.trim())}`;
            }
          }}
        >
          <span aria-hidden="true">⌕</span>

          <input
            type="search"
            placeholder="Search Naat, Salam, Manqabat..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            aria-label="Search Islamic Kalaam"
          />

          <button type="submit">Search</button>
        </form>

        <p className="home-search-note">
          Explore Naat, Salam, Manqabat, Hamd aur Islami Seerat
        </p>
      </section>

      <section className="home-categories" id="categories">
        <div className="home-section-heading">
          <div>
            <span className="home-tagline">EXPLORE</span>
            <h2>Browse Categories</h2>
          </div>

          <span className="home-section-decoration" aria-hidden="true">
            ✦
          </span>
        </div>

        <div className="home-category-grid">
          {categories.map((category) => (
            <Link
              href={category.href}
              key={category.href}
              className="home-category-card"
            >
              <span className="home-category-symbol" aria-hidden="true">
                {category.symbol}
              </span>

              <span className="home-category-name">{category.name}</span>

              <span className="home-category-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-feature">
        <span className="home-feature-symbol" aria-hidden="true">
          ﷺ
        </span>

        <div>
          <p className="home-tagline">LOVE & DEVOTION</p>
          <h2>Darood-o-Salam</h2>
          <p>Adab, aqeedat aur mohabbat ka khoobsurat izhaar.</p>
        </div>

        <Link href="/salam" className="home-feature-link">
          Explore →
        </Link>
      </section>

      <footer className="home-footer">
        <Link href="/" className="home-footer-brand">
          ۞ Islamic Kalam
        </Link>

        <div className="home-footer-links">
          {categories.map((category) => (
            <Link href={category.href} key={category.href}>
              {category.name}
            </Link>
          ))}
        </div>

        <p>Alfaaz mein aqeedat, dilon mein mohabbat.</p>

        <small>© {new Date().getFullYear()} Islamic Kalam</small>
      </footer>
    </main>
  );
}
