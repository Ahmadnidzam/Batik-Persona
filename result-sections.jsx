// ============================
// BATIK PERSONA — Result page sub-sections
// (OOTD, Palette, Feedback, Share Modal)
// ============================

// ---------- OOTD Section ----------
function OOTDSection({ persona, ootd, gender }) {
  // Filter visible categories based on gender. Laki-laki: outer, kemeja. Perempuan: all.
  const allCats = gender === "L"
    ? [{ id: "outer", label: "Outer" }, { id: "kemeja", label: "Kemeja" }]
    : [{ id: "outer", label: "Outer" }, { id: "kemeja", label: "Kemeja" }, { id: "dress", label: "Dress" }, { id: "rok", label: "Rok" }];

  const [cat, setCat] = useState(allCats[0].id);
  const items = ootd[cat] || [];
  const patternMap = { pemimpin: "parang", pencipta: "dots", elegan: "parang", empatik: "kawung", ekspresif: "truntum" };

  return (
    <section id="ootd-section" className="section" style={{ background: "var(--paper)", borderTop: "1px solid var(--line)" }}>
      <div className="container">
        <Reveal>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 40 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}>Rekomendasi OOTD untukmu</div>
              <h2 className="display" style={{ fontSize: "clamp(32px, 4.5vw, 52px)", margin: 0, maxWidth: 600 }}>
                Padanan yang sejalan<br/>dengan <em style={{ color: "var(--sogan)", fontStyle: "italic" }}>{persona.title.toLowerCase()}</em>.
              </h2>
            </div>
            <p style={{ maxWidth: 360, color: "var(--ink-soft)", margin: 0, fontSize: 15 }}>
              Klik kartu untuk membuka tautan pembelian. Kategori dapat dipilih di bawah.
            </p>
          </div>
        </Reveal>

        {/* Category tabs */}
        <Reveal delay={80}>
          <div style={{
            display: "inline-flex",
            gap: 4,
            padding: 4,
            background: "var(--bg)",
            border: "1px solid var(--line)",
            borderRadius: "var(--r-pill)",
            marginBottom: 32,
            flexWrap: "wrap"
          }}>
            {allCats.map(c => (
              <button
                key={c.id}
                onClick={() => setCat(c.id)}
                style={{
                  padding: "10px 20px",
                  fontSize: 14,
                  fontWeight: 500,
                  borderRadius: "var(--r-pill)",
                  background: cat === c.id ? "var(--ink)" : "transparent",
                  color: cat === c.id ? "var(--paper)" : "var(--ink-soft)",
                  transition: "all .25s"
                }}
              >{c.label}</button>
            ))}
          </div>
        </Reveal>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 20
        }}>
          {items.map((it, i) => (
            <Reveal key={`${cat}-${i}`} delay={i * 60}>
              <OOTDCard item={it} persona={persona} pattern={patternMap[persona.key]}/>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function OOTDCard({ item, persona, pattern }) {
  return (
    <a
      href={item.link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="card"
      style={{
        display: "block",
        overflow: "hidden",
        textDecoration: "none",
        color: "inherit"
      }}
    >
      <div style={{
        aspectRatio: "3/4",
        position: "relative",
        background: persona.palette[3],
        overflow: "hidden",
        borderBottom: "1px solid var(--line)"
      }}>
        {item.img ? (
          <img src={item.img} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
        ) : (
          <>
            <div style={{ position: "absolute", inset: 0, background: `linear-gradient(150deg, ${persona.palette[1]}33, ${persona.palette[2]}55)` }}/>
            <BatikPattern variant={pattern} color={persona.palette[0]} opacity={0.18} size={50}/>
            <div style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <div style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--ink-soft)",
                background: "var(--paper)",
                padding: "6px 14px",
                borderRadius: "var(--r-pill)",
                border: "1px solid var(--line)"
              }}>Foto akan diisi</div>
            </div>
          </>
        )}
        <div style={{
          position: "absolute", top: 12, left: 12,
          fontFamily: "var(--font-mono)",
          fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase",
          color: "var(--paper)",
          background: persona.palette[0],
          padding: "5px 10px",
          borderRadius: "var(--r-pill)"
        }}>{persona.batik}</div>
      </div>
      <div style={{ padding: 18 }}>
        <div style={{ fontSize: 11, color: "var(--ink-mute)", fontFamily: "var(--font-mono)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>
          {item.brand}
        </div>
        <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 10, lineHeight: 1.3 }}>{item.name}</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div className="display" style={{ fontSize: 18 }}>{item.price}</div>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            fontSize: 12, color: "var(--sogan)", fontWeight: 500
          }}>
            Cek di Shopee <Arrow />
          </div>
        </div>
        {item.link2 && (
          <div
            style={{
              marginTop: 10,
              paddingTop: 10,
              borderTop: "1px solid var(--line-soft)",
              fontSize: 11,
              color: "var(--ink-mute)",
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.05em"
            }}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(item.link2, "_blank", "noopener"); }}
          >
            Cari juga di <span style={{ color: "var(--terracotta)", textDecoration: "underline", cursor: "pointer" }}>Tokopedia →</span>
          </div>
        )}
      </div>
    </a>
  );
}

// ---------- Palette Section ----------
function PaletteSection({ persona }) {
  return (
    <section className="section" style={{ background: "var(--bg)" }}>
      <div className="container">
        <Reveal>
          <div style={{ marginBottom: 40 }}>
            <div className="eyebrow" style={{ marginBottom: 14 }}>Palet Warna Personalmu</div>
            <h2 className="display" style={{ fontSize: "clamp(32px, 4.5vw, 52px)", margin: 0, maxWidth: 640 }}>
              Lima warna yang serasi<br/>dengan <em style={{ color: persona.palette[1], fontStyle: "italic" }}>karakter</em>mu.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 12,
            borderRadius: "var(--r-lg)",
            overflow: "hidden"
          }} className="palette-grid">
            {persona.palette.map((c, i) => (
              <div key={i} style={{
                background: c,
                aspectRatio: "3/4",
                position: "relative",
                border: c === "#faf6ec" || c === "#f3ede2" ? "1px solid var(--line)" : "none",
                borderRadius: "var(--r-md)",
                padding: 20,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                transition: "transform .4s cubic-bezier(.2,.7,.2,1)",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-6px)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
              >
                <div style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: isLight(c) ? "var(--ink-soft)" : "rgba(250,246,236,0.7)",
                  marginBottom: 6
                }}>
                  0{i + 1}
                </div>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 20,
                  color: isLight(c) ? "var(--ink)" : "var(--paper)",
                  marginBottom: 4,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.2
                }}>{persona.paletteNames[i]}</div>
                <div style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: isLight(c) ? "var(--ink-mute)" : "rgba(250,246,236,0.6)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase"
                }}>{c}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p style={{ marginTop: 28, color: "var(--ink-soft)", fontSize: 14, maxWidth: 640 }}>
            Gunakan palet ini sebagai panduan saat memilih busana, aksesori, atau dekorasi. Warna utama adalah dua di kiri, warna pendukung tiga di kanan.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function isLight(hex) {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return lum > 0.6;
}

Object.assign(window, { OOTDSection, PaletteSection });
