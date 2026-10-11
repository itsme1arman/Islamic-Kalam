import Link from "next/link";
import { salams } from "@/data/salam";

export default function SalamPage() {
  return (
    <main className="container">
      <section className="page-head">
        <h1>Salam</h1>
        <p>A collection of Salam in praise of the Prophet ﷺ</p>
      </section>

      <section className="kalam-section">
        <div className="kalam-grid">
          {salams.map((kalam) => (
            <article className="kalam-card" key={kalam.id}>
              <h2>{kalam.title}</h2>
              <p>Poet: {kalam.poet}</p>

              <p className="kalam-preview">
                {kalam.lyrics.roman.split("\n")[0]}
              </p>

              <Link
                className="read-more"
                href={`/salam/${kalam.id}`}
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
