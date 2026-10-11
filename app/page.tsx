"use client";

import Link from "next/link";
import { useState } from "react";

const categories = [
  { title: "Naat Sharif", arabic: "نعت", href: "/naat" },
  { title: "Salam", arabic: "سلام", href: "/salam" },
  { title: "Manqabat", arabic: "منقبت", href: "/manqabat" },
  { title: "Hamd", arabic: "حمد", href: "/hamd" },
  { title: "Seerat", arabic: "سیرت", href: "/biography" },
];

export default function HomePage() {
  const [query, setQuery] = useState("");

  function search(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (query.trim()) {
      window.location.href = `/naat?search=${encodeURIComponent(
        query.trim()
      )}`;
    }
  }

  return (
    <main className="home">
      <header className="header">
        <Link href="/" className="brand">
          <span className="brandIcon">۞</span>
          <span>Islamic Kalam</span>
        </Link>

        <nav className="nav">
          <a href="#quran">Quran</a>
          <a href="#kalaam">Kalaam</a>
          <a href="#resources">Learn</a>
        </nav>
      </header>

      <section className="welcome">
        <p className="bismillah" lang="ar" dir="rtl">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>

        <h1>Your journey with the Quran and Kalaam</h1>

        <p className="subtitle">
          Quran padhein, pasandeeda Kalaam dhoondein aur deeni ilm explore
          karein.
        </p>

        <form className="search" onSubmit={search}>
          <span aria-hidden="true">⌕</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Quran, Naat, Hamd..."
            aria-label="Search Islamic content"
          />
          <button type="submit">Search</button>
        </form>

        <div className="quickLinks">
          <span>Popular:</span>
          <a href="#quran">Quran</a>
          <a href="#kalaam">Naat Sharif</a>
          <a href="#resources">Islamic Learning</a>
        </div>
      </section>

      <section className="verse" id="quran">
        <div className="sectionHeader">
          <div>
            <span className="label">PAUSE AND REFLECT</span>
            <h2>Verse of the Day</h2>
          </div>
          <span className="verseNumber">94:5</span>
        </div>

        <p className="arabic" lang="ar" dir="rtl">
          فَإِنَّ مَعَ الْعُسْرِ يُسْرًا
        </p>

        <p className="translation">
          “Beshak mushkil ke saath aasani hai.”
        </p>

        <a
          className="textLink"
          href="https://quran.com/94/5"
          target="_blank"
          rel="noreferrer"
        >
          Read on Quran.com ↗
        </a>
      </section>

      <section className="collection" id="kalaam">
        <div className="sectionHeader">
          <div>
            <span className="label">DISCOVER</span>
            <h2>Explore Kalaam</h2>
          </div>
          <Link href="/naat" className="textLink">
            View all ↗
          </Link>
        </div>

        <div className="categoryGrid">
          {categories.map((category) => (
            <Link
              href={category.href}
              className="category"
              key={category.href}
            >
              <span className="categoryArabic" lang="ar" dir="rtl">
                {category.arabic}
              </span>
              <span>{category.title}</span>
              <span className="arrow">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="resources" id="resources">
        <div>
          <span className="label">CONTINUE LEARNING</span>
          <h2>Explore more Islamic resources</h2>
          <p>
            Quran ki tilawat, deeni study aur apne ilm ko badhane ke liye
            useful resources.
          </p>
        </div>

        <div className="resourceList">
          <a href="https://quran.com" target="_blank" rel="noreferrer">
            <span>Quran.com</span>
            <span>Read the Quran ↗</span>
          </a>

          <a href="https://qirtaas.io" target="_blank" rel="noreferrer">
            <span>Qirtaas</span>
            <span>Explore study tools ↗</span>
          </a>

          <a href="https://tazkiya.chat" target="_blank" rel="noreferrer">
            <span>Tazkiya</span>
            <span>Explore learning ↗</span>
          </a>
        </div>
      </section>

      <footer className="footer">
        <Link href="/" className="brand">
          <span className="brandIcon">۞</span>
          <span>Islamic Kalam</span>
        </Link>

        <p>Ilm se roshni, alfaaz se aqeedat.</p>

        <small>© {new Date().getFullYear()} Islamic Kalam</small>
      </footer>
    </main>
  );
}
