import Link from "next/link";

export default function Footer() {
  return (
    <footer className="ik-footer">
      <div className="ik-footer-main">

        {/* Brand */}
        <div className="ik-footer-brand">
          <Link href="/" className="ik-footer-logo">
            <span className="ik-footer-icon">☾</span>

            <span>Islamic Kalam</span>
          </Link>

          <p className="ik-footer-description">
            Naat Sharif, Manqabat aur buzurgan-e-deen ki
            zindagi se judi maloomat ka ek majmua.
            Mohabbat, adab aur ilm ke saath.
          </p>

          <div className="ik-footer-motto">
            <span>✦</span>
            <span>Ilm se roshni · Kalam se mohabbat</span>
            <span>✦</span>
          </div>
        </div>

        {/* Explore */}
        <div className="ik-footer-column">
          <h3>Explore</h3>

          <Link href="/">Home</Link>
          <Link href="/naat">Naat Sharif</Link>
          <Link href="/manqabat">Manqabat</Link>
          <Link href="/biography">Islamic Personalities</Link>
        </div>

        {/* Information */}
        <div className="ik-footer-column">
          <h3>Information</h3>

          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/disclaimer">Disclaimer</Link>
          <Link href="/terms">Terms & Conditions</Link>
        </div>

        {/* Purpose */}
        <div className="ik-footer-column ik-footer-purpose">
          <h3>Our Purpose</h3>

          <p>
            Hamara maqsad Islamic kalaam aur deeni shakhsiyat
            se mutalliq maloomat ko aasaan aur munazzam andaaz
            mein pesh karna hai.
          </p>

          <Link href="/about" className="ik-footer-about-button">
            Know More <span>→</span>
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="ik-footer-bottom">
        <p>
          © {new Date().getFullYear()} Islamic Kalam.
          All rights reserved.
        </p>

        <p className="ik-footer-credit">
          Made with <span>♥</span> for the love of Kalam
        </p>
      </div>
    </footer>
  );
}
