// ============================
// BATIK PERSONA — Quiz Questions
// ============================

const QUIZ = [
  {
    id: "gender",
    question: "Apa gender kamu?",
    subtitle: "Untuk membantu merekomendasikan padanan busana yang tepat.",
    options: [
      { label: "Laki-laki", value: "L", scores: {} },
      { label: "Perempuan", value: "P", scores: {} }
    ]
  },
  {
    id: "umur",
    question: "Berapa kisaran usia kamu?",
    subtitle: "Pilih kelompok yang paling dekat denganmu.",
    options: [
      { label: "Gen Z (18 – 24)", value: "18-24", scores: { ekspresif: 1 } },
      { label: "Muda (25 – 34)", value: "25-34", scores: { pencipta: 1 } },
      { label: "Mapan (35 – 49)", value: "35-49", scores: { pemimpin: 1 } },
      { label: "Bijak (50 – 60)", value: "50-60", scores: { elegan: 1 } },
      { label: "Senior (di atas 60)", value: "60+", scores: { elegan: 1, empatik: 1 } }
    ]
  },
  {
    id: "suasana",
    question: "Kamu paling nyaman di suasana yang seperti apa?",
    subtitle: "Tempat yang membuatmu kembali ke diri sendiri.",
    options: [
      { label: "Tenang dan damai", value: "tenang", scores: { empatik: 2 } },
      { label: "Ramai dan penuh aktivitas", value: "ramai", scores: { ekspresif: 2 } },
      { label: "Tertata dan elegan", value: "tertata", scores: { elegan: 2 } },
      { label: "Bebas dan kreatif", value: "bebas", scores: { pencipta: 2 } }
    ]
  },
  {
    id: "pertemanan",
    question: "Di lingkar pertemanan, kamu biasanya berperan sebagai…",
    subtitle: "Sosok yang biasanya kamu mainkan tanpa sadar.",
    options: [
      { label: "The lead — yang memimpin arah", value: "lead", scores: { pemimpin: 2 } },
      { label: "Yang punya ide segar", value: "ide", scores: { pencipta: 2 } },
      { label: "Penyemangat yang menjaga energi", value: "penyemangat", scores: { ekspresif: 2 } },
      { label: "Pembuat suasana hidup", value: "hidup", scores: { ekspresif: 1, empatik: 1 } }
    ]
  },
  {
    id: "diri",
    question: "Satu kata yang paling menggambarkan kamu?",
    subtitle: "Yang pertama terlintas, bukan yang ideal.",
    options: [
      { label: "Ambisius", value: "ambisius", scores: { pemimpin: 2 } },
      { label: "Empatik", value: "empatik", scores: { empatik: 2 } },
      { label: "Elegan", value: "elegan", scores: { elegan: 2 } },
      { label: "Ekspresif", value: "ekspresif", scores: { ekspresif: 2 } }
    ]
  },
  {
    id: "masalah",
    question: "Ketika menghadapi masalah, kamu cenderung…",
    subtitle: "Refleks pertamamu sebelum berpikir panjang.",
    options: [
      { label: "Langsung eksekusi, jalan dulu", value: "eksekusi", scores: { pemimpin: 2 } },
      { label: "Analisis dulu sebelum bergerak", value: "analisis", scores: { elegan: 2 } },
      { label: "Minta saran dari orang terdekat", value: "saran", scores: { empatik: 2 } },
      { label: "Ekspresikan lewat seni atau kreativitas", value: "seni", scores: { pencipta: 2 } }
    ]
  },
  {
    id: "ootd",
    question: "OOTD harian seperti apa yang paling kamu suka?",
    subtitle: "Gaya yang membuatmu paling percaya diri.",
    options: [
      { label: "All black, clean dan tegas", value: "black", scores: { elegan: 2 } },
      { label: "Earth tone, flowy dan soft", value: "earth", scores: { empatik: 2 } },
      { label: "Clean minimal, sedikit detail", value: "minimal", scores: { pemimpin: 2 } },
      { label: "Mix pattern vibrant", value: "vibrant", scores: { ekspresif: 1, pencipta: 1 } }
    ]
  },
  {
    id: "wisata",
    question: "Kalau berwisata kamu maunya ke mana?",
    subtitle: "Pilihan ideal—budget bukan masalah.",
    options: [
      { label: "Kota dengan sejarah panjang", value: "sejarah", scores: { elegan: 2 } },
      { label: "Kota dengan kekayaan alam", value: "alam", scores: { empatik: 2 } },
      { label: "Kota fashion, street food, aesthetic", value: "fashion", scores: { pencipta: 1, ekspresif: 1 } },
      { label: "Adventure ke berbagai destinasi", value: "adventure", scores: { pemimpin: 2 } }
    ]
  },
  {
    id: "playlist",
    question: "Playlist apa yang menemani waktu santaimu?",
    subtitle: "Pertanyaan terakhir.",
    options: [
      { label: "Mellow dreamy — indie atau acoustic", value: "indie", scores: { empatik: 2 } },
      { label: "Full energy — rock atau electronic", value: "rock", scores: { ekspresif: 2 } },
      { label: "Elegan — jazz atau instrumental", value: "jazz", scores: { elegan: 2 } },
      { label: "Random sesuai mood", value: "random", scores: { pencipta: 2 } }
    ]
  }
];

window.QUIZ = QUIZ;
