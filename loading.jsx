// ============================
// BATIK PERSONA — Loading / Analysis
// ============================

function LoadingPage({ navigate, answers, setResult }) {
  const [phase, setPhase] = useState(0);
  const phases = [
    "Membaca jawaban kamu",
    "Mencocokkan pola dengan motif klasik",
    "Memilih palet warna yang serasi",
    "Menyusun rekomendasi padananmu"
  ];

  useEffect(() => {
    const timers = [];
    phases.forEach((_, i) => {
      timers.push(setTimeout(() => setPhase(i), i * 900 + 200));
    });
    timers.push(setTimeout(() => {
      const persona = window.computePersona(answers);
      setResult(persona);
      navigate({ name: "hasil" });
    }, phases.length * 900 + 400));

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="route-wrapper" style={{
      minHeight: "100vh",
      paddingTop: 100,
      background: "var(--bg)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden"
    }}>
      <BatikPattern variant="kawung" color="#8b4f1f" opacity={0.05} size={140}/>

      <div className="container" style={{ position: "relative", maxWidth: 560, textAlign: "center" }}>
        {/* Animated mandala */}
        <div style={{ width: 220, height: 220, margin: "0 auto 40px", position: "relative" }}>
          <svg width="220" height="220" viewBox="0 0 220 220" style={{ position: "absolute", inset: 0 }}>
            <g transform="translate(110,110)" stroke="var(--sogan)" fill="none" strokeWidth="1.2">
              {/* Outer rotating ring */}
              <g style={{ animation: "spin 24s linear infinite" }}>
                {Array.from({ length: 12 }).map((_, i) => (
                  <g key={i} transform={`rotate(${i * 30})`}>
                    <circle cx="0" cy="-86" r="6"/>
                    <line x1="0" y1="-80" x2="0" y2="-72" strokeWidth="0.8"/>
                  </g>
                ))}
              </g>
              {/* Mid ring counter-rotating */}
              <g style={{ animation: "spinRev 18s linear infinite" }} stroke="var(--terracotta)">
                <circle r="60"/>
                {Array.from({ length: 8 }).map((_, i) => (
                  <g key={i} transform={`rotate(${i * 45})`}>
                    <path d="M0,-60 L4,-50 L0,-40 L-4,-50 Z" fill="var(--terracotta)" stroke="none"/>
                  </g>
                ))}
              </g>
              {/* Kawung center */}
              <g style={{ animation: "pulse 2.4s ease-in-out infinite" }}>
                <circle cx="0" cy="-22" r="12" stroke="var(--ink)"/>
                <circle cx="22" cy="0" r="12" stroke="var(--ink)"/>
                <circle cx="0" cy="22" r="12" stroke="var(--ink)"/>
                <circle cx="-22" cy="0" r="12" stroke="var(--ink)"/>
                <circle cx="0" cy="0" r="3" fill="var(--sogan)" stroke="none"/>
              </g>
            </g>
          </svg>
        </div>

        <div className="eyebrow" style={{ marginBottom: 16 }}>Sedang Menganalisis</div>
        <h1 className="display" style={{ fontSize: "clamp(28px, 4vw, 44px)", margin: 0, color: "var(--ink)" }}>
          Menyusun cerita batik<br/>untukmu.
        </h1>

        <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 14, textAlign: "left", maxWidth: 380, margin: "48px auto 0" }}>
          {phases.map((p, i) => (
            <div key={i} style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "10px 16px",
              borderRadius: "var(--r-md)",
              background: i === phase ? "var(--paper)" : "transparent",
              border: `1px solid ${i === phase ? "var(--line)" : "transparent"}`,
              opacity: i > phase ? 0.4 : 1,
              transition: "all .4s"
            }}>
              <div style={{
                width: 22, height: 22,
                borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                background: i < phase ? "var(--sogan)" : "transparent",
                border: `1.5px solid ${i <= phase ? "var(--sogan)" : "var(--line)"}`,
                color: "var(--paper)",
                flexShrink: 0
              }}>
                {i < phase ? <Check/> : i === phase ? (
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--sogan)", animation: "pulse 1s ease-in-out infinite" }}/>
                ) : null}
              </div>
              <span style={{
                fontSize: 14,
                color: i === phase ? "var(--ink)" : "var(--ink-soft)",
                fontWeight: i === phase ? 500 : 400
              }}>{p}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spinRev { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.06); }
        }
      `}</style>
    </div>
  );
}

Object.assign(window, { LoadingPage });
