import Link from "next/link";
import { manqabats } from "@/data/manqabat";

export default function ManqabatPage() {
  return (
    <main className="container">
      <section className="page-head">
        <h1>Manqabat</h1>
        <p>A collection of Manqabat Kalam</p>
      </section>

      <section className="kalam-section">
        <div className="kalam-grid">
          {manqabats.map((kalam) => (
            <article className="kalam-card" key={kalam.id}>
              <h2>{kalam.title}</h2>
              <p>Poet: {kalam.poet}</p>

              <p className="kalam-preview">
                {kalam.lyrics.roman.split("\n")[0]}
              </p>

              <Link
                className="read-more"
                href={`/manqabat/${kalam.id}`}
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
