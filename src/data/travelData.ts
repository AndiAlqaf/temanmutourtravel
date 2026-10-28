export interface UmrahPackage {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  priceFormatted: string;
  priceNumber: number;
  featured?: boolean;
  idealFor: string;
  description: string;
  highlights: string[];
  inclusions: string[];
  options: {
    title: string;
    price: string;
  }[];
  transport: string;
  hotel: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  type: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  location: string;
  category: string;
  src: string;
  caption: string;
  tag?: string;
}

export const TRAVEL_INFO = {
  name: "TEMANMU TOUR & TRAVEL",
  tagline: "Temanmu Beribadah, Temanmu Menuju Surga",
  subTagline: "Bukan sekadar travel. Kami adalah teman perjalanan menuju Baitullah.",
  establishedYear: 2021,
  phone: "+62 812-1455-8707",
  whatsappNumber: "6281214558707",
  instagram: "@temanmutourtravel",
  instagramUrl: "https://www.instagram.com/temanmutourtravel",
  facebook: "@temanmutourtravel",
  legalPartner: "PT Fastabiqul Khairat (Fast Travel)",
  legalPpiu: "212210042780001",
  officeAddress: "Jl. Rusa No. 35, Sengkang, Kab. Wajo, Sulawesi Selatan",
  whatsappUrl: "https://wa.me/6281214558707",
  promoStartCity: "Makassar",
  airlines: "Saudia & Garuda Indonesia",
};

export const VALUE_PROPOSITIONS = [
  {
    code: "01",
    title: "MUDAH",
    subtitle: "Praktis & Terkoordinasi",
    description:
      "Pengalaman sebagai fasilitator umrah membuat proses administrasi, paspor, visa, akomodasi, tiket pesawat, dan transportasi dipersiapkan dengan rapi tanpa membebani Anda.",
    icon: "Compass",
  },
  {
    code: "02",
    title: "NYAMAN",
    subtitle: "Hangat Penuh Kekeluargaan",
    description:
      "Mengutamakan pelayanan yang dekat, personal, dan penuh rasa persaudaraan. Anda tidak sekadar diposisikan sebagai rombongan perjalanan, melainkan sebagai keluarga yang kami dampingi sepenuh hati.",
    icon: "HeartHandshake",
  },
  {
    code: "03",
    title: "AMAN",
    subtitle: "Berpengalaman & Legalitas PPIU Resmi",
    description:
      "Didukung rekam jejak tim dalam mendampingi jamaah sejak 2021 serta jejaring pelayanan ASEAN, berkolaborasi dengan PT Fastabiqul Khairat (Izin PPIU: 212210042780001).",
    icon: "ShieldCheck",
  },
  {
    code: "04",
    title: "PERSONAL",
    subtitle: "Your Journey, Your Way",
    description:
      "Tidak harus terikat jadwal massal ratusan orang. Berangkat berdua bersama pasangan, bertiga bersama keluarga kecil, maupun rombongan khusus dengan ritme yang Anda tentukan sendiri.",
    icon: "Users",
  },
];

export const PRIVATE_CONCEPTS = [
  {
    category: "Pasangan (2 Orang)",
    tag: "Intimate Journey",
    title: "Ibadah Berdua Membangun Keharmonisan",
    description:
      "Perjalanan sakral berdua tanpa distraksi jadwal kaku rombongan besar. Nikmati momen tawaf dan munajat di Baitullah berdua bersama pasangan hidup dalam ketenangan.",
    features: [
      "Jadwal fleksibel sesuai waktu luang berdua",
      "Kamar private double room",
      "Pendampingan mutawwif privat yang santun",
    ],
  },
  {
    category: "Keluarga Kecil (3 - 5 Orang)",
    tag: "Family Harmony",
    title: "Kenyamanan Anak & Orang Tercinta",
    description:
      "Membawa anak atau anggota keluarga inti tanpa rasa cemas tertinggal bus besar. Waktu istirahat dan ibadah dapat disesuaikan dengan stamina anggota keluarga.",
    features: [
      "Mobil privat keluarga (Hyundai / GMC)",
      "Pilihan kamar triple / quad nyaman",
      "Eksplorasi tempat bersejarah dengan santai",
    ],
  },
  {
    category: "Bakti Orang Tua",
    tag: "Precious Gift",
    title: "Hadiah Terbaik Menuju Tanah Suci",
    description:
      "Wujudkan impian mengantar ayah dan ibu ke Baitullah dengan perhatian istimewa. Kami menyediakan asistensi fisik, pendampingan kursi roda, dan hotel dekat pelataran masjid.",
    features: [
      "Akses kursi roda & pendampingan tawaf",
      "Hotel jarak dekat dengan akses mudah",
      "Penanganan medis dan obat-obatan pribadi",
    ],
  },
  {
    category: "Group & Komunitas",
    tag: "Tailored Community",
    title: "Majelis Taklim, Komunitas & Keluarga Besar",
    description:
      "Konsep sederhana: Keinginan berbanding lurus dengan kebutuhan. Semakin spesifik kebutuhan rombongan Anda, semakin detail fasilitas dan kajian yang kami siapkan.",
    features: [
      "Kajian privat eksklusif bersama asatidz",
      "Bus eksekutif eksklusif satu rombongan",
      "Spesial merchandise & seragam koordinasi",
    ],
  },
];

