// ============================
// BATIK PERSONA — Landing Page
// ============================

function Landing({ navigate }) {
  return (
    <div className="route-wrapper">
      <Hero navigate={navigate} />
      <AboutBatik />
      <BatikTypes />
      <HowItWorks navigate={navigate} />
      <Reviews />
      <CTABand navigate={navigate} />
    </div>);

}

// ============================
// Hero
// ============================
function Hero({ navigate }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {setMounted(true);}, []);

  return (
    <section className="hero-section" style={{
      minHeight: "92vh",
      paddingTop: 140,
      paddingBottom: 80,
      position: "relative",
      overflow: "hidden",
      background: "var(--bg)",
      display: "flex",
      alignItems: "center"
    }}>
      {/* Background batik image */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url('uploads/ec2733d9-adde-4188-9601-96f22cc7946f.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: mounted ? 1 : 0,
        transform: mounted ? "scale(1)" : "scale(1.05)",
        transition: "opacity 2s ease, transform 2.4s cubic-bezier(.2,.7,.2,1)",
        pointerEvents: "none"
      }} />

      {/* Subtle darkening for text contrast in the center-left area */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(95deg, rgba(20,12,6,0.55) 0%, rgba(20,12,6,0.35) 38%, rgba(20,12,6,0.15) 60%, rgba(20,12,6,0) 80%)",
        pointerEvents: "none"
      }} />

      {/* Soft warm vignette at bottom */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, transparent 60%, rgba(20,12,6,0.35) 100%)",
        pointerEvents: "none"
      }} />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          maxWidth: 720,
          alignItems: "center"
        }} className="hero-grid">

          <div>
            <h1
              className="display"
              style={{
                fontSize: "clamp(40px, 5vw, 64px)",
                margin: 0,
                marginBottom: 32,
                lineHeight: 1.3,
                color: "#f6efde",
                textShadow: "0 2px 24px rgba(0,0,0,0.4)",
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "all 1.1s cubic-bezier(.2,.7,.2,1) .1s"
              }}>
              
              Temukan batik<br />
              yang menjadi <em style={{
                fontStyle: "italic",
                color: "#e3b87a"
              }}>kamu</em>.
            </h1>

            <p
              className="lead"
              style={{
                marginTop: 0,
                maxWidth: 480,
                color: "rgba(246,239,222,0.88)",
                textShadow: "0 1px 12px rgba(0,0,0,0.35)",
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(12px)",
                transition: "all 1.1s cubic-bezier(.2,.7,.2,1) .25s"
              }}>
              
              Sembilan pertanyaan singkat untuk memetakan personalitas kamu ke salah satu motif batik tradisional Indonesia—lengkap dengan padanan OOTD dan palet warna yang serasi.
            </p>

            <div style={{
              marginTop: 36,
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              alignItems: "center",
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(12px)",
              transition: "all 1.1s cubic-bezier(.2,.7,.2,1) .4s"
            }}>
              <button
                className="btn btn-large"
                onClick={() => navigate({ name: "quiz" })}
                style={{
                  background: "#f6efde",
                  color: "#2a1f12",
                  boxShadow: "0 8px 32px -8px rgba(0,0,0,0.5)"
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#e3b87a"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#f6efde"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Ayo Uji Kecocokan Batikmu <Arrow />
              </button>
              <button
                className="btn btn-large"
                onClick={() => navigate({ name: "katalog" })}
                style={{
                  background: "transparent",
                  color: "#f6efde",
                  border: "1px solid rgba(246,239,222,0.4)"
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(246,239,222,0.1)"; e.currentTarget.style.borderColor = "rgba(246,239,222,0.7)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(246,239,222,0.4)"; }}
              >
                Mulai Berbelanja
              </button>
            </div>
          </div>

          {/* Right side: bg image already shows batik fabric, no extra visual needed */}
        </div>

        {/* (scroll indicator moved next to the CTA buttons) */}
      </div>

      <style>{`
        @keyframes scrollHint {
          0%, 100% { transform: scaleY(1); transform-origin: top; }
          50% { transform: scaleY(0.4); transform-origin: top; }
        }
        @keyframes scrollHintH {
          0%, 100% { transform: scaleX(1); transform-origin: left; }
          50% { transform: scaleX(0.4); transform-origin: left; }
        }
      `}</style>
    </section>);

}

function HeroVisual() {
  return (
    <div style={{ position: "relative", aspectRatio: "4/5", maxWidth: 460, marginLeft: "auto" }}>
      {/* Back card with batik pattern */}
      <div style={{
        position: "absolute",
        top: "8%", left: "12%",
        width: "78%", height: "82%",
        background: "var(--cream)",
        borderRadius: "var(--r-lg)",
        border: "1px solid var(--line)",
        overflow: "hidden",
        transform: "rotate(-4deg)",
        boxShadow: "var(--shadow-md)"
      }}>
        <BatikPattern variant="parang" color="#8b4f1f" opacity={0.5} size={50} />
      </div>

      {/* Mid card */}
      <div style={{
        position: "absolute",
        top: "4%", right: "6%",
        width: "60%", height: "55%",
        background: "var(--paper)",
        borderRadius: "var(--r-lg)",
        border: "1px solid var(--line)",
        overflow: "hidden",
        transform: "rotate(3deg)",
        boxShadow: "var(--shadow-md)"
      }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #b5704a, #8b4f1f)" }} />
        <BatikPattern variant="kawung" color="#efe5d0" opacity={0.3} size={40} />
      </div>

      {/* Front result card */}
      <div style={{
        position: "absolute",
        bottom: 0, left: "4%",
        width: "82%",
        background: "var(--paper)",
        borderRadius: "var(--r-lg)",
        border: "1px solid var(--line)",
        padding: 24,
        boxShadow: "var(--shadow-lg)",
        animation: "floatCard 6s ease-in-out infinite"
      }}>
        <div className="eyebrow" style={{ marginBottom: 12 }}>Hasil Persona</div>
        <div className="display" style={{ fontSize: 28, lineHeight: 1.1 }}>Sang Elegan</div>
        <div style={{ fontSize: 13, color: "var(--ink-mute)", marginTop: 4, marginBottom: 16 }}>Sogan Klasik · Surakarta</div>
        <div style={{ display: "flex", gap: 6 }}>
          {["#2a1f12", "#6b4a2e", "#a98255", "#e8dec8", "#faf6ec"].map((c, i) =>
          <div key={i} style={{
            flex: 1, aspectRatio: "1",
            background: c,
            borderRadius: 4,
            border: c === "#faf6ec" ? "1px solid var(--line)" : "none"
          }} />
          )}
        </div>
      </div>

      <style>{`
        @keyframes floatCard {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </div>);

}

// ============================
// About Batik section
// ============================
function AboutBatik() {
  return (
    <section className="section" style={{ background: "var(--paper)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80 }} className="two-col">
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: 20 }}>Tentang Batik</div>
            <h2 className="display" style={{ fontSize: "clamp(36px, 4.5vw, 56px)", margin: 0 }}>
              Kain yang menyimpan<br /><em style={{ color: "var(--sogan)", fontStyle: "italic" }}>cerita</em>.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="lead" style={{ margin: 0 }}>
              Batik bukan sekadar pola di atas kain—ia adalah bahasa visual yang lahir dari ratusan tahun tradisi Indonesia. Setiap motif membawa filosofi: tentang kepemimpinan, kesabaran, cinta, atau keseimbangan hidup. UNESCO mengakuinya sebagai Warisan Kemanusiaan untuk Budaya Lisan dan Nonbendawi pada tahun 2009.
            </p>
            <p style={{ marginTop: 20, color: "var(--ink-soft)" }}>
              Lewat sembilan pertanyaan, kami menghubungkan pribadimu dengan satu motif yang paling sejalan—agar batik tidak hanya kamu pakai, tapi juga kamu pahami.
            </p>
          </Reveal>
        </div>
      </div>
    </section>);

}

// ============================
// Batik Types showcase
// ============================
function BatikTypes() {
  const types = window.BATIK_DATA.BATIK_TYPES;
  return (
    <section className="section" style={{ background: "var(--bg)" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: 16 }}>Ragam Motif</div>
            <h2 className="display" style={{ fontSize: "clamp(32px, 4vw, 48px)", margin: 0, maxWidth: 520 }}>
              Enam motif klasik,<br />masing-masing dengan akarnya.
            </h2>
          </Reveal>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
          maxWidth: 1080,
          margin: "0 auto"
        }} className="batik-types-grid">
          {types.map((t, i) =>
          <Reveal key={t.name} delay={i * 60}>
              <BatikTypeCard batik={t} index={i} />
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}

function BatikTypeCard({ batik, index }) {
  const patterns = ["parang", "kawung", "kawung", "dots", "truntum", "parang"];
  const colors = ["#8b4f1f", "#2f3a5c", "#4a3826", "#3a2a1c", "#8b3a1f", "#6b4a2e"];
  return (
    <div className="card" style={{ overflow: "hidden", display: "flex", flexDirection: "column", height: "100%" }}>
      <div style={{ aspectRatio: "4/3", position: "relative", background: "var(--cream)", borderBottom: "1px solid var(--line)", overflow: "hidden" }}>
        {batik.img ? (
          <img
            src={batik.img}
            alt={batik.name}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform .6s cubic-bezier(.2,.7,.2,1)" }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.06)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          />
        ) : (
          <BatikPattern variant={patterns[index % patterns.length]} color={colors[index % colors.length]} opacity={0.55} size={50} />
        )}
        <div style={{
          position: "absolute", bottom: 12, left: 12,
          fontFamily: "var(--font-mono)", fontSize: 10,
          letterSpacing: "0.15em", textTransform: "uppercase",
          color: "var(--ink-mute)",
          background: "var(--paper)",
          padding: "4px 10px",
          borderRadius: "var(--r-pill)",
          border: "1px solid var(--line)"
        }}>{batik.origin}</div>
      </div>
      <div style={{ padding: 20 }}>
        <div className="display" style={{ fontSize: 22 }}>{batik.name}</div>
        <p style={{ fontSize: 14, color: "var(--ink-soft)", marginTop: 8, marginBottom: 0, lineHeight: 1.55 }}>
          {batik.note}
        </p>
      </div>
    </div>);

}

// ============================
// How It Works
// ============================
function HowItWorks({ navigate }) {
  const steps = [
  { num: "01", title: "Jawab 9 pertanyaan", desc: "Pertanyaan singkat tentang preferensi, suasana, dan gaya hidup kamu. Sekitar tiga menit." },
  { num: "02", title: "Analisis personalitas", desc: "Jawabanmu dipetakan ke lima arketipe persona dan motif batik yang berakar pada kepribadian itu." },
  { num: "03", title: "Hasil & rekomendasi", desc: "Dapatkan motif batik, padanan OOTD, dan palet warna yang serasi. Bisa langsung dibagikan." }];

  return (
    <section className="section" style={{ background: "var(--paper)", borderTop: "1px solid var(--line)" }}>
      <div className="container">
        <Reveal>
          <div className="eyebrow" style={{ marginBottom: 16 }}>Cara Kerja</div>
          <h2 className="display" style={{ fontSize: "clamp(32px, 4vw, 48px)", margin: 0, maxWidth: 640 }}>
            Tiga langkah untuk menemukan<br /><em style={{ color: "var(--sogan)", fontStyle: "italic" }}>batikmu</em>.
          </h2>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 56 }} className="how-grid">
          {steps.map((s, i) =>
          <Reveal key={s.num} delay={i * 80}>
              <div style={{
              padding: "32px 28px",
              background: "var(--bg)",
              border: "1px solid var(--line)",
              borderRadius: "var(--r-lg)",
              height: "100%",
              position: "relative",
              overflow: "hidden"
            }}>
                <div className="display" style={{ fontSize: 64, color: "var(--bg-deep)", lineHeight: 1, marginBottom: 24 }}>{s.num}</div>
                <h3 className="display" style={{ fontSize: 24, margin: 0, marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: "var(--ink-soft)", margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            </Reveal>
          )}
        </div>

        <div style={{ marginTop: 48, display: "flex", justifyContent: "center" }}>
          <button className="btn btn-primary btn-large" onClick={() => navigate({ name: "quiz" })}>
            Mulai Sekarang <Arrow />
          </button>
        </div>
      </div>
    </section>);

}

// ============================
// Reviews — interactive marquee
// ============================
function Reviews() {
  const reviews = [
  { name: "Annisa R.", role: "Designer · Jakarta", persona: "Sang Pencipta", rating: 5, text: "Hasil quiz-nya tepat banget. Mega Mendung memang motif yang selalu saya tertarik tapi tidak tahu kenapa—sekarang saya paham filosofinya." },
  { name: "Bagus W.", role: "Engineer · Bandung", persona: "Sang Pemimpin", rating: 5, text: "Awalnya skeptis tapi rekomendasi OOTD-nya cocok sama gaya saya sehari-hari. Palet warnanya saya pakai buat refresh wardrobe." },
  { name: "Dinda P.", role: "Mahasiswa · Yogyakarta", persona: "Sang Empatik", rating: 5, text: "Kawung benar-benar mencerminkan saya. Yang saya suka, bukan cuma kasih motif tapi juga cerita di baliknya. Edukatif." },
  { name: "Reza F.", role: "Founder · Surabaya", persona: "Sang Elegan", rating: 4, text: "Tampilannya bersih dan hangat. Sogan Klasik—saya jadi kepikiran buat kemeja batik untuk meeting." },
  { name: "Sari M.", role: "Content Creator · Bali", persona: "Sang Ekspresif", rating: 5, text: "Truntum! Suka banget dengan palet warnanya yang berani. Share-able banget, langsung dipajang di story." },
  { name: "Hendra T.", role: "Dosen · Semarang", persona: "Sang Elegan", rating: 5, text: "Apresiasi tinggi untuk bagaimana batik diperkenalkan kembali ke generasi muda. Konten dan filosofinya akurat." },
  { name: "Maya K.", role: "Architect · Malang", persona: "Sang Empatik", rating: 5, text: "Pengalaman quiz-nya halus dan tidak terburu-buru. Hasilnya membuat saya mau belajar lebih banyak soal batik daerah saya sendiri." },
  { name: "Tio A.", role: "Marketer · Jakarta", persona: "Sang Pencipta", rating: 5, text: "Saya pakai sebagai inspirasi untuk konsep brand. Cara mereka menggabungkan tradisi dan personalitas sangat berkelas." }];


  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const [active, setActive] = useState(null);

  return (
    <section className="section" style={{ background: "var(--bg-soft)", position: "relative", overflow: "hidden" }}>
      <BatikPattern variant="dots" color="#8b4f1f" opacity={0.06} size={40} />
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: 16 }}>Apa Kata Mereka</div>
            <h2 className="display" style={{ fontSize: "clamp(32px, 4vw, 48px)", margin: 0, maxWidth: 560 }}>
              Suara dari mereka yang telah<br />menemukan <em style={{ color: "var(--sogan)", fontStyle: "italic" }}>persona</em>nya.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div>
                <div className="display" style={{ fontSize: 36, lineHeight: 1 }}>4.9</div>
                <div className="eyebrow" style={{ marginTop: 6 }}>Rating Rata-rata</div>
              </div>
              <div style={{ width: 1, height: 40, background: "var(--line)" }} />
              <div>
                <div className="display" style={{ fontSize: 36, lineHeight: 1 }}>2,400+</div>
                <div className="eyebrow" style={{ marginTop: 6 }}>Review Pengguna</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Marquee row 1 */}
      <div
        style={{ position: "relative", maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}>
        
        <div
          ref={trackRef}
          style={{
            display: "flex",
            gap: 20,
            padding: "16px 0",
            animation: "marquee 80s linear infinite",
            animationPlayState: paused ? "paused" : "running",
            width: "max-content"
          }}>
          
          {[...reviews, ...reviews].map((r, i) =>
          <ReviewCard
            key={i}
            review={r}
            active={active === `r1-${i}`}
            onHover={() => setActive(`r1-${i}`)}
            onLeave={() => setActive(null)} />

          )}
        </div>
      </div>

      {/* Marquee row 2 reversed */}
      <div
        style={{ position: "relative", maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)", marginTop: 8 }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}>
        
        <div
          style={{
            display: "flex",
            gap: 20,
            padding: "16px 0",
            animation: "marqueeReverse 90s linear infinite",
            animationPlayState: paused ? "paused" : "running",
            width: "max-content"
          }}>
          
          {[...reviews.slice().reverse(), ...reviews.slice().reverse()].map((r, i) =>
          <ReviewCard
            key={i}
            review={r}
            active={active === `r2-${i}`}
            onHover={() => setActive(`r2-${i}`)}
            onLeave={() => setActive(null)} />

          )}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marqueeReverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </section>);

}

function ReviewCard({ review, active, onHover, onLeave }) {
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        width: 360,
        flexShrink: 0,
        background: "var(--paper)",
        border: "1px solid var(--line)",
        borderRadius: "var(--r-lg)",
        padding: 24,
        transition: "all .4s cubic-bezier(.2,.7,.2,1)",
        transform: active ? "translateY(-6px) scale(1.02)" : "translateY(0)",
        boxShadow: active ? "var(--shadow-lg)" : "var(--shadow-sm)",
        borderColor: active ? "var(--sogan)" : "var(--line)",
        cursor: "default"
      }}>
      
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 40, height: 40,
            borderRadius: "50%",
            background: "linear-gradient(135deg, var(--terracotta), var(--sogan))",
            color: "var(--paper)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "var(--font-display)",
            fontSize: 18
          }}>{review.name.charAt(0)}</div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 500, color: "var(--ink)" }}>{review.name}</div>
            <div style={{ fontSize: 11, color: "var(--ink-mute)", fontFamily: "var(--font-mono)", letterSpacing: "0.08em" }}>{review.role}</div>
          </div>
        </div>
        <Stars n={review.rating} />
      </div>
      <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--ink-soft)", margin: 0, marginBottom: 16 }}>
        “{review.text}”
      </p>
      <div style={{
        fontFamily: "var(--font-mono)",
        fontSize: 10,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        color: "var(--sogan)",
        paddingTop: 12,
        borderTop: "1px solid var(--line-soft)"
      }}>
        Persona · {review.persona}
      </div>
    </div>);

}

function Stars({ n }) {
  return (
    <div className="stars">
      {[0, 1, 2, 3, 4].map((i) =>
      <svg key={i} className="star" viewBox="0 0 16 16" fill={i < n ? "var(--gold)" : "none"} stroke="var(--gold)" strokeWidth="1.2">
          <path d="M8 1.5l1.95 3.95 4.35.63-3.15 3.07.74 4.33L8 11.42l-3.89 2.06.74-4.33-3.15-3.07 4.35-.63L8 1.5z" />
        </svg>
      )}
    </div>);

}

// ============================
// CTA Band
// ============================
function CTABand({ navigate }) {
  return (
    <section className="section" style={{ background: "var(--ink)", color: "var(--paper)", position: "relative", overflow: "hidden" }}>
      <BatikPattern variant="parang" color="#efe5d0" opacity={0.07} size={80} />
      <div className="container" style={{ position: "relative" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <Reveal>
            <div className="eyebrow" style={{ color: "rgba(250,246,236,0.6)", marginBottom: 24 }}>Saatnya Memulai</div>
            <h2 className="display" style={{ fontSize: "clamp(40px, 5.5vw, 72px)", margin: 0, color: "var(--paper)" }}>
              Motif batik mana yang<br />menjadi <em style={{ fontStyle: "italic", color: "var(--gold)" }}>cerminanmu?</em>
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, marginTop: 24, color: "rgba(250,246,236,0.75)" }}>
              Tiga menit, sembilan pertanyaan, satu hasil yang mungkin akan membuatmu melihat batik dengan cara yang berbeda.
            </p>
            <div style={{ marginTop: 36, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <button className="btn btn-clay btn-large" onClick={() => navigate({ name: "quiz" })}>
                Mulai Kuis Sekarang <Arrow />
              </button>
              <button
                className="btn btn-large"
                style={{ background: "transparent", color: "var(--paper)", border: "1px solid rgba(250,246,236,0.3)" }}
                onClick={() => navigate({ name: "katalog" })}>
                
                Lihat Katalog
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}

Object.assign(window, { Landing });