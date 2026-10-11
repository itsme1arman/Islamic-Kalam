import Link from "next/link";
import { hamds } from "@/data/hamd";

export default function HamdPage() {
  return (
    <main className="container">
      <section className="page-head">
        <h1>Hamd</h1>
        <p>A collection of Hamd in praise of Allah ﷻ</p>
      </section>

      <section className="kalam-section">
        <div className="kalam-grid">
          {hamds.map((kalam) => (
            <article className="kalam-card" key={kalam.id}>
              <h2>{kalam.title}</h2>
              <p>Poet: {kalam.poet}</p>

              <p className="kalam-preview">
                {kalam.lyrics.roman.split("\n")[0]}
              </p>

              <Link
                className="read-more"
                href={`/hamd/${kalam.id}`}
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
