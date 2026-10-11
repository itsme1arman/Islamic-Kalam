"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const surahs = [
  { id: 1, name: "Al-Fatihah", meaning: "The Opener", arabic: "الفاتحة", ayahs: 7 },
  { id: 2, name: "Al-Baqarah", meaning: "The Cow", arabic: "البقرة", ayahs: 286 },
  { id: 3, name: "Ali 'Imran", meaning: "Family of Imran", arabic: "آل عمران", ayahs: 200 },
  { id: 4, name: "An-Nisa", meaning: "The Women", arabic: "النساء", ayahs: 176 },
  { id: 5, name: "Al-Ma'idah", meaning: "The Table Spread", arabic: "المائدة", ayahs: 120 },
  { id: 6, name: "Al-An'am", meaning: "The Cattle", arabic: "الأنعام", ayahs: 165 },
  { id: 7, name: "Al-A'raf", meaning: "The Heights", arabic: "الأعراف", ayahs: 206 },
  { id: 8, name: "Al-Anfal", meaning: "The Spoils of War", arabic: "الأنفال", ayahs: 75 },
  { id: 9, name: "At-Tawbah", meaning: "The Repentance", arabic: "التوبة", ayahs: 129 },
  { id: 10, name: "Yunus", meaning: "Jonah", arabic: "يونس", ayahs: 109 },
  { id: 11, name: "Hud", meaning: "Hud", arabic: "هود", ayahs: 123 },
  { id: 12, name: "Yusuf", meaning: "Joseph", arabic: "يوسف", ayahs: 111 },
  { id: 13, name: "Ar-Ra'd", meaning: "The Thunder", arabic: "الرعد", ayahs: 43 },
  { id: 14, name: "Ibrahim", meaning: "Abraham", arabic: "إبراهيم", ayahs: 52 },
  { id: 15, name: "Al-Hijr", meaning: "The Rocky Tract", arabic: "الحجر", ayahs: 99 },
  { id: 16, name: "An-Nahl", meaning: "The Bee", arabic: "النحل", ayahs: 128 },
  { id: 17, name: "Al-Isra", meaning: "The Night Journey", arabic: "الإسراء", ayahs: 111 },
  { id: 18, name: "Al-Kahf", meaning: "The Cave", arabic: "الكهف", ayahs: 110 },
  { id: 19, name: "Maryam", meaning: "Mary", arabic: "مريم", ayahs: 98 },
  { id: 20, name: "Taha", meaning: "Ta-Ha", arabic: "طه", ayahs: 135 },
  { id: 21, name: "Al-Anbiya", meaning: "The Prophets", arabic: "الأنبياء", ayahs: 112 },
  { id: 22, name: "Al-Hajj", meaning: "The Pilgrimage", arabic: "الحج", ayahs: 78 },
  { id: 23, name: "Al-Mu'minun", meaning: "The Believers", arabic: "المؤمنون", ayahs: 118 },
  { id: 24, name: "An-Nur", meaning: "The Light", arabic: "النور", ayahs: 64 },
  { id: 25, name: "Al-Furqan", meaning: "The Criterion", arabic: "الفرقان", ayahs: 77 },
  { id: 26, name: "Ash-Shu'ara", meaning: "The Poets", arabic: "الشعراء", ayahs: 227 },
  { id: 27, name: "An-Naml", meaning: "The Ant", arabic: "النمل", ayahs: 93 },
  { id: 28, name: "Al-Qasas", meaning: "The Stories", arabic: "القصص", ayahs: 88 },
  { id: 29, name: "Al-'Ankabut", meaning: "The Spider", arabic: "العنكبوت", ayahs: 69 },
  { id: 30, name: "Ar-Rum", meaning: "The Romans", arabic: "الروم", ayahs: 60 },
  { id: 31, name: "Luqman", meaning: "Luqman", arabic: "لقمان", ayahs: 34 },
  { id: 32, name: "As-Sajdah", meaning: "The Prostration", arabic: "السجدة", ayahs: 30 },
  { id: 33, name: "Al-Ahzab", meaning: "The Combined Forces", arabic: "الأحزاب", ayahs: 73 },
  { id: 34, name: "Saba", meaning: "Sheba", arabic: "سبأ", ayahs: 54 },
  { id: 35, name: "Fatir", meaning: "The Originator", arabic: "فاطر", ayahs: 45 },
  { id: 36, name: "Ya-Sin", meaning: "Ya-Sin", arabic: "يس", ayahs: 83 },
  { id: 37, name: "As-Saffat", meaning: "Those Who Set the Ranks", arabic: "الصافات", ayahs: 182 },
  { id: 38, name: "Sad", meaning: "Sad", arabic: "ص", ayahs: 88 },
  { id: 39, name: "Az-Zumar", meaning: "The Troops", arabic: "الزمر", ayahs: 75 },
  { id: 40, name: "Ghafir", meaning: "The Forgiver", arabic: "غافر", ayahs: 85 },
  { id: 41, name: "Fussilat", meaning: "Explained in Detail", arabic: "فصلت", ayahs: 54 },
  { id: 42, name: "Ash-Shuraa", meaning: "The Consultation", arabic: "الشورى", ayahs: 53 },
  { id: 43, name: "Az-Zukhruf", meaning: "The Ornaments", arabic: "الزخرف", ayahs: 89 },
  { id: 44, name: "Ad-Dukhan", meaning: "The Smoke", arabic: "الدخان", ayahs: 59 },
  { id: 45, name: "Al-Jathiyah", meaning: "The Crouching", arabic: "الجاثية", ayahs: 37 },
  { id: 46, name: "Al-Ahqaf", meaning: "The Wind-Curved Sandhills", arabic: "الأحقاف", ayahs: 35 },
  { id: 47, name: "Muhammad", meaning: "Muhammad", arabic: "محمد", ayahs: 38 },
  { id: 48, name: "Al-Fath", meaning: "The Victory", arabic: "الفتح", ayahs: 29 },
  { id: 49, name: "Al-Hujurat", meaning: "The Rooms", arabic: "الحجرات", ayahs: 18 },
  { id: 50, name: "Qaf", meaning: "Qaf", arabic: "ق", ayahs: 45 },
  { id: 51, name: "Adh-Dhariyat", meaning: "The Winnowing Winds", arabic: "الذاريات", ayahs: 60 },
  { id: 52, name: "At-Tur", meaning: "The Mount", arabic: "الطور", ayahs: 49 },
  { id: 53, name: "An-Najm", meaning: "The Star", arabic: "النجم", ayahs: 62 },
  { id: 54, name: "Al-Qamar", meaning: "The Moon", arabic: "القمر", ayahs: 55 },
  { id: 55, name: "Ar-Rahman", meaning: "The Most Merciful", arabic: "الرحمن", ayahs: 78 },
  { id: 56, name: "Al-Waqi'ah", meaning: "The Inevitable", arabic: "الواقعة", ayahs: 96 },
  { id: 57, name: "Al-Hadid", meaning: "The Iron", arabic: "الحديد", ayahs: 29 },
  { id: 58, name: "Al-Mujadila", meaning: "The Pleading Woman", arabic: "المجادلة", ayahs: 22 },
  { id: 59, name: "Al-Hashr", meaning: "The Exile", arabic: "الحشر", ayahs: 24 },
  { id: 60, name: "Al-Mumtahanah", meaning: "She That Is Examined", arabic: "الممتحنة", ayahs: 13 },
  { id: 61, name: "As-Saf", meaning: "The Ranks", arabic: "الصف", ayahs: 14 },
  { id: 62, name: "Al-Jumu'ah", meaning: "Friday", arabic: "الجمعة", ayahs: 11 },
  { id: 63, name: "Al-Munafiqun", meaning: "The Hypocrites", arabic: "المنافقون", ayahs: 11 },
  { id: 64, name: "At-Taghabun", meaning: "Mutual Loss and Gain", arabic: "التغابن", ayahs: 18 },
  { id: 65, name: "At-Talaq", meaning: "The Divorce", arabic: "الطلاق", ayahs: 12 },
  { id: 66, name: "At-Tahrim", meaning: "The Prohibition", arabic: "التحريم", ayahs: 12 },
  { id: 67, name: "Al-Mulk", meaning: "The Sovereignty", arabic: "الملك", ayahs: 30 },
  { id: 68, name: "Al-Qalam", meaning: "The Pen", arabic: "القلم", ayahs: 52 },
  { id: 69, name: "Al-Haqqah", meaning: "The Reality", arabic: "الحاقة", ayahs: 52 },
  { id: 70, name: "Al-Ma'arij", meaning: "The Ascending Stairways", arabic: "المعارج", ayahs: 44 },
  { id: 71, name: "Nuh", meaning: "Noah", arabic: "نوح", ayahs: 28 },
  { id: 72, name: "Al-Jinn", meaning: "The Jinn", arabic: "الجن", ayahs: 28 },
  { id: 73, name: "Al-Muzzammil", meaning: "The Enshrouded One", arabic: "المزمل", ayahs: 20 },
  { id: 74, name: "Al-Muddaththir", meaning: "The Cloaked One", arabic: "المدثر", ayahs: 56 },
  { id: 75, name: "Al-Qiyamah", meaning: "The Resurrection", arabic: "القيامة", ayahs: 40 },
  { id: 76, name: "Al-Insan", meaning: "The Human", arabic: "الإنسان", ayahs: 31 },
  { id: 77, name: "Al-Mursalat", meaning: "Those Sent Forth", arabic: "المرسلات", ayahs: 50 },
  { id: 78, name: "An-Naba", meaning: "The Great News", arabic: "النبأ", ayahs: 40 },
  { id: 79, name: "An-Nazi'at", meaning: "Those Who Pull Out", arabic: "النازعات", ayahs: 46 },
  { id: 80, name: "Abasa", meaning: "He Frowned", arabic: "عبس", ayahs: 42 },
  { id: 81, name: "At-Takwir", meaning: "The Folding Up", arabic: "التكوير", ayahs: 29 },
  { id: 82, name: "Al-Infitar", meaning: "The Cleaving", arabic: "الانفطار", ayahs: 19 },
  { id: 83, name: "Al-Mutaffifin", meaning: "Those Who Give Less", arabic: "المطففين", ayahs: 36 },
  { id: 84, name: "Al-Inshiqaq", meaning: "The Splitting Open", arabic: "الانشقاق", ayahs: 25 },
  { id: 85, name: "Al-Buruj", meaning: "The Constellations", arabic: "البروج", ayahs: 22 },
  { id: 86, name: "At-Tariq", meaning: "The Nightcomer", arabic: "الطارق", ayahs: 17 },
  { id: 87, name: "Al-A'la", meaning: "The Most High", arabic: "الأعلى", ayahs: 19 },
  { id: 88, name: "Al-Ghashiyah", meaning: "The Overwhelming", arabic: "الغاشية", ayahs: 26 },
  { id: 89, name: "Al-Fajr", meaning: "The Dawn", arabic: "الفجر", ayahs: 30 },
  { id: 90, name: "Al-Balad", meaning: "The City", arabic: "البلد", ayahs: 20 },
  { id: 91, name: "Ash-Shams", meaning: "The Sun", arabic: "الشمس", ayahs: 15 },
  { id: 92, name: "Al-Layl", meaning: "The Night", arabic: "الليل", ayahs: 21 },
  { id: 93, name: "Ad-Duha", meaning: "The Morning Brightness", arabic: "الضحى", ayahs: 11 },
  { id: 94, name: "Ash-Sharh", meaning: "The Relief", arabic: "الشرح", ayahs: 8 },
  { id: 95, name: "At-Tin", meaning: "The Fig", arabic: "التين", ayahs: 8 },
  { id: 96, name: "Al-Alaq", meaning: "The Clinging Clot", arabic: "العلق", ayahs: 19 },
  { id: 97, name: "Al-Qadr", meaning: "The Night of Decree", arabic: "القدر", ayahs: 5 },
  { id: 98, name: "Al-Bayyinah", meaning: "The Clear Proof", arabic: "البينة", ayahs: 8 },
  { id: 99, name: "Az-Zalzalah", meaning: "The Earthquake", arabic: "الزلزلة", ayahs: 8 },
  { id: 100, name: "Al-Adiyat", meaning: "The Charging Horses", arabic: "العاديات", ayahs: 11 },
  { id: 101, name: "Al-Qari'ah", meaning: "The Striking Hour", arabic: "القارعة", ayahs: 11 },
  { id: 102, name: "At-Takathur", meaning: "Competition for More", arabic: "التكاثر", ayahs: 8 },
  { id: 103, name: "Al-Asr", meaning: "The Declining Day", arabic: "العصر", ayahs: 3 },
  { id: 104, name: "Al-Humazah", meaning: "The Slanderer", arabic: "الهمزة", ayahs: 9 },
  { id: 105, name: "Al-Fil", meaning: "The Elephant", arabic: "الفيل", ayahs: 5 },
  { id: 106, name: "Quraysh", meaning: "Quraysh", arabic: "قريش", ayahs: 4 },
  { id: 107, name: "Al-Ma'un", meaning: "Small Kindnesses", arabic: "الماعون", ayahs: 7 },
  { id: 108, name: "Al-Kawthar", meaning: "Abundance", arabic: "الكوثر", ayahs: 3 },
  { id: 109, name: "Al-Kafirun", meaning: "The Disbelievers", arabic: "الكافرون", ayahs: 6 },
  { id: 110, name: "An-Nasr", meaning: "The Divine Support", arabic: "النصر", ayahs: 3 },
  { id: 111, name: "Al-Masad", meaning: "Palm Fiber", arabic: "المسد", ayahs: 5 },
  { id: 112, name: "Al-Ikhlas", meaning: "Sincerity", arabic: "الإخلاص", ayahs: 4 },
  { id: 113, name: "Al-Falaq", meaning: "The Daybreak", arabic: "الفلق", ayahs: 5 },
  { id: 114, name: "An-Nas", meaning: "Mankind", arabic: "الناس", ayahs: 6 },
];