export const PACKAGES: UmrahPackage[] = [
  {
    id: "private-economic",
    name: "Paket Private Economic",
    badge: "Fleksibel & Hemat",
    tagline: "Private Umrah, Made Accessible",
    priceFormatted: "Rp 35.000.000",
    priceNumber: 35000000,
    featured: false,
    idealFor: "Pasangan atau keluarga yang ingin privasi tinggi dengan budget cerdas & efisien",
    description:
      "Solusi umrah private tanpa harus menunggu kuota rombongan besar. Tetap mendapatkan fasilitas privat mobil Hyundai, tiket pesawat PP, dan pendampingan ibadah intensif.",
    highlights: [
      "Private tanpa rombongan besar",
      "Transportasi Mobil Hyundai Privat",
      "2x Pelaksanaan Umrah & 2x Raudhah",
      "City Tour Makkah & Madinah Lengkap",
    ],
    inclusions: [
      "Tiket pesawat ekonomi pulang-pergi (PP)",
      "Mobil Hyundai privat selama di Arab Saudi",
      "Hotel Bintang 3 strategis di Makkah & Madinah",
      "Hotel transit Makassar & Jakarta",
      "Handling bandara Makassar, Jakarta hingga Saudi",
      "Penjemputan bandara & Welcome Drink",
      "Air Zamzam kemasan resmi",
      "Manasik intensif online & offline",
      "Bimbingan paspor & vaksin sesuai ketentuan",
      "Dua (2) kali pelaksanaan ibadah Umrah",
      "Dua (2) kali reservasi akses Raudhah Madinah",
      "City Tour Makkah & Madinah",
      "Kunjungan Museum Masjid Ash-Shofiyah Madinah",
      "Kunjungan Museum Al-Wahyu Makkah & Jabal Khandamah",
      "Snack spesial selama city tour",
    ],
    options: [
      { title: "Cafe Moment Clock Tower Makkah", price: "+Rp 1.000.000 / orang" },
      { title: "Upgrade Kamar View Ka'bah", price: "+Rp 3.000.000 / orang" },
      { title: "Perlengkapan Umrah Temanmu", price: "Opsional / Sesuai Permintaan" },
    ],
    transport: "Mobil Hyundai Privat (Dedicated)",
    hotel: "Hotel Bintang 3 Pilihan Nyaman & Bersih",
  },
  {
    id: "silver",
    name: "Paket Silver",
    badge: "Paling Diminati",
    tagline: "Premium Umrah Experience",
    priceFormatted: "Rp 53.000.000",
    priceNumber: 53000000,
    featured: true,
    idealFor: "Keluarga & jamaah yang menginginkan kenyamanan prima dengan Kereta Cepat Haramain & SUV GMC",
    description:
      "Paket favorit dengan kenyamanan berlebih. Didukung transportasi eksekutif SUV GMC di Tanah Suci dan pengalaman Kereta Cepat Haramain Jeddah-Madinah-Makkah yang hemat waktu.",
    highlights: [
      "SUV GMC Eksekutif Privat",
      "Termasuk Kereta Cepat Haramain 1x",
      "Akomodasi Hotel Nyaman & Dekat",
      "Museum Ash-Shofiyah, Al-Wahyu & Jabal Khandamah",
    ],
    inclusions: [
      "Tiket pesawat PP (Saudia / Garuda Indonesia)",
      "Transportasi privat GMC Eksekutif",
      "Tiket Kereta Cepat Haramain (1 kali perjalanan)",
      "Hotel & akomodasi pilihan premium",
      "Hotel transit Makassar & Jakarta",
      "Handling bandara Makassar, Jakarta hingga Saudi",
      "Penjemputan bandara & Welcome drink segar",
      "Air Zamzam kemasan resmi",
      "Manasik online & offline terpadu",
      "Asistensi paspor & vaksin resmi",
      "Dua (2) kali ibadah Umrah terbimbing",
      "Dua (2) kali slot akses Raudhah Madinah",
      "City Tour lengkap Madinah & Makkah",
      "Tiket Museum Masjid Ash-Shofiyah Madinah",
      "Kunjungan Museum Al-Wahyu Makkah",
      "Wisata panorama Jabal Khandamah Makkah",
      "Snack & hidangan city tour",
      "Fasilitas pendukung perjalanan lengkap",
    ],
    options: [
      { title: "Cafe Moment Clock Tower", price: "+Rp 1.000.000 / orang" },
      { title: "Upgrade Kamar View Ka'bah", price: "+Rp 3.000.000 / orang" },
      { title: "Perlengkapan Umrah Eksklusif", price: "Opsional / Sesuai Permintaan" },
    ],
    transport: "SUV GMC Eksekutif + Kereta Cepat Haramain",
    hotel: "Hotel Bintang 4/5 Nyaman Ring 1 Masjid",
  },
  {
    id: "platinum",
    name: "Paket Platinum",
    badge: "The Ultimate Experience",
    tagline: "Ketika Kenyamanan Perjalanan Menjadi Bagian dari Kekhusyukan",
    priceFormatted: "Rp 88.000.000",
    priceNumber: 88000000,
    featured: false,
    idealFor: "Jamaah yang mengutamakan eksklusivitas penerbangan Bisnis, Hotel View Ka'bah & VIP Service",
    description:
      "Pengalaman ibadah tanpa kompromi. Terbang dengan kenyamanan Kelas Bisnis (Business Class flight), menginap di kamar langsung menghadap Ka'bah, dan pelayanan VIP penuh.",
    highlights: [
      "Tiket Penerbangan Kelas Bisnis (Business Class PP)",
      "Hotel Mewah Langsung View Ka'bah",
      "Termasuk Cafe Moment Clock Tower",
      "Perlengkapan Umrah Lengkap & Eksklusif",
    ],
    inclusions: [
      "Tiket pesawat PP KELAS BISNIS (Business Class Flight)",
      "Hotel Bintang 5 dengan KA'BAH VIEW langsung dari kamar",
      "Transportasi GMC Eksekutif privat sepanjang perjalanan",
      "Tiket Kereta Cepat Haramain High-Speed Rail",
      "Perlengkapan umrah premium lengkap dari Temanmu",
      "Sesi eksklusif Cafe Moment Clock Tower Makkah",
      "Handling VIP bandara dari Indonesia hingga Saudi",
      "Hotel transit eksekutif di Makassar & Jakarta",
      "Penjemputan khusus bandara & Welcome Drink",
      "Air Zamzam kemasan resmi",
      "Bimbingan manasik private online & offline",
      "Dua (2) kali pelaksanaan umrah privat",
      "Dua (2) kali akses Raudhah Syarifah Madinah",
      "City Tour eksklusif Makkah & Madinah",
      "Museum Masjid Ash-Shofiyah & Museum Al-Wahyu",
      "Kunjungan puncak Jabal Khandamah",
      "Snack & refreshment premium",
      "Pendampingan mutowwif full day berdedikasi",
    ],
    options: [
      { title: "Semua fasilitas eksklusif sudah All-Inclusive", price: "Termasuk Lengkap" },
    ],
    transport: "SUV GMC Luxury Privat + Kereta Cepat Haramain",
    hotel: "Hotel Bintang 5 Langsung Menghadap Ka'bah",
  },
];

