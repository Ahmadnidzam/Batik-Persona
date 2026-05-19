// ============================
// BATIK PERSONA — Data
// ============================

const BATIK_TYPES = [
  { name: "Parang Rusak", origin: "Yogyakarta", note: "Garis diagonal melambangkan ketangguhan.", img: "uploads/IMG_0976.jpeg" },
  { name: "Mega Mendung", origin: "Cirebon", note: "Awan biru yang menenangkan, simbol kesabaran.", img: "uploads/28cd572a-35db-4737-9494-5bb9ed2b2334.jpeg" },
  { name: "Kawung", origin: "Yogyakarta", note: "Empat lingkaran—keseimbangan dan kesucian.", img: "uploads/1eaae1a9-af6d-4293-bc27-6ed9078299d0.jpeg" },
  { name: "Sogan Klasik", origin: "Surakarta", note: "Coklat tanah, tenang dan berwibawa.", img: "uploads/IMG_0980.jpeg" },
  { name: "Truntum", origin: "Surakarta", note: "Bintang kecil yang tumbuh—cinta yang kembali.", img: "uploads/02b552bd-f061-4a76-bebc-58c4622d41a9.jpeg" },
  { name: "Sidomukti", origin: "Yogyakarta", note: "Doa kemakmuran dan keteraturan hidup.", img: "uploads/IMG_0981.jpeg" }
];

const PERSONALITIES = {
  pemimpin: {
    key: "pemimpin",
    title: "Sang Pemimpin",
    batik: "Parang Rusak",
    origin: "Yogyakarta",
    tagline: "Tegas, terarah, dan tidak takut memulai.",
    description: "Kamu adalah orang yang memimpin tanpa harus berteriak. Garis-garis diagonal Parang Rusak mencerminkan ritme kerjamu—konsisten, mengalir, dan punya tujuan. Orang lain melihatmu sebagai sosok yang dapat diandalkan untuk mengambil keputusan ketika yang lain ragu.",
    palette: ["#3a2a1c", "#8b4f1f", "#c89855", "#efe5d0", "#f3ede2"],
    paletteNames: ["Coklat Sogan", "Coklat Tanah", "Emas Tua", "Krim Hangat", "Pasir"]
  },
  pencipta: {
    key: "pencipta",
    title: "Sang Pencipta",
    batik: "Mega Mendung",
    origin: "Cirebon",
    tagline: "Bebas, imajinatif, penuh warna.",
    description: "Pikiranmu seperti awan Mega Mendung—berlapis, dinamis, dan selalu bergerak. Kamu menemukan keindahan di tempat yang tidak dilihat orang lain, dan kamu berani mencampur hal yang tampak tidak cocok menjadi karya yang utuh.",
    palette: ["#2f3a5c", "#5a7aa8", "#c8d4e8", "#efe5d0", "#b5704a"],
    paletteNames: ["Indigo Tua", "Biru Awan", "Kabut Pagi", "Krim Lembut", "Terakota"]
  },
  elegan: {
    key: "elegan",
    title: "Sang Elegan",
    batik: "Sogan Klasik",
    origin: "Surakarta",
    tagline: "Tenang, tertata, berwibawa.",
    description: "Sogan Klasik memilihmu karena kamu paham bahwa elegansi tidak butuh banyak bicara. Pilihanmu terukur, langkahmu pelan tapi pasti, dan kamu lebih suka satu hal yang berkualitas dibanding sepuluh yang biasa.",
    palette: ["#2a1f12", "#6b4a2e", "#a98255", "#e8dec8", "#faf6ec"],
    paletteNames: ["Hitam Sogan", "Coklat Kayu", "Karamel", "Gading", "Putih Susu"]
  },
  empatik: {
    key: "empatik",
    title: "Sang Empatik",
    batik: "Kawung",
    origin: "Yogyakarta",
    tagline: "Hangat, mendengar, menjaga.",
    description: "Empat lingkaran Kawung adalah keseimbangan—dan begitulah kamu di tengah orang lain. Kamu mendengar sebelum bicara, dan orang merasa aman ketika berada di dekatmu. Kelembutanmu adalah kekuatan yang sering disalahpahami sebagai kepasrahan.",
    palette: ["#4a3826", "#9d7a4f", "#d4b88c", "#f3ede2", "#c8a87c"],
    paletteNames: ["Coklat Akar", "Madu", "Pasir Hangat", "Krim", "Tembaga"]
  },
  ekspresif: {
    key: "ekspresif",
    title: "Sang Ekspresif",
    batik: "Truntum",
    origin: "Surakarta",
    tagline: "Hidup, ceria, tidak bisa diam.",
    description: "Truntum adalah bintang yang tumbuh kembali, dan begitulah energimu—selalu pulih, selalu menyala. Kamu adalah orang yang membuat ruangan terasa lebih ramai dan lebih hangat hanya dengan masuk ke dalamnya.",
    palette: ["#8b3a1f", "#b5704a", "#e3a86b", "#f6e4c4", "#2a1f12"],
    paletteNames: ["Merah Bata", "Terakota", "Jingga Pasir", "Krim Emas", "Tinta"]
  }
};

window.BATIK_DATA = { BATIK_TYPES, PERSONALITIES };
