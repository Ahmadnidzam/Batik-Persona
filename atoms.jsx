// ============================
// BATIK PERSONA — UI Atoms
// ============================
const { useState, useEffect, useRef, useMemo, useCallback } = React;

// ---------- Logo ----------
function Logo({ size = 36, withText = true, mono = false }) {
  const ink = mono ? "currentColor" : "#2a1f12";
  const accent = mono ? "currentColor" : "#8b4f1f";
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" style={{ flexShrink: 0 }}>
        <rect x="0.5" y="0.5" width="39" height="39" rx="8" stroke={ink} strokeWidth="1" />
        <g transform="translate(20,20)">
          <rect x="-10" y="-10" width="20" height="20" transform="rotate(45)" fill="none" stroke={ink} strokeWidth="1.2" />
          <rect x="-5" y="-5" width="10" height="10" transform="rotate(45)" fill={accent} />
          <circle cx="0" cy="-10" r="1.4" fill={ink} />
          <circle cx="10" cy="0" r="1.4" fill={ink} />
          <circle cx="0" cy="10" r="1.4" fill={ink} />
          <circle cx="-10" cy="0" r="1.4" fill={ink} />
        </g>
      </svg>
      {withText &&
      <span style={{ ...{
          fontFamily: "var(--font-display)",
          fontSize: 22,
          color: ink,
          letterSpacing: "-0.01em",
          lineHeight: 1,
          fontWeight: 400,
          whiteSpace: "nowrap"
        }, color: "rgb(89, 56, 18)" }}>Batik Persona</span>
      }
    </div>);

}

// ---------- Batik motif SVG patterns ----------
function BatikPattern({ variant = "kawung", color = "#8b4f1f", opacity = 0.08, size = 60 }) {
  const id = `pat-${variant}-${Math.random().toString(36).slice(2, 8)}`;
  const patterns = {
    kawung:
    <pattern id={id} x="0" y="0" width={size} height={size} patternUnits="userSpaceOnUse">
        <circle cx={size / 2} cy="0" r={size / 4} fill="none" stroke={color} strokeWidth="1" />
        <circle cx="0" cy={size / 2} r={size / 4} fill="none" stroke={color} strokeWidth="1" />
        <circle cx={size} cy={size / 2} r={size / 4} fill="none" stroke={color} strokeWidth="1" />
        <circle cx={size / 2} cy={size} r={size / 4} fill="none" stroke={color} strokeWidth="1" />
        <circle cx={size / 2} cy={size / 2} r="1.2" fill={color} />
      </pattern>,

    parang:
    <pattern id={id} x="0" y="0" width={size} height={size} patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <line x1="0" y1={size / 3} x2={size} y2={size / 3} stroke={color} strokeWidth="1" />
        <line x1="0" y1={2 * size / 3} x2={size} y2={2 * size / 3} stroke={color} strokeWidth="1" />
      </pattern>,

    dots:
    <pattern id={id} x="0" y="0" width={size / 3} height={size / 3} patternUnits="userSpaceOnUse">
        <circle cx={size / 6} cy={size / 6} r="1" fill={color} />
      </pattern>,

    truntum:
    <pattern id={id} x="0" y="0" width={size} height={size} patternUnits="userSpaceOnUse">
        <g transform={`translate(${size / 2},${size / 2})`}>
          <path d={`M0,-6 L1.5,-1.5 L6,0 L1.5,1.5 L0,6 L-1.5,1.5 L-6,0 L-1.5,-1.5 Z`} fill="none" stroke={color} strokeWidth="0.8" />
          <circle cx="0" cy="0" r="1" fill={color} />
        </g>
      </pattern>

  };
  return (
    <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity, pointerEvents: "none" }}>
      <defs>{patterns[variant]}</defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>);

}

// ---------- Reveal-on-scroll wrapper ----------
function Reveal({ children, delay = 0, as: Tag = "div", className = "", style = {} }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => el.classList.add("in"), delay);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return <Tag ref={ref} className={`reveal ${className}`} style={style}>{children}</Tag>;
}

// ---------- Placeholder image ----------
function Placeholder({ label = "image", aspect = "4/5", style = {} }) {
  return (
    <div className="placeholder" style={{ aspectRatio: aspect, width: "100%", ...style }}>
      <span>{label}</span>
    </div>);

}

// ---------- Arrow icon ----------
const Arrow = (p) =>
<svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" {...p}>
    <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>;


const Check = (p) =>
<svg width="14" height="14" viewBox="0 0 14 14" fill="none" {...p}>
    <path d="M2 7l3.5 3.5L12 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>;


Object.assign(window, { Logo, BatikPattern, Reveal, Placeholder, Arrow, Check });