export const PROMO_SPECIAL = {
  title: "Promo Umrah Privat 9 Hari",
  route: "Start Makassar — Direct / Transit Nyaman",
  airlines: "Pesawat Saudia / Garuda Indonesia",
  duration: "9 Hari Perjalanan Ibadah",
  hotels: {
    makkah: "Mövenpick Hotel & Residences / Shafwah Tower 3 (Pelataran Masjidil Haram)",
    madinah: "Al Aqeeq Millennium Hotel (Pelataran Masjid Nabawi)",
  },
  pricing: [
    { type: "Quad (4 Orang)", price: "53.8 Jt", perPax: "/ pax", note: "Kamar berempat keluarga" },
    { type: "Triple (3 Orang)", price: "56.8 Jt", perPax: "/ pax", note: "Kamar bertiga" },
    { type: "Double (2 Orang)", price: "58.8 Jt", perPax: "/ pax", note: "Kamar berdua privat suami-istri" },
    { type: "All-In Business Class", price: "88.8 Jt", perPax: "All In", note: "Spesial Bisnis Class Flight Upgrade" },
  ],
  upgradeBusinessFlightNote: "Upgrade tiket Bisnis Class: +Rp 30 Juta per pax",
  partnerPpiu: "Fast Travel (PT Fastabiqul Khairat)",
  ppiuNumber: "212210042780001",
  address: "Jl. Rusa No. 35 Sengkang, Kab. Wajo",
};

