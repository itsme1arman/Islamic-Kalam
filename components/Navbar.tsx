import Link from "next/link";

export default function Navbar() {
  return (
    <header className="nav">
      <Link href="/" className="brand">
        ✦ Islamic Kalam
      </Link>

      <nav>
        <Link href="/naat">Naat</Link>
        <Link href="/manqabat">Manqabat</Link>
        <Link href="/hamd">Hamd</Link>
        <Link href="/biography">Biographies</Link>
      </nav>
    </header>
  );
}
