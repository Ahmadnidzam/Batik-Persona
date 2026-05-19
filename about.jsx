// ============================
// BATIK PERSONA — About Us
// ============================

function AboutPage({ navigate }) {
  useEffect(() => { window.scrollTo({ top: 0, behavior: "auto" }); }, []);

  return (
    <div className="route-wrapper" style={{ paddingTop: 110, background: "var(--bg)" }}>
      {/* Intro */}
      <section style={{ padding: "60px 0 80px", position: "relative", overflow: "hidden" }}>
        <BatikPattern variant="kawung" color="#8b4f1f" opacity={0.05} size={120}/>
        <div className="container" style={{ position: "relative" }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>Tentang Kami</div>
          <h1 className="display" style={{ fontSize: "clamp(48px, 7.5vw, 96px)", margin: 0, maxWidth: 980, color: "var(--ink)" }}>
            Menerjemahkan batik<br/>menjadi <em style={{ color: "var(--sogan)", fontStyle: "italic" }}>cerita pribadi</em>.
          </h1>
          <p style={{ marginTop: 28, fontSize: 18, color: "var(--ink-soft)", maxWidth: 720, lineHeight: 1.7 }}>
            Batik Persona adalah inisiatif untuk mendekatkan generasi modern dengan warisan batik Indonesia—lewat pengalaman yang personal, edukatif, dan estetik.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 80 }} className="two-col">
            <Reveal>
              <div className="eyebrow" style={{ marginBottom: 16 }}>Cerita Kami</div>
              <h2 className="display" style={{ fontSize: "clamp(32px, 4vw, 48px)", margin: 0 }}>
                Lahir dari pertanyaan sederhana.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p style={{ fontSize: 17, lineHeight: 1.75, color: "var(--ink-soft)", margin: 0 }}>
                "Kenapa banyak dari kita pakai batik tanpa benar-benar tahu motif apa yang kita pakai?" Pertanyaan itu jadi titik mula Batik Persona. Kami percaya batik bukan kain seragam—setiap motif lahir dari filosofi, daerah, dan momen budaya yang spesifik. 
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--ink-soft)", marginTop: 18 }}>
                Lewat kuis kepribadian sederhana, kami ingin menghadirkan batik bukan sebagai pajangan, melainkan sebagai cermin. Sebuah pintu masuk yang lembut untuk generasi muda mengenal warisan budayanya sendiri—dimulai dari diri.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container">
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: 16 }}>Nilai yang Kami Pegang</div>
            <h2 className="display" style={{ fontSize: "clamp(32px, 4vw, 48px)", margin: 0, marginBottom: 48, maxWidth: 640 }}>
              Tiga prinsip yang menjaga<br/>setiap keputusan kami.
            </h2>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="how-grid">
            {[
              {
                num: "01",
                title: "Hormat pada akar",
                desc: "Setiap motif yang kami sebut datang dengan asal-usulnya. Kami tidak generalisasi—kami menghargai bahwa setiap daerah punya dialeknya sendiri."
              },
              {
                num: "02",
                title: "Personal, bukan stereotip",
                desc: "Persona bukan kotak. Kuis kami dibangun sebagai cermin yang halus, bukan label kaku. Selalu ada ruang untuk kompleksitas manusia."
              },
              {
                num: "03",
                title: "Dukung pengrajin",
                desc: "Brand-brand yang kami rekomendasikan adalah mereka yang menghargai pengrajin batik—bukan sekadar mengikuti tren."
              }
            ].map((v, i) => (
              <Reveal key={v.num} delay={i * 80}>
                <div style={{
                  padding: "32px 28px",
                  background: "var(--paper)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--r-lg)",
                  height: "100%"
                }}>
                  <div className="display" style={{ fontSize: 64, color: "var(--bg-deep)", lineHeight: 1, marginBottom: 20 }}>{v.num}</div>
                  <h3 className="display" style={{ fontSize: 22, margin: 0, marginBottom: 10 }}>{v.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--ink-soft)", margin: 0, lineHeight: 1.65 }}>{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers / Manifesto */}
      <section className="section" style={{ background: "var(--ink)", color: "var(--paper)", position: "relative", overflow: "hidden" }}>
        <BatikPattern variant="parang" color="#efe5d0" opacity={0.06} size={80}/>
        <div className="container" style={{ position: "relative" }}>
          <Reveal>
            <div className="eyebrow" style={{ color: "rgba(250,246,236,0.5)", marginBottom: 16 }}>Manifesto</div>
            <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 64px)", margin: 0, maxWidth: 820, color: "var(--paper)" }}>
              Batik adalah <em style={{ fontStyle: "italic", color: "var(--gold)" }}>bahasa</em>.<br/>
              Tugas kami hanya membantumu mendengarkannya.
            </h2>
          </Reveal>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 32,
            marginTop: 64,
            paddingTop: 40,
            borderTop: "1px solid rgba(250,246,236,0.15)"
          }} className="stat-grid">
            {[
              { n: "200+", l: "Motif tercatat" },
              { n: "30+", l: "Brand mitra" },
              { n: "2,400+", l: "Pengguna terbantu" },
              { n: "5", l: "Arketipe persona" }
            ].map((s, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="display" style={{ fontSize: 48, color: "var(--paper)", lineHeight: 1 }}>{s.n}</div>
                <div className="eyebrow" style={{ color: "rgba(250,246,236,0.6)", marginTop: 10 }}>{s.l}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
          <h2 className="display" style={{ fontSize: "clamp(32px, 4.5vw, 52px)", margin: 0 }}>
            Siap menemukan <em style={{ color: "var(--sogan)", fontStyle: "italic" }}>personamu?</em>
          </h2>
          <p style={{ marginTop: 14, color: "var(--ink-soft)" }}>Tiga menit untuk memulai cerita batikmu sendiri.</p>
          <div style={{ marginTop: 28, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn btn-primary btn-large" onClick={() => navigate({ name: "quiz" })}>
              Mulai Kuis <Arrow/>
            </button>
            <button className="btn btn-ghost btn-large" onClick={() => navigate({ name: "katalog" })}>
              Lihat Katalog
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { AboutPage });