export const REAL_GALLERY: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Kebersamaan Jamaah di Pelataran Masjid Nabawi",
    location: "Masjid Nabawi, Madinah Al-Munawwarah",
    category: "Dokumentasi Jamaah",
    src: "/images/nabawi-group.jpg",
    caption:
      "Momen kehangatan jamaah Temanmu di hadapan kubah hijau Masjid Nabawi. Pendampingan penuh kekeluargaan dari tim kami.",
    tag: "Dokumentasi Asli",
  },
  {
    id: "gal-2",
    title: "City Tour Kota Makkah — Keluarga Bapak Zainal Abidin",
    location: "Masjidil Haram & Kota Makkah",
    category: "Umrah Keluarga Internasional",
    src: "/images/makkah-family-zainal.jpg",
    caption:
      "Dokumentasi City Tour Kota Makkah bersama Keluarga Bapak Zainal Abidin, jamaah asal Singapura yang mempercayakan perjalanan umrahnya pada Temanmu.",
    tag: "Jamaah Singapura",
  },
  {
    id: "gal-3",
    title: "City Tour Madinah — Rombongan Jamaah Umrah Private VIP",
    location: "Masjid Quba & Jabal Uhud, Madinah",
    category: "Private VIP Tour",
    src: "/images/madinah-citytour-vip.jpg",
    caption:
      "Rombongan Jamaah Umrah Private VIP Temanmu x Fast Travel. Dari tadabbur di Jabal Uhud hingga menikmati kurma segar langsung dari kebun Madinah.",
    tag: "Private VIP",
  },
  {
    id: "gal-4",
    title: "Momen Khusyuk & Kehangatan Keluarga di Pelataran Nabawi",
    location: "Pelataran Masjid Nabawi, Madinah",
    category: "Bakti Orang Tua",
    src: "/images/momen-keluarga-nabawi.jpg",
    caption:
      "Senyum bahagia seorang ibu didampingi anak-anaknya beribadah dengan tenang di bawah payung Masjid Nabawi. Momen ibadah yang santai tanpa tergesa-gesa bersama keluarga tercinta.",
    tag: "Bakti Orang Tua",
  },
  {
    id: "gal-5",
    title: "Kemegahan Baitullah dalam Keheningan Fajar",
    location: "Masjidil Haram, Makkah",
    category: "Spiritualitas",
    src: "/images/hero-kaaba.jpg",
    caption:
      "Fokus pada satu hal: beribadah dengan tenang. Temanmu mengurus semua teknis dan kenyamanan agar hati Anda khusyuk.",
    tag: "Baitullah",
  },
  {
    id: "gal-6",
    title: "Kenyamanan Kamar Eksklusif View Ka'bah",
    location: "Makkah Clock Tower / Shafwah",
    category: "Akomodasi Premium",
    src: "/images/hotel-view-kaaba.jpg",
    caption:
      "Pemandangan langsung ke Ka'bah dari kamar hotel Anda pada Paket Platinum. Menikmati teh hangat sembari memandang jutaan jamaah bersujud.",
    tag: "Platinum View",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testi-1",
    name: "Keluarga Bpk. Zainal Abidin",
    role: "Jamaah Umrah Keluarga (Singapura)",
    location: "Singapura / Makkah",
    quote:
      "Alhamdulillah, kami sekeluarga dari Singapura merasa sangat nyaman dan terbantu. Membawa orang tua sepuh dengan kursi roda biasanya rumit, tapi bersama Temanmu pendampingannya sangat telaten, tulus, dan kekeluargaan sekali.",
    type: "Umrah Keluarga Lansia",
  },
  {
    id: "testi-2",
    name: "dr. Hendra & Istri",
    role: "Jamaah Umrah Private Pasangan",
    location: "Makassar",
    quote:
      "Konsep umrah private Temanmu sangat pas buat kami yang punya waktu cuti terbatas. Tidak perlu tunggu bus rombongan penuh, mobil GMC sudah siap, jadwal fleksibel, dan mutowwif membimbing secara privat. Ibadah jadi jauh lebih khusyuk.",
    type: "Umrah Private 2 Orang",
  },
  {
    id: "testi-3",
    name: "Hj. Nuraini & Keluarga",
    role: "Rombongan Family VIP",
    location: "Sulawesi Selatan",
    quote:
      "Hotel di Makkah dan Madinah benar-benar tepat di depan pelataran masjid, anak-anak dan orang tua tidak capek berjalan kaki. Fasilitas kereta cepat dan museum Ash-Shofiyah sangat berkesan. Terima kasih Temanmu!",
    type: "Paket Silver Family",
  },
];

