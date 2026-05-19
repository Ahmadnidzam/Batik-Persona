// ============================
// BATIK PERSONA — Catalog Page
// ============================

function KatalogPage({ navigate, route }) {
  const initialFilter = route.filter || "all";
  const [filter, setFilter] = useState(initialFilter);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("popular");

  useEffect(() => { setFilter(route.filter || "all"); }, [route.filter]);
  useEffect(() => { window.scrollTo({ top: 0, behavior: "auto" }); }, []);

  const cats = [
    { id: "all", label: "Semua" },
    { id: "outer", label: "Outer" },
    { id: "kemeja", label: "Kemeja" },
    { id: "dress", label: "Dress" },
    { id: "rok", label: "Rok" }
  ];

  const all = window.CATALOG;
  let items = filter === "all" ? all : all.filter(i => i.category === filter);
  if (search.trim()) {
    const s = search.toLowerCase();
    items = items.filter(i => i.name.toLowerCase().includes(s) || i.brand.toLowerCase().includes(s) || i.motif.toLowerCase().includes(s));
  }
  // simple sort
  if (sort === "low") items = [...items].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
  if (sort === "high") items = [...items].sort((a, b) => parsePrice(b.price) - parsePrice(a.price));

  return (
    <div className="route-wrapper" style={{ paddingTop: 110, background: "var(--bg)", minHeight: "100vh" }}>
      <section style={{ padding: "32px 0 24px" }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 14 }}>Katalog Belanja</div>
          <h1 className="display" style={{ fontSize: "clamp(40px, 6vw, 72px)", margin: 0, color: "var(--ink)" }}>
            Koleksi batik <em style={{ color: "var(--sogan)", fontStyle: "italic" }}>pilihan</em>.
          </h1>
          <p style={{ marginTop: 14, color: "var(--ink-soft)", maxWidth: 580, fontSize: 16 }}>
            Kurasi busana batik dari berbagai brand Indonesia. Klik kartu untuk membuka tautan pembelian langsung.
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <section style={{
        position: "sticky", top: 80, zIndex: 50,
        background: "rgba(243,237,226,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--line)",
        padding: "16px 0"
      }}>
        <div className="container" style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
            {cats.map(c => (
              <button
                key={c.id}
                onClick={() => setFilter(c.id)}
                style={{
                  padding: "10px 18px",
                  borderRadius: "var(--r-pill)",
                  fontSize: 14,
                  fontWeight: 500,
                  background: filter === c.id ? "var(--ink)" : "var(--paper)",
                  color: filter === c.id ? "var(--paper)" : "var(--ink-soft)",
                  border: `1px solid ${filter === c.id ? "var(--ink)" : "var(--line)"}`,
                  transition: "all .25s"
                }}
              >{c.label}</button>
            ))}
          </div>

          <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ position: "relative" }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{
                position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "var(--ink-mute)"
              }}>
                <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.4"/>
                <line x1="9.5" y1="9.5" x2="13" y2="13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
              <input
                className="input"
                placeholder="Cari motif, brand…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ paddingLeft: 38, paddingTop: 10, paddingBottom: 10, width: 240 }}
              />
            </div>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="input"
              style={{ padding: "10px 14px", width: "auto" }}
            >
              <option value="popular">Terpopuler</option>
              <option value="low">Harga terendah</option>
              <option value="high">Harga tertinggi</option>
            </select>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          <div style={{ fontSize: 14, color: "var(--ink-mute)", marginBottom: 24, fontFamily: "var(--font-mono)", letterSpacing: "0.08em" }}>
            MENAMPILKAN {items.length} ITEM
          </div>

          {items.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 20px", background: "var(--paper)", border: "1px solid var(--line)", borderRadius: "var(--r-lg)" }}>
              <div className="display" style={{ fontSize: 32 }}>Tidak ada hasil</div>
              <p style={{ color: "var(--ink-soft)", marginTop: 8 }}>Coba kata kunci atau kategori lain.</p>
            </div>
          ) : (
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: 20
            }}>
              {items.map((it, i) => (
                <CatalogCard key={it.id} item={it} index={i}/>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm" style={{ background: "var(--paper)", borderTop: "1px solid var(--line)" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div className="display" style={{ fontSize: 28 }}>Belum yakin mau yang mana?</div>
            <p style={{ color: "var(--ink-soft)", margin: "6px 0 0" }}>Coba kuis kami untuk menemukan padanan yang tepat untukmu.</p>
          </div>
          <button className="btn btn-primary btn-large" onClick={() => navigate({ name: "quiz" })}>
            Mulai Kuis <Arrow/>
          </button>
        </div>
      </section>
    </div>
  );
}

function CatalogCard({ item, index }) {
  const persona = window.BATIK_DATA.PERSONALITIES[item.persona];
  const patternMap = { pemimpin: "parang", pencipta: "dots", elegan: "parang", empatik: "kawung", ekspresif: "truntum" };
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
        color: "inherit",
        animation: `cardIn .6s cubic-bezier(.2,.7,.2,1) ${(index % 12) * 0.04}s both`
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
            <BatikPattern variant={patternMap[item.persona]} color={persona.palette[0]} opacity={0.18} size={50}/>
            <div style={{
              position: "absolute", inset: 0,
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <div style={{
                fontFamily: "var(--font-mono)", fontSize: 9,
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: "var(--ink-soft)",
                background: "var(--paper)",
                padding: "5px 12px",
                borderRadius: "var(--r-pill)",
                border: "1px solid var(--line)"
              }}>Foto akan diisi</div>
            </div>
          </>
        )}
        <div style={{
          position: "absolute", top: 10, left: 10,
          fontFamily: "var(--font-mono)", fontSize: 9,
          letterSpacing: "0.15em", textTransform: "uppercase",
          color: "var(--paper)",
          background: persona.palette[0],
          padding: "4px 10px",
          borderRadius: "var(--r-pill)"
        }}>{item.motif}</div>
        <div style={{
          position: "absolute", top: 10, right: 10,
          fontFamily: "var(--font-mono)", fontSize: 9,
          letterSpacing: "0.12em", textTransform: "uppercase",
          color: "var(--ink)",
          background: "var(--paper)",
          padding: "4px 8px",
          borderRadius: "var(--r-pill)",
          border: "1px solid var(--line)"
        }}>{item.category}</div>
      </div>
      <div style={{ padding: 16 }}>
        <div style={{ fontSize: 10, color: "var(--ink-mute)", fontFamily: "var(--font-mono)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>
          {item.brand}
        </div>
        <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 8, lineHeight: 1.3, minHeight: 36 }}>{item.name}</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div className="display" style={{ fontSize: 17 }}>{item.price}</div>
          <Arrow/>
        </div>
      </div>
      <style>{`
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </a>
  );
}

function parsePrice(s) {
  return parseInt(String(s).replace(/[^\d]/g, ""), 10) || 0;
}

Object.assign(window, { KatalogPage });
