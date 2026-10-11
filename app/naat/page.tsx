import Link from "next/link";
import { naats } from "@/data/naat";

export default function NaatPage() {
  return (
    <main className="container">
      <section className="page-head">
        <h1>Naat Sharif</h1>
        <p>Beautiful collection of Naat Sharif</p>
      </section>

      <section className="kalam-section">
        <div className="kalam-grid">
          {naats.map((kalam) => (
            <article className="kalam-card" key={kalam.id}>
              <h2>{kalam.title}</h2>
              <p>Poet: {kalam.poet}</p>

              <p className="kalam-preview">
                {kalam.lyrics.roman.split("\n")[0]}
              </p>

              <Link
                className="read-more"
                href={`/naat/${kalam.id}`}
              >
                Read Kalam →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