export const FAQS = [
  {
    q: "Apa yang membedakan Umrah Private di Temanmu dengan travel umrah reguler?",
    a: "Di travel reguler, Anda harus mengikuti jadwal kaku 45-90 orang dalam satu rombongan bus besar. Di Temanmu, perjalanan didesain secara private (mulai 2 orang pasangan, 3 orang keluarga, atau grup khusus). Anda memiliki kendaraan privat (Hyundai/GMC), mutowwif berdedikasi untuk Anda sendiri, serta jadwal harian yang fleksibel sesuai stamina dan kenyamanan keluarga.",
  },
  {
    q: "Apakah kami bisa menentukan sendiri tanggal keberangkatan dan durasi perjalanan?",
    a: "Tentu bisa! Salah satu keunggulan konsep private di Temanmu adalah fleksibilitas penentuan tanggal. Kami siap menyusun jadwal sesuai dengan waktu cuti atau momentum istimewa keluarga Anda.",
  },
  {
    q: "Bagaimana dengan legalitas dan izin resmi penyelenggaraan umrah?",
    a: "Temanmu Tour & Travel berkolaborasi resmi dengan PT Fastabiqul Khairat (Fast Travel) yang memegang Izin Resmi PPIU No. 212210042780001 dari Kementerian Agama RI, berkantor pusat di Jl. Rusa No. 35 Sengkang Wajo. Seluruh visa, tiket, dan sistem Siskopatuh terdaftar secara legal dan aman.",
  },
  {
    q: "Apakah Temanmu bisa melayani jamaah dari luar Makassar atau luar negeri?",
    a: "Bisa sekali. Sejak 2021 kami telah berpengalaman melayani jamaah dari berbagai daerah di Indonesia serta lingkup ASEAN, seperti jamaah dari Singapura dan Malaysia. Kami mengatur koordinasi tiket transit di Jakarta atau Makassar maupun pertemuan langsung di Bandara Jeddah/Madinah.",
  },
  {
    q: "Bagaimana persiapan bagi orang tua lanjut usia atau yang membutuhkan kursi roda?",
    a: "Kami sangat memahami kebutuhan lansia. Kami menyediakan fasilitas pendamping khusus (asistensi kursi roda saat tawaf & sa'i), akomodasi hotel ring 1 terdekat dari pelataran masjid, dan kendaraan berakses mudah sehingga orang tua Anda dapat beribadah tanpa kelelahan fisik.",
  },
];
