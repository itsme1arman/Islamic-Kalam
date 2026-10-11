"use client";

import Link from "next/link";
import { useState } from "react";

const categories = [
  {
    name: "Naat Sharif",
    href: "/naat",
    symbol: "نعت",
    description: "Ishq-e-Rasool ﷺ",
  },
  {
    name: "Salam",
    href: "/salam",
    symbol: "سلام",
    description: "Adab aur aqeedat",
  },
  {
    name: "Manqabat",
    href: "/manqabat",
    symbol: "منقبت",
    description: "Auliya ki shaan",
  },
  {
    name: "Hamd",
    href: "/hamd",
    symbol: "حمد",
    description: "Allah ki hamd",
  },
  {
    name: "Biography",
    href: "/biography",
    symbol: "سیرت",
    description: "Islami tareekh",
  },
];

const popularSearches = [
  "Naat Sharif",
  "Ya Nabi Salam Alaika",
  "Hamd",
  "Manqabat",
];

export default function HomePage() {
  const [search, setSearch] = useState("");

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const query = search.trim();

    if (!query) return;

    window.location.href = `/naat?search=${encodeURIComponent(query)}`;
  }

  function searchPopular(term: string) {
    setSearch(term);
    window.location.href = `/naat?search=${encodeURIComponent(term)}`;
  }

  return (
    <main className="home-page">
      {/* BISMILLAH HERO */}

      <section className="luxury-home">
        <div className="luxury-frame">
          <span className="ornament ornament-top" aria-hidden="true">
            ✦
          </span>

          <div className="bismillah-content">
            <span
              className="arabic-overline allah-name"
              lang="ar"
              dir="rtl"
            >
              الله
            </span>

            <h1
              className="bismillah-title"
              lang="ar"
              dir="rtl"
            >
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </h1>

            <div className="gold-divider" aria-hidden="true">
              <span />
              <i>✦</i>
              <span />
            </div>
          </div>

          <span className="ornament ornament-bottom" aria-hidden="true">
            ✦
          </span>
        </div>
      </section>

      {/* SEARCH SECTION */}

      <section className="home-search-section">
        <p className="home-tagline">
          ISLAMIC KALAAM COLLECTION
        </p>

        <h2>
          Find Your Favourite <span>Kalaam</span>
        </h2>

        <form
          className="home-search"
          onSubmit={handleSearch}
          role="search"
        >
          <span aria-hidden="true">⌕</span>

          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search Naat, Salam, Manqabat..."
            aria-label="Search Islamic Kalam"
          />

          {search && (
            <button
              type="button"
              className="home-search-clear"
              onClick={() => setSearch("")}
              aria-label="Clear search"
            >
              ×
            </button>
          )}

          <button type="submit">
            Search
          </button>
        </form>

        <p className="home-search-note">
          Explore Naat, Salam, Manqabat, Hamd aur Islami Seerat
        </p>

        <div className="home-popular-searches">
          <span>Popular:</span>

          {popularSearches.map((term) => (
            <button
              key={term}
              type="button"
              onClick={() => searchPopular(term)}
            >
              {term}
            </button>
          ))}
        </div>
      </section>

      {/* CATEGORY SECTION */}

      <section
        className="home-categories"
        id="categories"
        aria-labelledby="categories-heading"
      >
        <div className="home-section-heading">
          <div>
            <p className="home-tagline">EXPLORE COLLECTION</p>

            <h2 id="categories-heading">
              Browse Categories
            </h2>
          </div>

          <span
            className="home-section-decoration"
            aria-hidden="true"
          >
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
              <span
                className="home-category-symbol"
                lang="ar"
                dir="rtl"
                aria-hidden="true"
              >
                {category.symbol}
              </span>

              <span className="home-category-name">
                {category.name}
              </span>

              <span className="home-category-description">
                {category.description}
              </span>

              <span
                className="home-category-arrow"
                aria-hidden="true"
              >
                ↗
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED SECTION */}

      <section className="home-feature">
        <div
          className="home-feature-symbol"
          lang="ar"
          dir="rtl"
          aria-hidden="true"
        >
          ﷺ
        </div>

        <div className="home-feature-content">
          <p className="home-tagline">
            LOVE & DEVOTION
          </p>

          <h2>Darood-o-Salam</h2>

          <p>
            Adab, aqeedat aur mohabbat ka khoobsurat izhaar.
          </p>
        </div>

        <Link
          href="/salam"
          className="home-feature-link"
        >
          Explore <span aria-hidden="true">→</span>
        </Link>
      </section>

      {/* FOOTER */}

      <footer className="home-footer">
        <Link
          href="/"
          className="home-footer-brand"
          aria-label="Islamic Kalam home"
        >
          <span aria-hidden="true">۞</span>{" "}
          Islamic Kalam
        </Link>

        <p className="home-footer-description">
          Alfaaz mein aqeedat, dilon mein mohabbat.
        </p>

        <nav
          className="home-footer-links"
          aria-label="Footer navigation"
        >
          {categories.map((category) => (
            <Link
              href={category.href}
              key={category.href}
            >
              {category.name}
            </Link>
          ))}
        </nav>

        <div className="home-footer-divider" aria-hidden="true" />

        <small>
          © {new Date().getFullYear()} Islamic Kalam. All rights reserved.
        </small>
      </footer>
    </main>
  );
              }
