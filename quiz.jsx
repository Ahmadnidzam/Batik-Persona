// ============================
// BATIK PERSONA — Quiz Flow
// ============================

function QuizPage({ navigate, answers, setAnswers }) {
  const [step, setStep] = useState(0);
  const total = window.QUIZ.length;
  const q = window.QUIZ[step];
  const current = answers[q.id];

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [step]);

  const pick = (opt) => {
    setAnswers({ ...answers, [q.id]: opt.value });
    setTimeout(() => {
      if (step < total - 1) setStep(step + 1);
      else navigate({ name: "loading" });
    }, 350);
  };

  const progress = ((step + (current ? 1 : 0)) / total) * 100;

  return (
    <div className="route-wrapper" style={{ minHeight: "100vh", paddingTop: 110, paddingBottom: 80, background: "var(--bg)" }}>
      <BatikPattern variant="kawung" color="#8b4f1f" opacity={0.04} size={120}/>

      <div className="container" style={{ position: "relative", maxWidth: 880 }}>
        {/* Progress bar */}
        <div style={{ marginBottom: 56 }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 14,
            alignItems: "center"
          }}>
            <div className="eyebrow">Pertanyaan {String(step + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</div>
            <button
              onClick={() => step > 0 ? setStep(step - 1) : navigate({ name: "home" })}
              style={{
                fontSize: 13,
                color: "var(--ink-mute)",
                display: "inline-flex",
                alignItems: "center",
                gap: 6
              }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M11 6H1M5 1L1 6l4 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {step > 0 ? "Kembali" : "Batal"}
            </button>
          </div>

          <div style={{
            height: 6,
            background: "var(--bg-deep)",
            borderRadius: 999,
            overflow: "hidden",
            position: "relative"
          }}>
            <div style={{
              position: "absolute",
              inset: 0,
              width: `${progress}%`,
              background: "linear-gradient(90deg, var(--sogan), var(--terracotta))",
              borderRadius: 999,
              transition: "width .55s cubic-bezier(.2,.7,.2,1)"
            }}/>
          </div>

          {/* Step dots */}
          <div style={{ display: "flex", gap: 6, marginTop: 14, flexWrap: "wrap" }}>
            {Array.from({ length: total }).map((_, i) => (
              <div key={i} style={{
                flex: 1,
                minWidth: 16,
                height: 3,
                borderRadius: 999,
                background: i <= step ? "var(--sogan)" : "var(--line)",
                transition: "background .4s"
              }}/>
            ))}
          </div>
        </div>

        {/* Question */}
        <div key={step} style={{ animation: "qFade .5s cubic-bezier(.2,.7,.2,1)" }}>
          <h1 className="display" style={{ fontSize: "clamp(32px, 4.5vw, 56px)", margin: 0, color: "var(--ink)", letterSpacing: "-0.01em" }}>
            {q.question}
          </h1>
          {q.subtitle && (
            <p className="lead" style={{ marginTop: 16, color: "var(--ink-mute)" }}>{q.subtitle}</p>
          )}

          <div style={{
            marginTop: 44,
            display: "grid",
            gridTemplateColumns: q.options.length <= 2 ? "repeat(2, 1fr)" : "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 14
          }}>
            {q.options.map((opt, i) => {
              const active = current === opt.value;
              return (
                <button
                  key={opt.value}
                  onClick={() => pick(opt)}
                  style={{
                    textAlign: "left",
                    padding: "22px 24px",
                    background: active ? "var(--ink)" : "var(--paper)",
                    color: active ? "var(--paper)" : "var(--ink)",
                    border: `1px solid ${active ? "var(--ink)" : "var(--line)"}`,
                    borderRadius: "var(--r-lg)",
                    fontSize: 16,
                    fontWeight: 500,
                    transition: "all .25s cubic-bezier(.2,.7,.2,1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    animation: `optIn .6s cubic-bezier(.2,.7,.2,1) ${i * 0.06}s both`
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      e.currentTarget.style.borderColor = "var(--sogan)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "var(--shadow-md)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      e.currentTarget.style.borderColor = "var(--line)";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <span style={{
                      width: 28, height: 28,
                      borderRadius: "50%",
                      border: `1px solid ${active ? "var(--paper)" : "var(--line)"}`,
                      display: "inline-flex",
                      alignItems: "center", justifyContent: "center",
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      flexShrink: 0
                    }}>
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span>{opt.label}</span>
                  </span>
                  {active && <Check/>}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes qFade {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes optIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

// ============================
// Scoring helper
// ============================
function computePersona(answers) {
  const scores = { pemimpin: 0, pencipta: 0, elegan: 0, empatik: 0, ekspresif: 0 };
  window.QUIZ.forEach(q => {
    const val = answers[q.id];
    if (!val) return;
    const opt = q.options.find(o => o.value === val);
    if (!opt) return;
    Object.entries(opt.scores || {}).forEach(([k, v]) => { scores[k] = (scores[k] || 0) + v; });
  });
  const top = Object.entries(scores).sort((a, b) => b[1] - a[1])[0];
  return top ? top[0] : "elegan";
}

Object.assign(window, { QuizPage, computePersona });
