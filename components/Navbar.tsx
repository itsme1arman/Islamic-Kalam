"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Naat", href: "/naat" },
    { name: "Salam", href: "/salam" },
    { name: "Manqabat", href: "/manqabat" },
    { name: "Hamd", href: "/hamd" },
    { name: "Biography", href: "/biography" },
  ];

  return (
    <header className="site-header">
      <nav className="navbar container">
        <Link
          href="/"
          className="brand"
          onClick={() => setMenuOpen(false)}
        >
          <span className="brand-mark">إ</span>
          <span>Islamic Kalam</span>
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
