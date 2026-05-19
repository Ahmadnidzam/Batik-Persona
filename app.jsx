// ============================
// BATIK PERSONA — App Shell
// ============================

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "primaryColor": "#5c3a1e",
  "terracotta": "#8b4f1f",
  "headingFont": "Instrument Serif",
  "darkMode": false
}/*EDITMODE-END*/;

// Curated dark-brown palette options (sogan / coffee / espresso family)
const PRIMARY_OPTIONS = [
  "#5c3a1e", // sogan deep — default
  "#3a2418", // espresso
  "#6b3410", // deep cocoa
  "#7a4a26", // walnut
  "#4a2c17"  // dark coffee
];

const TERRACOTTA_OPTIONS = [
  "#8b4f1f", // warm clay
  "#b5704a", // soft terracotta
  "#9d5a2e", // rust
  "#6b4226"  // deep wood
];

const HEADING_FONT_OPTIONS = [
  "Instrument Serif",
  "Cormorant Garamond",
  "Playfair Display",
  "Geist"
];

function App() {
  const [t, setTweak] = window.useTweaks(TWEAK_DEFAULTS);
  const [route, setRoute] = useState({ name: "home" });
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [routeKey, setRouteKey] = useState(0);

  const navigate = (next) => {
    setRoute(next);
    setRouteKey((k) => k + 1);
  };

  // Apply tweaked colors to CSS variables
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--sogan", t.primaryColor);
    root.style.setProperty("--terracotta", t.terracotta);

    if (t.darkMode) {
      root.style.setProperty("--bg", "#1a130a");
      root.style.setProperty("--bg-soft", "#221a0f");
      root.style.setProperty("--bg-deep", "#2a2014");
      root.style.setProperty("--paper", "#241a10");
      root.style.setProperty("--ink", "#f3ede2");
      root.style.setProperty("--ink-soft", "#d4c5a8");
      root.style.setProperty("--ink-mute", "#9d8b6f");
      root.style.setProperty("--line", "#3d2d1a");
      root.style.setProperty("--line-soft", "#332514");
      root.style.setProperty("--cream", "#2a2014");
    } else {
      root.style.removeProperty("--bg");
      root.style.removeProperty("--bg-soft");
      root.style.removeProperty("--bg-deep");
      root.style.removeProperty("--paper");
      root.style.removeProperty("--ink");
      root.style.removeProperty("--ink-soft");
      root.style.removeProperty("--ink-mute");
      root.style.removeProperty("--line");
      root.style.removeProperty("--line-soft");
      root.style.removeProperty("--cream");
    }
  }, [t.primaryColor, t.terracotta, t.darkMode]);

  // Apply heading font
  useEffect(() => {
    const family = `"${t.headingFont}", "Cormorant Garamond", Georgia, serif`;
    document.documentElement.style.setProperty("--font-display", family);
  }, [t.headingFont]);

  // Guard: if user lands on hasil without result, redirect home
  useEffect(() => {
    if (route.name === "hasil" && !result) navigate({ name: "home" });
  }, [route.name]);

  const renderRoute = () => {
    switch (route.name) {
      case "home":
        return <Landing navigate={navigate} />;
      case "quiz":
        return <QuizPage navigate={navigate} answers={answers} setAnswers={setAnswers} />;
      case "loading":
        return <LoadingPage navigate={navigate} answers={answers} setResult={setResult} />;
      case "hasil":
        return <ResultPage navigate={navigate} result={result} answers={answers} />;
      case "katalog":
        return <KatalogPage navigate={navigate} route={route} />;
      case "about":
        return <AboutPage navigate={navigate} />;
      default:
        return <Landing navigate={navigate} />;
    }
  };

  const hideHeader = route.name === "loading";
  const { TweaksPanel, TweakSection, TweakColor, TweakSelect, TweakToggle } = window;

  return (
    <div data-screen-label={`Batik Persona — ${route.name}`}>
      {!hideHeader && <Header route={route} navigate={navigate} />}
      <main key={routeKey}>
        {renderRoute()}
      </main>
      {route.name !== "loading" && route.name !== "quiz" && <Footer navigate={navigate} />}

      <TweaksPanel title="Tweaks">
        <TweakSection label="Warna Primer" />
        <TweakColor
          label="Aksen utama"
          value={t.primaryColor}
          options={PRIMARY_OPTIONS}
          onChange={(v) => setTweak("primaryColor", v)}
        />
        <TweakColor
          label="Aksen kedua"
          value={t.terracotta}
          options={TERRACOTTA_OPTIONS}
          onChange={(v) => setTweak("terracotta", v)}
        />

        <TweakSection label="Tampilan" />
        <TweakSelect
          label="Font heading"
          value={t.headingFont}
          options={HEADING_FONT_OPTIONS}
          onChange={(v) => setTweak("headingFont", v)}
        />
        <TweakToggle
          label="Dark mode"
          value={t.darkMode}
          onChange={(v) => setTweak("darkMode", v)}
        />
      </TweaksPanel>
    </div>);

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
