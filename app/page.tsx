"use client";

import { useState } from "react";

const collections = [
  {
    title: "Naat Sharif",
    subtitle: "Nabi ﷺ ki mohabbat aur shaan mein",
    symbol: "☾",
    href: "/naat",
    color: "teal",
  },
  {
    title: "Manqabat",
    subtitle: "Buzurgan-e-deen ki shaan mein",
    symbol: "✧",
    href: "/manqabat",
    color: "green",
  },
  {
    title: "Hamd",
    subtitle: "Allah ki hamd-o-sana ke kalam",
    symbol: "۞",
    href: "/hamd",
    color: "gold",
  },
  {
    title: "Salam",
    subtitle: "Adab aur aqeedat se bhare salam",
    symbol: "❋",
    href: "/salam",
    color: "blue",
  },
];

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredCollections = collections.filter((item) =>
    `${item.title} ${item.subtitle}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="home-page">
      <header className="topbar">
        <a className="brand" href="/">
          <span className="brand-icon">۞</span>
          <span>Islamic Kalam</span>
        </a>

        <nav className="main-nav">
          <a className="nav-active" href="/">Home</a>
          <a href="/naat">Naat</a>
          <a href="/salam">Salam</a>
          <a href="/manqabat">Manqabat</a>
          <a href="/hamd">Hamd</a>
          <a href="/biography">Biography</a>
        </nav>

        <a className="nav-button" href="/naat">
          Explore Kalam <span>↗</span>
        </a>
      </header>

      <section className="hero">
        <div className="hero-badge">
          <span className="badge-dot" />
          A HOME FOR BEAUTIFUL KALAM
        </div>

        <p className="bismillah">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>

        <h1>
          Islamic <span>Kalam.</span>
        </h1>

        <p className="hero-subtitle">
          Words of love, faith and devotion.
        </p>

        <div className="gold-divider">
          <span />
        </div>

        <p className="hero-description">
          Discover beautiful Naat, Salam, Manqabat and Hamd —
          <br className="desktop-break" />
          a peaceful collection of words that touch the heart.
        </p>

        <a className="hero-button" href="#collections">
          Begin Your Journey <span>→</span>
        </a>

        <form
          className="search-box"
          onSubmit={(event) => {
            event.preventDefault();
            document
              .getElementById("collections")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="search-icon">⌕</span>
          <input
            type="search"
            placeholder="Search Naat, Kalam or category..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            aria-label="Search Kalam"
          />
          <button type="submit" aria-label="Search">
            →
          </button>
        </form>

        <div className="hero-bottom">
          <span>✦</span> Adab <i /> Love <i /> Spirituality <span>✦</span>
        </div>
      </section>

      <section className="collections-section" id="collections">
        <div className="section-heading">
          <div>
            <p className="section-eyebrow">EXPLORE OUR LIBRARY</p>
            <h2>Collections <span>.</span></h2>
            <p className="section-description">
              Find the kalam your heart is looking for.
            </p>
          </div>

          <a href="/naat" className="view-all">
            View library <span>↗</span>
          </a>
        </div>

        <div className="collections-grid">
          {filteredCollections.map((item) => (
            <a
              className={`collection-card ${item.color}`}
              href={item.href}
              key={item.title}
            >
              <div className="collection-top">
                <span className="collection-symbol">{item.symbol}</span>
                <span className="collection-arrow">↗</span>
              </div>

              <div>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>

              <span className="collection-link">
                Explore collection <span>→</span>
              </span>
            </a>
          ))}
        </div>

        {filteredCollections.length === 0 && (
          <div className="no-results">
            <span>⌕</span>
            <h3>No collection found</h3>
            <p>Try searching for Naat, Salam, Manqabat or Hamd.</p>
          </div>
        )}
      </section>

      <footer className="home-footer">
        <a className="footer-brand" href="/">
          <span>۞</span> Islamic Kalam
        </a>
        <p>Created with love, respect and devotion.</p>
        <div className="footer-links">
          <a href="/naat">Naat</a>
          <a href="/salam">Salam</a>
          <a href="/manqabat">Manqabat</a>
          <a href="/hamd">Hamd</a>
          <a href="/biography">Biography</a>
        </div>
        <small>© {new Date().getFullYear()} Islamic Kalam</small>
      </footer>
    </main>
  );
}
