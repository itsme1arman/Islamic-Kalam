"use client";

import { useState } from "react";
import Link from "next/link";
import { naats } from "@/data/naat";
import { salams } from "@/data/salam";
import { manqabats } from "@/data/manqabat";
import { hamds } from "@/data/hamd";

const allKalams = [
  ...naats,
  ...salams,
  ...manqabats,
  ...hamds,
];

export default function Home() {
  const [search, setSearch] = useState("");

  const results = allKalams.filter((kalam) =>
    `${kalam.title} ${kalam.poet} ${kalam.lyrics.roman}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="container">
      <section className="hero">
        <p className="bismillah">﷽</p>

        <h1>Islamic Kalam</h1>

        <p className="hero-subtitle">
          A beautiful collection of Naat, Manqabat, Hamd and Salam
        </p>

        <input
          className="search-input"
          type="search"
          placeholder="Search Kalam or poet..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          aria-label="Search Kalam or poet"
        />
      </section>

      {search.trim() !== "" && (
        <section className="kalam-section">
          <h2>Search Results</h2>

          {results.length === 0 ? (
            <p>No Kalam found.</p>
          ) : (
            <div className="kalam-grid">
              {results.map((kalam, index) => (
                <article className="kalam-card" key={`${kalam.id}-${index}`}>
                  <h3>{kalam.title}</h3>
                  <p>{kalam.poet}</p>
                  <p>{kalam.category}</p>
                </article>
              ))}
            </div>
          )}
        </section>
      )}

      <section className="kalam-section">
        <h2>Explore Categories</h2>

        <div className="category-grid">
          <Link href="/naat" className="category-card">Naat</Link>
          <Link href="/salam" className="category-card">Salam</Link>
          <Link href="/manqabat" className="category-card">Manqabat</Link>
          <Link href="/hamd" className="category-card">Hamd</Link>
          <Link href="/biography" className="category-card">Biography</Link>
        </div>
      </section>
    </main>
  );
}
