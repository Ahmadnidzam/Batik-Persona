// ============================
// BATIK PERSONA — Result Page (Hero card + Share)
// ============================

function ResultPage({ navigate, result, answers }) {
  const persona = window.BATIK_DATA.PERSONALITIES[result] || window.BATIK_DATA.PERSONALITIES.elegan;
  const gender = answers.gender || "P";
  const ootd = window.OOTD_DATA[persona.key] || window.OOTD_DATA.elegan;
  const [shareOpen, setShareOpen] = useState(false);

  useEffect(() => { window.scrollTo({ top: 0, behavior: "auto" }); }, []);

  return (
    <div className="route-wrapper" style={{ paddingTop: 100, background: "var(--bg)" }}>
      <ResultHero persona={persona} onShare={() => setShareOpen(true)}/>
      <OOTDSection persona={persona} ootd={ootd} gender={gender}/>
      <PaletteSection persona={persona}/>
      <FeedbackSection navigate={navigate}/>
      {shareOpen && <ShareModal persona={persona} onClose={() => setShareOpen(false)}/>}
    </div>
  );
}

// ---------- Hero ----------
function ResultHero({ persona, onShare }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const patternMap = { pemimpin: "parang", pencipta: "dots", elegan: "parang", empatik: "kawung", ekspresif: "truntum" };
  const accent = persona.palette[1];

  return (
    <section style={{ padding: "60px 0 80px", position: "relative", overflow: "hidden" }}>
      <BatikPattern variant={patternMap[persona.key]} color={persona.palette[1]} opacity={0.06} size={80}/>

      <div className="container" style={{ position: "relative" }}>
        <div style={{
          textAlign: "center",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(20px)",
          transition: "all 1s cubic-bezier(.2,.7,.2,1)"
        }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>Persona Batik Kamu</div>
          <h1 className="display" style={{
            fontSize: "clamp(48px, 8vw, 96px)",
            margin: 0,
            color: "var(--ink)",
            letterSpacing: "-0.02em"
          }}>
            {persona.title.split(" ").map((w, i) => (
              <span key={i} style={{
                display: "inline-block",
                marginRight: i === 0 ? "0.25em" : 0,
                color: i === 1 ? accent : "var(--ink)",
                fontStyle: i === 1 ? "italic" : "normal",
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(30px)",
                transition: `all 1.1s cubic-bezier(.2,.7,.2,1) ${0.2 + i * 0.15}s`
              }}>{w}</span>
            ))}
          </h1>
          <p style={{
            marginTop: 16, fontSize: 18, color: "var(--ink-soft)",
            opacity: mounted ? 1 : 0, transition: "opacity 1.4s ease .6s"
          }}>{persona.tagline}</p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: 56,
          alignItems: "center",
          marginTop: 64
        }} className="result-grid">

          <BatikShowcase persona={persona} mounted={mounted}/>

          <div style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateX(0)" : "translateX(20px)",
            transition: "all 1.1s cubic-bezier(.2,.7,.2,1) .5s"
          }}>
            <div className="eyebrow" style={{ marginBottom: 14, color: accent }}>Motif Padananmu</div>
            <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 56px)", margin: 0, marginBottom: 8 }}>
              Batik {persona.batik}
            </h2>
            <div style={{ fontSize: 14, color: "var(--ink-mute)", fontFamily: "var(--font-mono)", letterSpacing: "0.1em", marginBottom: 28 }}>
              ASAL · {persona.origin.toUpperCase()}
            </div>

            <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--ink-soft)", margin: 0 }}>
              {persona.description}
            </p>

            <div style={{ marginTop: 36, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button className="btn btn-primary" onClick={onShare}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="3" cy="7" r="2" stroke="currentColor" strokeWidth="1.3"/>
                  <circle cx="11" cy="3" r="2" stroke="currentColor" strokeWidth="1.3"/>
                  <circle cx="11" cy="11" r="2" stroke="currentColor" strokeWidth="1.3"/>
                  <line x1="4.7" y1="6.2" x2="9.3" y2="3.8" stroke="currentColor" strokeWidth="1.3"/>
                  <line x1="4.7" y1="7.8" x2="9.3" y2="10.2" stroke="currentColor" strokeWidth="1.3"/>
                </svg>
                Bagikan Hasil
              </button>
              <button className="btn btn-ghost" onClick={() => {
                document.getElementById("ootd-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}>
                Lihat Rekomendasi OOTD <Arrow/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BatikShowcase({ persona, mounted }) {
  const patternMap = { pemimpin: "parang", pencipta: "dots", elegan: "parang", empatik: "kawung", ekspresif: "truntum" };
  const motif = patternMap[persona.key];
  const batikEntry = (window.BATIK_DATA.BATIK_TYPES || []).find((b) => b.name === persona.batik);
  const photo = batikEntry && batikEntry.img;
  return (
    <div style={{
      aspectRatio: "4/5",
      position: "relative",
      borderRadius: "var(--r-lg)",
      overflow: "hidden",
      border: "1px solid var(--line)",
      background: persona.palette[3],
      boxShadow: "var(--shadow-lg)",
      opacity: mounted ? 1 : 0,
      transform: mounted ? "scale(1) rotate(0deg)" : "scale(0.9) rotate(-2deg)",
      transition: "all 1.3s cubic-bezier(.2,.7,.2,1) .4s"
    }}>
      {photo ? (
        <>
          <img src={photo} alt={persona.batik} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}/>
          <div style={{ position: "absolute", inset: 0, background: `linear-gradient(180deg, transparent 35%, ${persona.palette[0]}b3 100%)`, pointerEvents: "none" }}/>
        </>
      ) : (
        <>
          <div style={{ position: "absolute", inset: 0, background: `linear-gradient(160deg, ${persona.palette[0]}, ${persona.palette[1]})` }}/>
          <BatikPattern variant={motif} color={persona.palette[3]} opacity={0.35} size={60}/>
          <BatikPattern variant="dots" color={persona.palette[3]} opacity={0.12} size={20}/>
        </>
      )}

      {/* Corner label */}
      <div style={{
        position: "absolute", top: 24, left: 24, right: 24,
        display: "flex", justifyContent: "space-between", alignItems: "flex-start"
      }}>
        <div style={{
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: persona.palette[3],
          background: `${persona.palette[0]}cc`,
          padding: "6px 12px",
          borderRadius: "var(--r-pill)",
          backdropFilter: "blur(8px)"
        }}>BATIK · {persona.batik.toUpperCase()}</div>
      </div>

      <div style={{
        position: "absolute", bottom: 24, left: 24, right: 24,
        background: "var(--paper)",
        borderRadius: "var(--r-md)",
        padding: "16px 18px",
        border: "1px solid var(--line)"
      }}>
        <div className="display" style={{ fontSize: 24, lineHeight: 1.1 }}>{persona.batik}</div>
        <div style={{ fontSize: 12, color: "var(--ink-mute)", marginTop: 4, fontFamily: "var(--font-mono)", letterSpacing: "0.08em" }}>
          {persona.origin.toUpperCase()} · INDONESIA
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ResultPage });
