// ============================
// BATIK PERSONA — Header & Footer
// ============================

function Header({ route, navigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menu = [
    { id: "home", label: "Beranda" },
    { id: "katalog", label: "Katalog Belanja" },
    { id: "about", label: "About Us" }
  ];

  const isActive = (id) => {
    if (id === "home" && route.name === "home") return true;
    if (id === "katalog" && route.name === "katalog") return true;
    return route.name === id;
  };

  return (
    <header style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 100,
      background: scrolled ? "rgba(243,237,226,0.85)" : "rgba(243,237,226,0)",
      backdropFilter: scrolled ? "blur(14px) saturate(1.2)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(14px) saturate(1.2)" : "none",
      borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
      transition: "all .4s cubic-bezier(.2,.7,.2,1)"
    }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 32px", gap: 24 }}>
        <button onClick={() => navigate({ name: "home" })} style={{ padding: 0 }}>
          <Logo />
        </button>

        <nav className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 2 }}>
          {menu.map(m => (
            <button
              key={m.id}
              onClick={() => navigate({ name: m.id })}
              style={{
                padding: "10px 12px",
                borderRadius: "var(--r-pill)",
                fontSize: 13.5,
                fontWeight: 500,
                whiteSpace: "nowrap",
                color: isActive(m.id) ? "var(--ink)" : "var(--ink-soft)",
                background: isActive(m.id) ? "var(--bg-deep)" : "transparent",
                transition: "all .25s"
              }}
              onMouseEnter={(e) => { if (!isActive(m.id)) e.currentTarget.style.background = "var(--bg-soft)"; }}
              onMouseLeave={(e) => { if (!isActive(m.id)) e.currentTarget.style.background = "transparent"; }}
            >
              {m.label}
            </button>
          ))}
        </nav>

        <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <button className="btn btn-primary" style={{ padding: "10px 18px", fontSize: 14 }} onClick={() => navigate({ name: "quiz" })}>
            Mulai Kuis <Arrow />
          </button>
        </div>

        <button
          className="nav-mobile-toggle"
          onClick={() => setOpen(v => !v)}
          aria-label="Menu"
          style={{
            display: "none",
            width: 42, height: 42,
            borderRadius: "var(--r-pill)",
            border: "1px solid var(--line)",
            background: "var(--paper)",
            alignItems: "center", justifyContent: "center"
          }}
        >
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
            <line x1="0" y1="1" x2="18" y2="1" stroke="currentColor" strokeWidth="1.4"/>
            <line x1="0" y1="7" x2="18" y2="7" stroke="currentColor" strokeWidth="1.4"/>
            <line x1="0" y1="13" x2="18" y2="13" stroke="currentColor" strokeWidth="1.4"/>
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        style={{
          maxHeight: open ? 400 : 0,
          overflow: "hidden",
          transition: "max-height .4s cubic-bezier(.2,.7,.2,1)",
          background: "var(--paper)",
          borderBottom: open ? "1px solid var(--line)" : "none"
        }}
      >
        <div style={{ padding: "8px 20px 16px", display: "flex", flexDirection: "column", gap: 4 }}>
          {menu.map(m => (
            <button
              key={m.id}
              onClick={() => { navigate({ name: m.id }); setOpen(false); }}
              style={{
                padding: "14px 16px",
                borderRadius: "var(--r-md)",
                fontSize: 15,
                textAlign: "left",
                color: isActive(m.id) ? "var(--ink)" : "var(--ink-soft)",
                background: isActive(m.id) ? "var(--bg-deep)" : "transparent",
                fontWeight: isActive(m.id) ? 500 : 400
              }}
            >
              {m.label}
            </button>
          ))}
          <button className="btn btn-primary" style={{ marginTop: 8, justifyContent: "center" }} onClick={() => { navigate({ name: "quiz" }); setOpen(false); }}>
            Mulai Kuis <Arrow />
          </button>
        </div>
      </div>
    </header>
  );
}

function Footer({ navigate }) {
  return (
    <footer style={{
      background: "var(--ink)",
      color: "var(--paper)",
      paddingTop: 80,
      paddingBottom: 32,
      position: "relative",
      overflow: "hidden",
      marginTop: 80
    }}>
      <BatikPattern variant="kawung" color="#efe5d0" opacity={0.06} size={80}/>
      <div className="container" style={{ position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 64 }} className="footer-grid">
          <div>
            <Logo mono={true}/>
            <p style={{ marginTop: 20, color: "rgba(250,246,236,0.7)", fontSize: 14, maxWidth: 340, lineHeight: 1.7 }}>
              Menerjemahkan warisan batik Indonesia menjadi pengalaman personal—untuk setiap orang dengan ceritanya sendiri.
            </p>
          </div>
          <div>
            <div className="eyebrow" style={{ color: "rgba(250,246,236,0.5)", marginBottom: 16 }}>Navigasi</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14 }}>
              <button onClick={() => navigate({ name: "home" })} style={{ textAlign: "left" }}>Beranda</button>
              <button onClick={() => navigate({ name: "katalog" })} style={{ textAlign: "left" }}>Katalog Belanja</button>
              <button onClick={() => navigate({ name: "quiz" })} style={{ textAlign: "left" }}>Uji Kecocokan</button>
              <button onClick={() => navigate({ name: "about" })} style={{ textAlign: "left" }}>About Us</button>
            </div>
          </div>
          <div>
            <div className="eyebrow" style={{ color: "rgba(250,246,236,0.5)", marginBottom: 16 }}>Koleksi</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14 }}>
              <button onClick={() => navigate({ name: "katalog", filter: "outer" })} style={{ textAlign: "left" }}>Outer</button>
              <button onClick={() => navigate({ name: "katalog", filter: "kemeja" })} style={{ textAlign: "left" }}>Kemeja</button>
              <button onClick={() => navigate({ name: "katalog", filter: "dress" })} style={{ textAlign: "left" }}>Dress</button>
              <button onClick={() => navigate({ name: "katalog", filter: "rok" })} style={{ textAlign: "left" }}>Rok</button>
            </div>
          </div>
          <div>
            <div className="eyebrow" style={{ color: "rgba(250,246,236,0.5)", marginBottom: 16 }}>Kontak</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14, color: "rgba(250,246,236,0.8)" }}>
              <span>hello@batikpersona.id</span>
              <span>Yogyakarta · Indonesia</span>
              <span>Senin – Sabtu, 09.00–17.00</span>
            </div>
          </div>
        </div>
        <div style={{
          borderTop: "1px solid rgba(250,246,236,0.12)",
          paddingTop: 24,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 12,
          color: "rgba(250,246,236,0.5)",
          flexWrap: "wrap",
          gap: 12
        }}>
          <span style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.1em" }}>© 2026 BATIK PERSONA</span>
          <span>Dibuat dengan rasa hormat pada warisan Indonesia.</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Header, Footer });
