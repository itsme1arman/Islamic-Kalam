import Link from "next/link";

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar container">
        <Link href="/" className="brand">
          Islamic Kalam
        </Link>

        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/naat">Naat</Link>
          <Link href="/salam">Salam</Link>
          <Link href="/manqabat">Manqabat</Link>
          <Link href="/hamd">Hamd</Link>
          <Link href="/biography">Biography</Link>
        </div>
      </nav>
    </header>
  );
}
