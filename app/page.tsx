export default function HomePage() {
  return (
    <main className="luxury-home">
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
    </main>
  );
}
