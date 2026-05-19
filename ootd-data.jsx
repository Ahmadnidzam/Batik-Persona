// ============================
// BATIK PERSONA — OOTD recommendations data
// ============================

// Build a Shopee search URL from a product name.
// (We can't link to specific products without real URLs, so we use
//  Shopee's search page which always shows live, in-stock results.)
const shopee = (q) => `https://shopee.co.id/search?keyword=${encodeURIComponent(q)}`;
const tokped = (q) => `https://www.tokopedia.com/search?st=product&q=${encodeURIComponent(q)}`;

// Each item: { name, price, brand, img, link, link2 }
//  - link  → Shopee search
//  - link2 → Tokopedia search (optional fallback)
const OOTD = {
  pemimpin: {
    outer: [
      { name: "Blazer Parang Sogan", price: "Rp 489.000", brand: "Wastrawastra", img: null, link: shopee("blazer batik parang sogan"), link2: tokped("blazer batik parang sogan") },
      { name: "Long Coat Parang Hitam", price: "Rp 625.000", brand: "Klasiq", img: null, link: shopee("long coat batik parang hitam"), link2: tokped("long coat batik parang") },
      { name: "Vest Parang Modern", price: "Rp 320.000", brand: "Wastrawastra", img: null, link: shopee("vest batik parang modern"), link2: tokped("vest batik parang") }
    ],
    kemeja: [
      { name: "Kemeja Parang Klasik", price: "Rp 285.000", brand: "Batik Keris", img: null, link: shopee("kemeja batik parang keris"), link2: tokped("kemeja batik parang keris") },
      { name: "Kemeja Parang Slim Fit", price: "Rp 245.000", brand: "Iwan Tirta Private Collection", img: null, link: shopee("kemeja batik parang slim fit"), link2: tokped("kemeja batik parang slim") },
      { name: "Kemeja Parang Lengan Pendek", price: "Rp 219.000", brand: "Danar Hadi", img: null, link: shopee("kemeja batik parang lengan pendek danar hadi"), link2: tokped("kemeja batik parang lengan pendek") }
    ],
    dress: [
      { name: "Midi Dress Parang", price: "Rp 419.000", brand: "Alleira Batik", img: null, link: shopee("midi dress batik parang alleira"), link2: tokped("midi dress batik parang") },
      { name: "Shift Dress Parang", price: "Rp 365.000", brand: "Sejauh Mata Memandang", img: null, link: shopee("shift dress batik parang"), link2: tokped("shift dress batik parang") },
      { name: "Wrap Dress Parang Tegas", price: "Rp 445.000", brand: "Wastrawastra", img: null, link: shopee("wrap dress batik parang"), link2: tokped("wrap dress batik parang") }
    ],
    rok: [
      { name: "Pencil Skirt Parang", price: "Rp 245.000", brand: "Klasiq", img: null, link: shopee("pencil skirt batik parang"), link2: tokped("pencil skirt batik parang") },
      { name: "A-line Skirt Parang Coklat", price: "Rp 219.000", brand: "Batik Keris", img: null, link: shopee("rok batik parang a-line coklat"), link2: tokped("rok batik parang a line") },
      { name: "Midi Skirt Parang Lipit", price: "Rp 265.000", brand: "Wastrawastra", img: null, link: shopee("midi skirt batik parang lipit"), link2: tokped("rok midi batik parang lipit") }
    ]
  },
  pencipta: {
    outer: [
      { name: "Kimono Mega Mendung", price: "Rp 425.000", brand: "Cita Tenun Indonesia", img: null, link: shopee("kimono batik mega mendung"), link2: tokped("kimono batik mega mendung") },
      { name: "Outer Mega Mendung Biru", price: "Rp 389.000", brand: "Sejauh Mata Memandang", img: null, link: shopee("outer batik mega mendung biru"), link2: tokped("outer batik mega mendung") },
      { name: "Cardigan Mega Mendung", price: "Rp 345.000", brand: "Wastrawastra", img: null, link: shopee("cardigan batik mega mendung"), link2: tokped("cardigan batik mega mendung") }
    ],
    kemeja: [
      { name: "Kemeja Mega Mendung", price: "Rp 295.000", brand: "Batik Trusmi", img: null, link: shopee("kemeja batik mega mendung trusmi"), link2: tokped("kemeja batik mega mendung") },
      { name: "Kemeja Awan Biru", price: "Rp 265.000", brand: "Danar Hadi", img: null, link: shopee("kemeja batik awan biru cirebon"), link2: tokped("kemeja batik cirebon biru") },
      { name: "Kemeja Cirebon Modern", price: "Rp 245.000", brand: "Alleira Batik", img: null, link: shopee("kemeja batik cirebon modern alleira"), link2: tokped("kemeja batik cirebon alleira") }
    ],
    dress: [
      { name: "Maxi Dress Mega Mendung", price: "Rp 489.000", brand: "Sejauh Mata Memandang", img: null, link: shopee("maxi dress batik mega mendung"), link2: tokped("maxi dress batik mega mendung") },
      { name: "Dress Awan Flowy", price: "Rp 425.000", brand: "Cita Tenun Indonesia", img: null, link: shopee("dress batik mega mendung flowy"), link2: tokped("dress batik mega mendung flowy") },
      { name: "Tiered Dress Mega Mendung", price: "Rp 459.000", brand: "Wastrawastra", img: null, link: shopee("tiered dress batik mega mendung"), link2: tokped("tiered dress batik mega mendung") }
    ],
    rok: [
      { name: "Long Skirt Mega Mendung", price: "Rp 289.000", brand: "Batik Trusmi", img: null, link: shopee("long skirt batik mega mendung"), link2: tokped("rok panjang batik mega mendung") },
      { name: "Pleated Skirt Awan", price: "Rp 265.000", brand: "Alleira Batik", img: null, link: shopee("rok plisket batik mega mendung"), link2: tokped("rok plisket batik mega mendung") },
      { name: "Wrap Skirt Cirebon", price: "Rp 245.000", brand: "Wastrawastra", img: null, link: shopee("wrap skirt batik cirebon"), link2: tokped("wrap skirt batik cirebon") }
    ]
  },
  elegan: {
    outer: [
      { name: "Blazer Sogan Tailored", price: "Rp 545.000", brand: "Iwan Tirta Private Collection", img: null, link: shopee("blazer batik sogan iwan tirta"), link2: tokped("blazer batik sogan tailored") },
      { name: "Long Coat Sogan", price: "Rp 685.000", brand: "Klasiq", img: null, link: shopee("long coat batik sogan"), link2: tokped("long coat batik sogan") },
      { name: "Outer Sogan Klasik", price: "Rp 419.000", brand: "Danar Hadi", img: null, link: shopee("outer batik sogan klasik danar hadi"), link2: tokped("outer batik sogan danar hadi") }
    ],
    kemeja: [
      { name: "Kemeja Sogan Lengan Panjang", price: "Rp 325.000", brand: "Iwan Tirta Private Collection", img: null, link: shopee("kemeja batik sogan lengan panjang iwan tirta"), link2: tokped("kemeja batik sogan iwan tirta") },
      { name: "Kemeja Sogan Klasik", price: "Rp 285.000", brand: "Batik Keris", img: null, link: shopee("kemeja batik sogan klasik keris"), link2: tokped("kemeja batik sogan keris") },
      { name: "Kemeja Sogan Slim", price: "Rp 265.000", brand: "Danar Hadi", img: null, link: shopee("kemeja batik sogan slim danar hadi"), link2: tokped("kemeja batik sogan slim") }
    ],
    dress: [
      { name: "Shift Dress Sogan", price: "Rp 489.000", brand: "Alleira Batik", img: null, link: shopee("shift dress batik sogan alleira"), link2: tokped("shift dress batik sogan") },
      { name: "Midi Dress Sogan Klasik", price: "Rp 445.000", brand: "Iwan Tirta Private Collection", img: null, link: shopee("midi dress batik sogan klasik"), link2: tokped("midi dress batik sogan klasik") },
      { name: "Wrap Dress Sogan Earth", price: "Rp 419.000", brand: "Klasiq", img: null, link: shopee("wrap dress batik sogan earth tone"), link2: tokped("wrap dress batik sogan earth tone") }
    ],
    rok: [
      { name: "Pencil Skirt Sogan", price: "Rp 285.000", brand: "Batik Keris", img: null, link: shopee("pencil skirt batik sogan keris"), link2: tokped("pencil skirt batik sogan") },
      { name: "Plisket Skirt Sogan", price: "Rp 265.000", brand: "Danar Hadi", img: null, link: shopee("rok plisket batik sogan danar hadi"), link2: tokped("rok plisket batik sogan") },
      { name: "Midi Skirt Sogan Klasik", price: "Rp 245.000", brand: "Klasiq", img: null, link: shopee("midi skirt batik sogan klasik"), link2: tokped("midi skirt batik sogan") }
    ]
  },
  empatik: {
    outer: [
      { name: "Cardigan Kawung Hangat", price: "Rp 385.000", brand: "Sejauh Mata Memandang", img: null, link: shopee("cardigan batik kawung"), link2: tokped("cardigan batik kawung") },
      { name: "Kimono Kawung Soft", price: "Rp 425.000", brand: "Cita Tenun Indonesia", img: null, link: shopee("kimono batik kawung soft"), link2: tokped("kimono batik kawung") },
      { name: "Outer Kawung Cream", price: "Rp 365.000", brand: "Wastrawastra", img: null, link: shopee("outer batik kawung cream"), link2: tokped("outer batik kawung cream") }
    ],
    kemeja: [
      { name: "Kemeja Kawung Klasik", price: "Rp 285.000", brand: "Batik Keris", img: null, link: shopee("kemeja batik kawung keris"), link2: tokped("kemeja batik kawung keris") },
      { name: "Kemeja Kawung Lembut", price: "Rp 265.000", brand: "Danar Hadi", img: null, link: shopee("kemeja batik kawung lembut"), link2: tokped("kemeja batik kawung danar hadi") },
      { name: "Blouse Kawung Earth", price: "Rp 245.000", brand: "Alleira Batik", img: null, link: shopee("blouse batik kawung earth tone"), link2: tokped("blouse batik kawung earth") }
    ],
    dress: [
      { name: "Maxi Dress Kawung Flowy", price: "Rp 459.000", brand: "Sejauh Mata Memandang", img: null, link: shopee("maxi dress batik kawung flowy"), link2: tokped("maxi dress batik kawung flowy") },
      { name: "Wrap Dress Kawung", price: "Rp 419.000", brand: "Cita Tenun Indonesia", img: null, link: shopee("wrap dress batik kawung"), link2: tokped("wrap dress batik kawung") },
      { name: "Midi Dress Kawung Soft", price: "Rp 389.000", brand: "Wastrawastra", img: null, link: shopee("midi dress batik kawung soft"), link2: tokped("midi dress batik kawung") }
    ],
    rok: [
      { name: "Long Skirt Kawung", price: "Rp 289.000", brand: "Alleira Batik", img: null, link: shopee("long skirt batik kawung"), link2: tokped("rok panjang batik kawung") },
      { name: "Pleated Skirt Kawung", price: "Rp 265.000", brand: "Batik Keris", img: null, link: shopee("rok plisket batik kawung keris"), link2: tokped("rok plisket batik kawung") },
      { name: "Wrap Skirt Kawung Earth", price: "Rp 245.000", brand: "Sejauh Mata Memandang", img: null, link: shopee("wrap skirt batik kawung earth tone"), link2: tokped("wrap skirt batik kawung") }
    ]
  },
  ekspresif: {
    outer: [
      { name: "Kimono Truntum Vibrant", price: "Rp 425.000", brand: "Wastrawastra", img: null, link: shopee("kimono batik truntum vibrant"), link2: tokped("kimono batik truntum") },
      { name: "Cardigan Truntum Bata", price: "Rp 385.000", brand: "Cita Tenun Indonesia", img: null, link: shopee("cardigan batik truntum merah bata"), link2: tokped("cardigan batik truntum") },
      { name: "Outer Truntum Statement", price: "Rp 419.000", brand: "Alleira Batik", img: null, link: shopee("outer batik truntum statement alleira"), link2: tokped("outer batik truntum alleira") }
    ],
    kemeja: [
      { name: "Kemeja Truntum Berani", price: "Rp 295.000", brand: "Batik Keris", img: null, link: shopee("kemeja batik truntum keris"), link2: tokped("kemeja batik truntum keris") },
      { name: "Blouse Truntum Statement", price: "Rp 275.000", brand: "Danar Hadi", img: null, link: shopee("blouse batik truntum danar hadi"), link2: tokped("blouse batik truntum") },
      { name: "Kemeja Truntum Modern", price: "Rp 265.000", brand: "Wastrawastra", img: null, link: shopee("kemeja batik truntum modern"), link2: tokped("kemeja batik truntum modern") }
    ],
    dress: [
      { name: "Maxi Dress Truntum", price: "Rp 489.000", brand: "Sejauh Mata Memandang", img: null, link: shopee("maxi dress batik truntum"), link2: tokped("maxi dress batik truntum") },
      { name: "Statement Dress Truntum", price: "Rp 445.000", brand: "Cita Tenun Indonesia", img: null, link: shopee("dress batik truntum statement"), link2: tokped("dress batik truntum statement") },
      { name: "Wrap Dress Truntum Bata", price: "Rp 419.000", brand: "Wastrawastra", img: null, link: shopee("wrap dress batik truntum bata"), link2: tokped("wrap dress batik truntum") }
    ],
    rok: [
      { name: "Long Skirt Truntum", price: "Rp 289.000", brand: "Alleira Batik", img: null, link: shopee("long skirt batik truntum"), link2: tokped("rok panjang batik truntum") },
      { name: "Plisket Skirt Truntum", price: "Rp 265.000", brand: "Batik Keris", img: null, link: shopee("rok plisket batik truntum keris"), link2: tokped("rok plisket batik truntum") },
      { name: "Midi Skirt Truntum Vibrant", price: "Rp 245.000", brand: "Danar Hadi", img: null, link: shopee("midi skirt batik truntum vibrant"), link2: tokped("midi skirt batik truntum") }
    ]
  }
};

// Full catalog — combined OOTD across all personas for shopping browse
function buildCatalog() {
  const items = [];
  Object.entries(OOTD).forEach(([persona, cats]) => {
    Object.entries(cats).forEach(([cat, list]) => {
      list.forEach((it, idx) => {
        items.push({
          ...it,
          id: `${persona}-${cat}-${idx}`,
          category: cat,
          persona,
          motif: window.BATIK_DATA.PERSONALITIES[persona].batik
        });
      });
    });
  });
  return items;
}

window.OOTD_DATA = OOTD;
window.CATALOG = buildCatalog();