const categories = [
  { title: "Naat Sharif", arabic: "نعت", description: "Nabi ﷺ ki shaan mein kalaam", href: "/naat", icon: "✦" },
  { title: "Hamd", arabic: "حمد", description: "Allah ki hamd-o-sana", href: "/hamd", icon: "☾" },
  { title: "Salam", arabic: "سلام", description: "Ishq aur adab ke alfaaz", href: "/salam", icon: "❋" },
  { title: "Manqabat", arabic: "منقبت", description: "Auliya aur buzurgon ki manqabat", href: "/manqabat", icon: "۞" },
  { title: "Seerat", arabic: "سیرت", description: "Seerat-un-Nabi ﷺ ka mutala", href: "/biography", icon: "◇" },
];

const learningPlans = [
  { title: "Quran ko samjhein", description: "Tarjume ke saath padhne ka safar shuru karein.", href: "https://quran.com" },
  { title: "Rozana tilawat", description: "Apne din mein Quran ke liye waqt nikalein.", href: "https://quran.com" },
  { title: "Deeni mutala", description: "Qirtaas par notes aur study tools explore karein.", href: "https://qirtaas.io" },
];

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [surahQuery, setSurahQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"surah" | "juz">("surah");

  const filteredSurahs = useMemo(() => {
    const value = surahQuery.trim().toLowerCase();
    if (!value) return surahs;
    return surahs.filter(
      (surah) =>
        surah.name.toLowerCase().includes(value) ||
        surah.meaning.toLowerCase().includes(value) ||
        String(surah.id).includes(value) ||
        surah.arabic.includes(value)
    );
  }, [surahQuery]);

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const value = query.trim();
    if (!value) return;
    window.location.href = `/naat?search=${encodeURIComponent(value)}`;
  }

  return (
    <main className="qhome">
      <header className="qheader">
        <Link href="/" className="qbrand" aria-label="Islamic Kalam home">
          <span className="qbrand-mark">۞</span>
          <span>Islamic <strong>Kalam</strong></span>
        </Link>

        <nav className="qnav" aria-label="Main navigation">
          <a href="#quran">Quran</a>
          <a href="#kalaam">Kalaam</a>
          <a href="#learning">Learn</a>
        </nav>

        <a href="#surah-list" className="qheader-action">Explore <span>↗</span></a>
      </header>

      <section className="qhero">
        <div className="qhero-inner">
          <p className="qeyebrow"><span className="qeyebrow-dot" /> A PLACE FOR REFLECTION</p>
          <h1>Read. Reflect.<br /><span>Reconnect.</span></h1>
          <p className="qhero-copy">
            Quran ki tilawat se lekar dil ko chhoo lene wale Kalaam tak,
            apne roohani safar ko aage badhayein.
          </p>

          <form className="qsearch" onSubmit={handleSearch}>
            <span className="qsearch-icon" aria-hidden="true">⌕</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Naat, Hamd, Kalaam..."
              aria-label="Search Islamic Kalaam"
            />
            <button type="submit">Search <span>→</span></button>
          </form>

          <div className="qpopular">
            <span>Explore:</span>
            <a href="#surah-list">Surah</a>
            <a href="#kalaam">Naat Sharif</a>
            <a href="#learning">Learning</a>
          </div>
        </div>
        <div className="qhero-ornament" aria-hidden="true">
          <span className="qornament-ring qornament-ring-one" />
          <span className="qornament-ring qornament-ring-two" />
          <span className="qornament-center">۞</span>
        </div>
      </section>

      <section className="qstart-section" id="quran">
        <div className="qsection-heading">
          <div>
            <p className="qeyebrow">YOUR JOURNEY</p>
            <h2>Pick up where you left off</h2>
          </div>
          <span className="qsection-symbol">01 / 04</span>
        </div>

        <div className="qstart-card">
          <div className="qstart-card-top">
            <span className="qtag"><span /> START READING</span>
            <span className="qstart-arabic" lang="ar" dir="rtl">القرآن الكريم</span>
          </div>
          <div className="qstart-content">
            <div className="qsurah-number">01</div>
            <div className="qstart-info">
              <h3>Al-Fatihah</h3>
              <p>The Opening · 7 Ayahs</p>
            </div>
            <span className="qstart-name-arabic" lang="ar" dir="rtl">الفاتحة</span>
          </div>
          <div className="qstart-card-bottom">
            <p>Begin your reading journey with the opening chapter.</p>
            <a href="https://quran.com/1" target="_blank" rel="noreferrer">Read Surah <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="qverse-section">
        <div className="qverse-label"><span>✧</span> A MOMENT TO REFLECT</div>
        <p className="qverse-arabic" lang="ar" dir="rtl">
          فَإِنَّ مَعَ الْعُسْرِ يُسْرًا ۝ إِنَّ مَعَ الْعُسْرِ يُسْرًا
        </p>
        <p className="qverse-translation">
          “For indeed, with hardship comes ease. Indeed, with hardship comes ease.”
        </p>
        <div className="qverse-reference">Surah Ash-Sharh · 94:5–6</div>
        <a className="qverse-link" href="https://quran.com/94/5-6" target="_blank" rel="noreferrer">
          Read this passage <span>↗</span>
        </a>
      </section>

      <section className="qkalaam-section" id="kalaam">
        <div className="qsection-heading">
          <div>
            <p className="qeyebrow">DISCOVER SOMETHING MEANINGFUL</p>
            <h2>Explore Kalaam</h2>
            <p className="qsection-description">Alfaaz jo dil ko sukoon aur rooh ko taazgi dein.</p>
          </div>
          <span className="qsection-symbol">02 / 04</span>
        </div>

        <div className="qcategory-grid">
          {categories.map((category, index) => (
            <Link href={category.href} className="qcategory-card" key={category.href}>
              <div className="qcategory-top">
                <span className="qcategory-icon">{category.icon}</span>
                <span className="qcategory-index">0{index + 1}</span>
              </div>
              <span className="qcategory-arabic" lang="ar" dir="rtl">{category.arabic}</span>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <span className="qcategory-arrow" aria-label={`Explore ${category.title}`}>↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="qlearning-section" id="learning">
        <div className="qlearning-intro">
          <p className="qeyebrow">GROW AT YOUR OWN PACE</p>
          <h2>Make space for<br /><span>what matters.</span></h2>
          <p>Chhote qadam, rozana. Apne ilm aur roohani safar ko aage badhayein.</p>
        </div>

        <div className="qlearning-list">
          {learningPlans.map((plan, index) => (
            <a className="qlearning-item" href={plan.href} target="_blank" rel="noreferrer" key={plan.title}>
              <span className="qlearning-number">0{index + 1}</span>
              <span className="qlearning-text">
                <strong>{plan.title}</strong>
                <span>{plan.description}</span>
              </span>
              <span className="qlearning-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="qsurah-section" id="surah-list">
        <div className="qsection-heading qsurah-heading">
          <div>
            <p className="qeyebrow">THE NOBLE QURAN</p>
            <h2>Explore the Surahs</h2>
            <p className="qsection-description">Find a chapter and continue your reading.</p>
          </div>
          <span className="qsection-symbol">03 / 04</span>
        </div>

        <div className="qsurah-tools">
          <div className="qsurah-tabs" role="tablist" aria-label="Quran sections">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "surah"}
              className={activeTab === "surah" ? "qsurah-tab active" : "qsurah-tab"}
              onClick={() => setActiveTab("surah")}
            >
              Surah
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "juz"}
              className={activeTab === "juz" ? "qsurah-tab active" : "qsurah-tab"}
              onClick={() => setActiveTab("juz")}
            >
              Juz
            </button>
          </div>

          <label className="qsurah-filter">
            <span aria-hidden="true">⌕</span>
            <input
              value={surahQuery}
              onChange={(e) => setSurahQuery(e.target.value)}
              placeholder="Find a Surah..."
              aria-label="Find a Surah"
            />
          </label>
        </div>

        {activeTab === "surah" ? (
          <div className="qsurah-grid">
            {filteredSurahs.map((surah) => (
              <a
                href={`https://quran.com/${surah.id}`}
                target="_blank"
                rel="noreferrer"
                className="qsurah-row"
                key={surah.id}
              >
                <span className="qsurah-badge">{surah.id}</span>
                <span className="qsurah-details">
                  <strong>{surah.name}</strong>
                  <span>{surah.meaning} · {surah.ayahs} Ayahs</span>
                </span>
                <span className="qsurah-arabic" lang="ar" dir="rtl">{surah.arabic}</span>
              </a>
            ))}
            {filteredSurahs.length === 0 && (
              <p className="qempty-state">No Surah found. Try another name or number.</p>
            )}
          </div>
        ) : (
          <div className="qjuz-panel">
            <p>Explore the 30 Juz of the Quran on Quran.com.</p>
            <a href="https://quran.com" target="_blank" rel="noreferrer">Browse Juz on Quran.com ↗</a>
          </div>
        )}

        <p className="qsurah-note">
          Quran text, recitation and detailed reading tools are available on Quran.com.
        </p>
      </section>

      <section className="qcommunity-section">
        <div>
          <p className="qeyebrow">STAY CONNECTED</p>
          <h2>Keep learning.<br /><span>Keep reflecting.</span></h2>
          <p>Apne rozana ke safar mein tilawat, kalaam aur deeni mutala ke liye waqt nikalein.</p>
        </div>
        <a href="https://quran.com" target="_blank" rel="noreferrer" className="qcommunity-button">
          Explore Quran.com <span>↗</span>
        </a>
      </section>

      <footer className="qfooter">
        <div className="qfooter-main">
          <Link href="/" className="qbrand">
            <span className="qbrand-mark">۞</span>
            <span>Islamic <strong>Kalam</strong></span>
          </Link>
          <p>Ilm se roshni, alfaaz se aqeedat.</p>
        </div>
        <div className="qfooter-links">
          <a href="#quran">Quran</a>
          <a href="#kalaam">Kalaam</a>
          <a href="#learning">Learn</a>
          <a href="#surah-list">Surah list</a>
        </div>
        <div className="qfooter-bottom">
          <span>© {new Date().getFullYear()} Islamic Kalam</span>
          <span>Made for a meaningful journey.</span>
        </div>
      </footer>
    </main>
  );
  }
