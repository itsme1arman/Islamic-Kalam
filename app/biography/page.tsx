import { biographies } from "@/data/biographies";

export default function BiographyPage() {
  return (
    <main className="container">
      <section className="page-head">
        <h1>Islamic Biographies</h1>
        <p>Learn about renowned Islamic scholars and poets.</p>
      </section>

      <section className="kalam-section">
        <div className="kalam-grid">
          {biographies.map((person) => (
            <article className="kalam-card" key={person.id}>
              <h2>{person.name}</h2>

              <p>Birth: {person.birth}</p>
              <p>Death: {person.death}</p>

              <div className="biography-text">
                <h3>Roman Urdu</h3>
                <p>{person.roman}</p>

                <h3>اردو</h3>
                <p lang="ur" dir="rtl">{person.urdu}</p>

                <h3>हिन्दी</h3>
                <p lang="hi">{person.hindi}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
