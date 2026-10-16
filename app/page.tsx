"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

const categories = [
  { title: "Naat Sharif", urdu: "نعت شریف", href: "/naat", icon: "۞" },
  { title: "Manqabat", urdu: "منقبت", href: "/manqabat", icon: "✧" },
  { title: "Hamd", urdu: "حمد", href: "/hamd", icon: "☾" },
  { title: "Salam", urdu: "سلام", href: "/salam", icon: "❋" },
  {
    title: "Biography",
    urdu: "سوانح حیات",
    href: "/biography",
    icon: "✦",
  },
];

export default function HomePage() {
  const [search, setSearch] = useState("");

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const query = search.trim();
    if (!query) return;

    window.location.href = `/naat?search=${encodeURIComponent(query)}`;
  }

  return (
    <div className="ik-site">
      <section className="ik-hero">
        <div className="ik-hero-decoration ik-decoration-left" />
        <div className="ik-hero-decoration ik-decoration-right" />

        <div className="ik-hero-content">
          <div className="ik-badge">
            <span>✦</span>
            ADAB · AQEEDAT · MOHABBAT
            <span>✦</span>
          </div>

          <p className="ik-bismillah" lang="ar" dir="rtl">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>

          <h1>
            Alfaaz jo dil ko
            <br />
            chhoo jaayein,
            <br />
            <em>aqeedat jo rooh ko</em>
            <br />
            roshan kare.
          </h1>

          <p className="ik-description">
            Naat Sharif, Manqabat, Hamd, Salam aur buzurgan-e-deen ki
            zindagi ka muntakhab majmua — mohabbat aur adab ke saath.
          </p>

          <div className="ik-actions">
            <Link href="/naat" className="ik-button ik-primary">
              Explore Kalam <span aria-hidden="true">↗</span>
            </Link>

            <Link href="/biography" className="ik-button ik-outline">
              Read Biography <span aria-hidden="true">→</span>
            </Link>
          </div>

          <form className="ik-search" onSubmit={handleSearch}>
            <span className="ik-search-icon" aria-hidden="true">
              ⌕
            </span>

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Naat, Manqabat ya naam search karein..."
              aria-label="Search Islamic Kalam"
            />

            <button type="submit">Search ↗</button>
          </form>

          <div className="ik-hero-note">
            <span />
            <p>Ilm se roshni</p>
            <b>·</b>
            <p>Kalam se mohabbat</p>
            <b>·</b>
            <p>Adab ke saath</p>
            <span />
          </div>
        </div>
      </section>

      <section className="ik-stats" aria-label="Website highlights">
        <div className="ik-stat">
          <strong>5</strong>
          <span>KALAM CATEGORIES</span>
        </div>

        <div className="ik-stat">
          <strong>∞</strong>
          <span>ISHQ-O-MOHABBAT</span>
        </div>

        <div className="ik-stat">
          <strong>1</strong>
          <span>ADAB KI PEHCHAAN</span>
        </div>
      </section>

      <section className="ik-categories">
        <div className="ik-section-heading">
          <span className="ik-label">OUR COLLECTION</span>
          <h2>
            Kalam ki <em>duniya</em>
          </h2>
          <p>
            Apni pasand ka kalam chunein aur aqeedat ke is safar ka hissa
            banein.
          </p>
        </div>

        <div className="ik-card-grid">
          {categories.map((category, index) => (
            <Link
              href={category.href}
              className="ik-card"
              key={category.title}
            >
              <div className="ik-card-top">
                <span>0{index + 1}</span>
                <span className="ik-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>

              <div className="ik-medallion" aria-hidden="true">
                {category.icon}
              </div>

              <h3>{category.title}</h3>
              <p className="ik-urdu" lang="ur" dir="rtl">
                {category.urdu
