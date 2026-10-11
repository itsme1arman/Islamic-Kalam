"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./home.module.css";

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
    <main className={styles.home}>
      <header className={styles.header}>
        <Link href="/" className={styles.brand}>
          <span className={styles.brandIcon}>۞</span>
          <span>Islamic Kalam</span>
        </Link>

        <nav className={styles.nav}>
          <a href="#quran">Quran</a>
          <a href="#kalaam">Kalaam</a>
          <a href="#resources">Learn</a>
        </nav>
      </header>

      <section className={styles.welcome}>
        <p className={styles.bismillah} lang="ar" dir="rtl">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>

        <h1>Your journey with the Quran and Kalaam</h1>

        <p className={styles.subtitle}>
          Quran padhein, pasandeeda Kalaam dhoondein aur deeni ilm explore
          karein.
        </p>

        <form className={styles.search} onSubmit={search}>
          <span aria-hidden="true">⌕</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Quran, Naat, Hamd..."
            aria-label="Search Islamic content"
          />
          <button type="submit">Search</button>
        </form>

        <div className={styles.quickLinks}>
          <span>Popular:</span>
          <a href="#quran">Quran</a>
          <a href="#kalaam">Naat Sharif</a>
          <a href="#resources">Islamic Learning</a>
        </div>
      </section>

      <section className={styles.verse} id="quran">
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.label}>PAUSE AND REFLECT</span>
            <h2>Verse of the Day</h2>
          </div>
          <span className={styles.verseNumber}>94:5</span>
        </div>

        <p className={styles.arabic} lang="ar" dir="rtl">
          فَإِنَّ مَعَ الْعُسْرِ يُسْرًا
        </p>

        <p className={styles.translation}>
          “Beshak mushkil ke saath aasani hai.”
        </p>

        <a
          className={styles.textLink}
          href="https://quran.com/94/5"
          target="_blank"
          rel="noreferrer"
        >
          Read on Quran.com ↗
        </a>
      </section>

      <section className={styles.collection} id="kalaam">
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.label}>DISCOVER</span>
            <h2>Explore Kalaam</h2>
          </div>
          <Link href="/naat" className={styles.textLink}>
            View all ↗
          </Link>
        </div>

        <div className={styles.categoryGrid}>
          {categories.map((category) => (
            <Link
              href={category.href}
              className={styles.category}
              key={category.href}
            >
              <span className={styles.categoryArabic} lang="ar" dir="rtl">
                {category.arabic}
              </span>
              <span>{category.title}</span>
              <span className={styles.arrow}>↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.resources} id="resources">
        <div>
          <span className={styles.label}>CONTINUE LEARNING</span>
          <h2>Explore more Islamic resources</h2>
          <p>
            Quran ki tilawat, deeni study aur apne ilm ko badhane ke liye
            useful resources.
          </p>
        </div>

        <div className={styles.resourceList}>
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

      <footer className={styles.footer}>
        <Link href="/" className={styles.brand}>
          <span className={styles.brandIcon}>۞</span>
          <span>Islamic Kalam</span>
        </Link>

        <p>Ilm se roshni, alfaaz se aqeedat.</p>

        <small>© {new Date().getFullYear()} Islamic Kalam</small>
      </footer>
    </main>
  );
}
