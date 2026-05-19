// ============================
// BATIK PERSONA — Feedback + Share Modal
// ============================

function FeedbackSection({ navigate }) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submit = () => {
    if (rating === 0) return;
    setSubmitted(true);
    setTimeout(() => navigate({ name: "katalog" }), 1400);
  };

  if (submitted) {
    return (
      <section className="section" style={{ background: "var(--paper)", borderTop: "1px solid var(--line)" }}>
        <div className="container" style={{ maxWidth: 560, textAlign: "center" }}>
          <div style={{
            width: 64, height: 64,
            borderRadius: "50%",
            background: "var(--sogan)",
            color: "var(--paper)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px",
            animation: "pop .5s cubic-bezier(.2,.7,.2,1)"
          }}>
            <svg width="28" height="28" viewBox="0 0 14 14" fill="none">
              <path d="M2 7l3.5 3.5L12 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="display" style={{ fontSize: 36, margin: 0 }}>Terima kasih.</h2>
          <p style={{ marginTop: 12, color: "var(--ink-soft)" }}>
            Feedback kamu membantu kami menyempurnakan rekomendasi untuk pengguna selanjutnya. Mengarahkan ke katalog…
          </p>
          <style>{`@keyframes pop { from { transform: scale(0); } to { transform: scale(1); } }`}</style>
        </div>
      </section>
    );
  }

  return (
    <section className="section" style={{ background: "var(--paper)", borderTop: "1px solid var(--line)" }}>
      <div className="container" style={{ maxWidth: 720 }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <div className="eyebrow" style={{ marginBottom: 14 }}>Bagikan Pengalamanmu</div>
            <h2 className="display" style={{ fontSize: "clamp(32px, 4vw, 48px)", margin: 0 }}>
              Sudah pas dengan <em style={{ color: "var(--sogan)", fontStyle: "italic" }}>kamu?</em>
            </h2>
            <p style={{ marginTop: 14, color: "var(--ink-soft)", maxWidth: 480, margin: "14px auto 0" }}>
              Beri tahu kami pendapatmu — atau langsung lanjut ke katalog kalau sedang buru-buru.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div style={{
            background: "var(--bg)",
            border: "1px solid var(--line)",
            borderRadius: "var(--r-lg)",
            padding: 32
          }}>
            <div style={{ marginBottom: 24 }}>
              <div className="eyebrow" style={{ marginBottom: 12 }}>Rating</div>
              <div style={{ display: "flex", gap: 6 }}>
                {[1,2,3,4,5].map(n => (
                  <button
                    key={n}
                    onClick={() => setRating(n)}
                    onMouseEnter={() => setHoverRating(n)}
                    onMouseLeave={() => setHoverRating(0)}
                    style={{ padding: 4 }}
                  >
                    <svg width="32" height="32" viewBox="0 0 16 16"
                      fill={(hoverRating || rating) >= n ? "var(--gold)" : "none"}
                      stroke="var(--gold)" strokeWidth="1.2"
                      style={{ transition: "all .2s", transform: hoverRating === n ? "scale(1.15)" : "scale(1)" }}
                    >
                      <path d="M8 1.5l1.95 3.95 4.35.63-3.15 3.07.74 4.33L8 11.42l-3.89 2.06.74-4.33-3.15-3.07 4.35-.63L8 1.5z"/>
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: 24 }}>
              <div className="eyebrow" style={{ marginBottom: 12 }}>Ceritakan (Opsional)</div>
              <textarea
                className="textarea"
                placeholder="Bagaimana pengalamanmu mengisi kuis ini? Apakah hasilnya cocok?"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button
                className="btn btn-primary"
                onClick={submit}
                disabled={rating === 0}
                style={{ opacity: rating === 0 ? 0.4 : 1, pointerEvents: rating === 0 ? "none" : "auto" }}
              >
                Submit Feedback <Arrow/>
              </button>
              <button className="btn btn-ghost" onClick={() => navigate({ name: "katalog" })}>
                Lanjut Belanja Tanpa Feedback
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ---------- Share Modal ----------
function ShareModal({ persona, onClose }) {
  const [copied, setCopied] = useState(false);
  const url = "https://ahmadnidzam.github.io/Batik-Persona/#" + persona.key;
  const text = `Saya adalah ${persona.title} — batik padananku adalah ${persona.batik}! Cek punyamu di Batik Persona.`;

  const channels = [
    { id: "whatsapp", label: "WhatsApp", color: "#25D366", url: `https://wa.me/?text=${encodeURIComponent(text + " " + url)}` },
    { id: "twitter", label: "X / Twitter", color: "#1d1d1d", url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}` },
    { id: "facebook", label: "Facebook", color: "#1877F2", url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}` },
    { id: "telegram", label: "Telegram", color: "#26A5E4", url: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}` },
    { id: "instagram", label: "Instagram", color: "#E4405F", url: "#" },
    { id: "email", label: "Email", color: "#7a6650", url: `mailto:?subject=${encodeURIComponent("Persona Batik-ku")}&body=${encodeURIComponent(text + " " + url)}` }
  ];

  const copy = () => {
    navigator.clipboard?.writeText(url + " — " + text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 200,
        background: "rgba(42,31,18,0.55)",
        backdropFilter: "blur(8px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 20,
        animation: "fadeIn .3s ease"
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--paper)",
          borderRadius: "var(--r-lg)",
          padding: 32,
          maxWidth: 480,
          width: "100%",
          boxShadow: "var(--shadow-lg)",
          animation: "modalUp .4s cubic-bezier(.2,.7,.2,1)",
          position: "relative"
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: 16, right: 16,
            width: 32, height: 32,
            borderRadius: "50%",
            border: "1px solid var(--line)",
            display: "flex", alignItems: "center", justifyContent: "center"
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="eyebrow" style={{ marginBottom: 12 }}>Bagikan Hasil</div>
        <h3 className="display" style={{ fontSize: 28, margin: 0, marginBottom: 8 }}>
          Pamerkan {persona.title.toLowerCase()}<br/>kamu.
        </h3>
        <p style={{ fontSize: 14, color: "var(--ink-soft)", margin: 0, marginBottom: 24 }}>
          Pilih platform untuk membagikan hasil personalitas batik kamu.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 10,
          marginBottom: 20
        }}>
          {channels.map(c => (
            <a
              key={c.id}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "16px 8px",
                background: "var(--bg)",
                border: "1px solid var(--line)",
                borderRadius: "var(--r-md)",
                textDecoration: "none",
                color: "var(--ink)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
                fontSize: 12,
                transition: "all .25s"
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.borderColor = c.color; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "var(--line)"; }}
            >
              <div style={{
                width: 36, height: 36,
                borderRadius: "50%",
                background: c.color,
                color: "white",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: 600,
                fontFamily: "var(--font-display)",
                fontSize: 16
              }}>{c.label.charAt(0)}</div>
              <span>{c.label}</span>
            </a>
          ))}
        </div>

        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "10px 14px",
          background: "var(--bg)",
          border: "1px solid var(--line)",
          borderRadius: "var(--r-md)"
        }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--ink-soft)", flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{url}</span>
          <button
            onClick={copy}
            style={{
              padding: "6px 12px",
              background: copied ? "var(--sogan)" : "var(--ink)",
              color: "var(--paper)",
              borderRadius: "var(--r-pill)",
              fontSize: 12,
              fontWeight: 500,
              transition: "background .25s"
            }}
          >{copied ? "Tersalin" : "Salin"}</button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes modalUp { from { opacity: 0; transform: translateY(20px) scale(0.96); } to { opacity: 1; transform: translateY(0) scale(1); } }
      `}</style>
    </div>
  );
}

Object.assign(window, { FeedbackSection, ShareModal });
