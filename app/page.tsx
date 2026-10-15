"use client";

import Link from "next/link";
import { useState } from "react";

const categories = [
  { number: "01", name: "Naat Sharif", urdu: "نعتِ رسول ﷺ", desc: "Ishq-e-Rasool ﷺ se mehke hue alfaaz", href: "/naat", symbol: "نعت" },
  { number: "02", name: "Manqabat", urdu: "منقبت", desc: "Auliya-e-Kiram ki shaan mein pesh kalaam", href: "/manqabat", symbol: "من" },
  { number: "03", name: "Biography", urdu: "سیرت و حالات", desc: "Buzurgan-e-Deen ki zindagi aur taleemaat", href: "/biography", symbol: "سیر" },
];

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  function search(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = query.trim();
    window.location.href = value
      ? `/naat?search=${encodeURIComponent(value)}`
      : "/naat";
  }

  return (
    <main className="ik-home">
      <header className="ik-header">
        <nav className="ik-nav" aria-label="Main navigation">
          <Link href="/" className="ik-brand" aria-label="Islamic Kalam home">
            <span className="ik-brand-mark" aria-hidden="true">ا</span>
            <span><strong>Islamic Kalam</strong><small>ADAB · AQEEDAT · MOHABBAT</small></span>
          </Link>
          <button className="ik-menu-button" type="button" aria-label="Toggle menu"
            aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "×" : "☰"}
          </button>
          <div className={`ik-nav-links ${menuOpen ? "is-open" : ""}`}>
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/naat" onClick={() => setMenuOpen(false)}>Naat Sharif</Link>
            <Link href="/manqabat" onClick={() => setMenuOpen(false)}>Manqabat</Link>
            <Link href="/biography" onClick={() => setMenuOpen(false)}>Biography</Link>
          </div>
        </nav>
      </header>

      <section className="ik-hero">
        <div className="ik-hero-grid" aria-hidden="true" />
        <div className="ik-hero-inner">
          <div className="ik-hero-copy">
            <p className="ik-kicker"><span /> A COLLECTION OF DEVOTION <span /></p>
            <h1>Alfaaz mein <em>aqeedat.</em><br />Dilon mein mohabbat.</h1>
            <p className="ik-hero-intro">
              Naat-o-Manqabat ke muntakhab kalaam aur buzurgan-e-deen ki
              zindagi se judi maloomat — adab ke saath, ek jagah.
            </p>
            <form className="ik-search" onSubmit={search}>
              <span className="ik-search-icon" aria-hidden="true">⌕</span>
              <input value={query} onChange={(e) => setQuery(e.target.value)}
                placeholder="Naat, Manqabat ya shakhsiyat search karein…" aria-label="Search Islamic Kalam" />
              <button type="submit">Search <span aria-hidden="true">↗</span></button>
            </form>
            <div className="ik-quick-links">
              <span>EXPLORE</span>
              {categories.map((item) => <Link key={item.href} href={item.href}>{item.name}<b>↗</b></Link>)}
            </div>
          </div>
          <div className="ik-hero-art" aria-label="Arabic calligraphy">
            <div className="ik-art-ring ik-ring-one" />
            <div className="ik-art-ring ik-ring-two" />
            <span className="ik-art-star">✳</span>
            <p lang="ar" dir="rtl">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
            <span className="ik-art-rule" />
            <small lang="ar" dir="rtl">أَدَب · مَحَبَّة · عَقِيدَة</small>
          </div>
        </div>
        <div className="ik-hero-foot"><span>ILM</span><i>✳</i><span>ADAB</span><i>✳</i><span>MOHABBAT</span></div>
      </section>

      <section className="ik-collections ik-container">
        <div className="ik-section-head">
          <div><p className="ik-label">THE COLLECTION</p><h2>Discover the words<br />that <em>move the heart.</em></h2></div>
          <p>Teen categories. Ek roohani safar.</p>
        </div>
        <div className="ik-category-grid">
          {categories.map((item) => (
            <Link className="ik-category" href={item.href} key={item.href}>
              <div className="ik-card-top"><span>{item.number}</span><span className="ik-card-arrow">↗</span></div>
              <span className="ik-card-symbol" lang="ur" dir="rtl">{item.symbol}</span>
              <h3>{item.name}</h3>
              <p className="ik-urdu" lang="ur" dir="rtl">{item.urdu}</p>
              <p className="ik-card-desc">{item.desc}</p>
              <span className="ik-card-link">Explore collection <b>→</b></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="ik-featured">
        <div className="ik-featured-inner">
          <div className="ik-featured-copy">
            <p className="ik-label">SELECTED KALAAM</p>
            <h2>Words of love.<br /><em>Written with reverence.</em></h2>
            <p>Adab se parhein, mehsoos karein aur is khoobsurat riwayat se judein.</p>
            <Link href="/naat" className="ik-under-link">Browse Naat Sharif <span>↗</span></Link>
          </div>
          <article className="ik-feature-card">
            <div className="ik-feature-meta"><span>NAAT SHARIF</span><span lang="ar">ﷺ</span></div>
            <p className="ik-arabic" lang="ar" dir="rtl">يَا رَسُولَ اللَّهِ سَلَامٌ عَلَيْكَ</p>
            <div className="ik-divider"><i />✳<i /></div>
            <h3>Explore the beauty of Naat Sharif</h3>
            <p className="ik-feature-desc">Muntakhab kalaam aur unke alfaaz ka majmua.</p>
            <Link href="/naat" className="ik-feature-action">Naat collection dekhein <span>↗</span></Link>
          </article>
        </div>
      </section>

      <section className="ik-bottom-cta ik-container">
        <div className="ik-cta-seal" aria-hidden="true">ا</div>
        <div className="ik-cta-copy"><p className="ik-label">ADAB · AQEEDAT · MOHABBAT</p>
          <h2>Har kalaam mein ek <em>ehsaas.</em></h2>
          <p>Naat, Manqabat aur seerat ka safar yahin se shuru karein.</p>
        </div>
        <Link href="/naat" className="ik-cta-button">Explore Kalam <span>↗</span></Link>
      </section>

      <footer className="ik-footer">
        <div className="ik-footer-main ik-container">
          <Link href="/" className="ik-footer-brand"><span>ا</span><div><strong>Islamic Kalam</strong><small>Alfaaz mein aqeedat, dilon mein mohabbat.</small></div></Link>
          <div className="ik-footer-group"><b>EXPLORE</b><Link href="/naat">Naat Sharif</Link><Link href="/manqabat">Manqabat</Link><Link href="/biography">Biography</Link></div>
          <div className="ik-footer-group"><b>OUR PURPOSE</b><span>Adab</span><span>Aqeedat</span><span>Mohabbat</span></div>
        </div>
        <div className="ik-footer-bottom"><span>© {new Date().getFullYear()} Islamic Kalam</span><span>Made with respect and care.</span></div>
      </footer>
    </main>
  );
}
