import Link from "next/link";

const categories = [
  {
    title: "Naat Sharif",
    subtitle: "Ishq-e-Rasool ﷺ",
    description: "Aaqa ﷺ ki shaan mein khoobsurat kalaam",
    href: "/naat",
    number: "01",
    symbol: "۞",
  },
  {
    title: "Salam",
    subtitle: "Adab-o-Mohabbat",
    description: "Bargah-e-Risalat ﷺ mein nazrana-e-aqeedat",
    href: "/salam",
    number: "02",
    symbol: "۞",
  },
  {
    title: "Manqabat",
    subtitle: "Madaah-e-Auliya",
    description: "Buzurgan-e-Deen ki shaan mein kalaam",
    href: "/manqabat",
    number: "03",
    symbol: "۞",
  },
  {
    title: "Hamd Sharif",
    subtitle: "Hamd-e-Baari Ta'ala",
    description: "Allah Ta'ala ki hamd-o-sana",
    href: "/hamd",
    number: "04",
    symbol: "۞",
  },
  {
    title: "Islami Biography",
    subtitle: "Seerat-o-Tareekh",
    description: "Islami shakhsiyat aur unki zindagi",
    href: "/biography",
    number: "05",
    symbol: "۞",
  },
];

export default function HomePage() {
  return (
    <main className="home-page">
      {/* BISMILLAH — ORIGINAL DESIGN PRESERVED */}
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

      {/* WELCOME */}
      <section className="home-welcome">
        <span className="home-eyebrow">A WORLD OF ISLAMIC KALAAM</span>

        <h2>
          Alfaaz-e-Aqeedat,
          <br />
          <span>Ehsaas-e-Mohabbat.</span>
        </h2>

        <p>
          Naat, Salam, Manqabat aur Hamd ka ek khoobsurat majmua.
          Apne pasandeeda kalaam padhein aur roohani sukoon paayein.
        </p>

        <a className="home-primary-button" href="#categories">
          Explore Kalaam <span aria-hidden="true">↗</span>
        </a>
      </section>

      {/* CATEGORIES */}
      <section className="home-categories" id="categories">
        <div className="home-section-heading">
          <div>
            <span className="home-eyebrow">EXPLORE OUR COLLECTION</span>
            <h2>Discover Kalaam</h2>
          </div>

          <span className="home-heading-mark" aria-hidden="true">
            ✳
          </span>
        </div>

        <div className="home-category-grid">
          {categories.map((category) => (
            <Link
              href={category.href}
              className="home-category-card"
              key={category.href}
            >
              <div className="home-card-top">
                <span className="home-card-number">
                  {category.number}
                </span>
                <span className="home-card-symbol" aria-hidden="true">
                  {category.symbol}
                </span>
              </div>

              <div className="home-card-content">
                <span className="home-card-subtitle">
                  {category.subtitle}
                </span>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>

              <div className="home-card-bottom">
                <span>Explore collection</span>
                <span className="home-card-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED QUOTE */}
      <section className="home-quote">
        <span className="home-quote-ornament" aria-hidden="true">
          ۞
        </span>

        <p lang="ar" dir="rtl" className="home-quote-arabic">
          صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ
        </p>

        <h2>Darood-o-Salam</h2>

        <p className="home-quote-description">
          Zikr, adab aur mohabbat se apne dil ko roshan karein.
        </p>

        <Link href="/salam" className="home-text-link">
          Explore Salam <span aria-hidden="true">→</span>
        </Link>
      </section>

      {/* BIOGRAPHY */}
      <section className="home-biography">
        <div className="home-bio-emblem" aria-hidden="true">
          <span>۞</span>
          <i>عِلْم</i>
          <span>۞</span>
        </div>

        <div className="home-bio-content">
          <span className="home-eyebrow">KNOW THE LEGACY</span>
          <h2>
            Stories that
            <br />
            <span>inspire generations.</span>
          </h2>
          <p>
            Islami buzurgon, ulama aur mashhoor shakhsiyat ki zindagi
            aur unke ilm-o-amal ke baare mein padhein.
          </p>

          <Link href="/biography" className="home-text-link">
            Explore biographies <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="home-footer">
        <div className="home-footer-brand">
          <span className="home-footer-symbol" aria-hidden="true">
            ۞
          </span>
          <span>ISLAMIC KALAAM</span>
        </div>

        <p>
          Alfaaz mein aqeedat, dilon mein mohabbat.
        </p>

        <div className="home-footer-links">
          <Link href="/naat">Naat</Link>
          <Link href="/salam">Salam</Link>
          <Link href="/manqabat">Manqabat</Link>
          <Link href="/hamd">Hamd</Link>
          <Link href="/biography">Biography</Link>
        </div>

        <div className="home-footer-bottom">
          <span>© {new Date().getFullYear()} Islamic Kalaam</span>
          <span>Made with respect & devotion</span>
        </div>
      </footer>
    </main>
  );
}
