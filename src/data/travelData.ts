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

export interface TransportRoute {
  id: string;
  from: string;
  to: string;
  priceSAR: number;
  note?: string;
  category: "airport" | "intercity" | "ziarah" | "station";
  highlight?: boolean;
}

export interface TransportVehicle {
  id: string;
  name: string;
  category: string;
  capacity: string;
  luggage: string;
  badge: string;
  featured?: boolean;
  tagline: string;
  description: string;
  idealFor: string;
  features: string[];
  routes: TransportRoute[];
}

export const TRANSPORT_FEATURES = [
  {
    title: "Mobil Terbaru & Nyaman",
    description: "Perjalanan bersama armada modern kami yang bersih, terawat secara berkala, dan ber-AC dingin.",
    icon: "Car",
  },
  {
    title: "Sopir Profesional & Berpengalaman",
    description: "Ramah, santun, hafal rute Tanah Suci, serta selalu tepat waktu menyambut kedatangan Anda.",
    icon: "UserCheck",
  },
  {
    title: "Layanan Terpercaya",
    description: "Pilihan tepat untuk perjalanan ibadah dan mobilitas yang lancar, aman, serta bebas kendala.",
    icon: "ShieldCheck",
  },
  {
    title: "Pelayanan Ramah & 24/7",
    description: "Prioritas utama pada kebutuhan & keselamatan Anda. Siap melayani 24 Jam nonstop, berbasis di Makkah.",
    icon: "Clock",
  },
];

export const TRANSPORT_VEHICLES: TransportVehicle[] = [
  {
    id: "camry",
    name: "Camry Terbaru",
    category: "Sedan Modern",
    capacity: "4 Kursi (Ideal 2 - 3 Penumpang)",
    luggage: "2 - 3 Koper Sedang",
    badge: "Gesit & Nyaman",
    featured: false,
    tagline: "Perjalanan Halus & Efisien untuk Pasangan / Personal",
    description: "Sedan modern terbaru dengan suspensi empuk, kabin senyap, dan AC prima. Sangat cocok untuk perjalanan cepat antara hotel, bandara, stasiun, hingga ziarah.",
    idealFor: "Pasangan suami-istri, personal, atau keluarga kecil 2-3 orang",
    features: [
      "Armada model terbaru & terawat berkala",
      "Kenyamanan kabin eksekutif & senyap",
      "AC sejuk optimal untuk cuaca Saudi",
      "Sopir profesional & tepat waktu",
    ],
    routes: [
      { id: "c-1", from: "Bandara Madinah", to: "Hotel Madinah", priceSAR: 250, category: "airport" },
      { id: "c-2", from: "Jeddah (Bandara / Kota)", to: "Makkah", priceSAR: 300, category: "intercity", highlight: true },
      { id: "c-3", from: "Makkah", to: "Jeddah", priceSAR: 250, category: "intercity" },
      { id: "c-4", from: "Makkah", to: "Madinah", priceSAR: 450, category: "intercity" },
      { id: "c-5", from: "Madinah", to: "Jeddah", priceSAR: 450, category: "intercity" },
      { id: "c-6", from: "Ziarah Kota Makkah", to: "Destinasi Bersejarah", priceSAR: 250, note: "Dengan Museum: 300 SAR", category: "ziarah", highlight: true },
      { id: "c-7", from: "Ziarah Kota Madinah", to: "Jabal Uhud, Quba, Qiblatain", priceSAR: 250, category: "ziarah" },
      { id: "c-8", from: "Hotel Makkah", to: "Stasiun Kereta Haramain", priceSAR: 200, category: "station" },
      { id: "c-9", from: "Hotel Madinah", to: "Stasiun Kereta Haramain", priceSAR: 200, category: "station" },
      { id: "c-10", from: "Stasiun Kereta Madinah", to: "Hotel Madinah", priceSAR: 200, category: "station" },
      { id: "c-11", from: "Hotel / Gedung Madinah", to: "Bandara Madinah", priceSAR: 200, category: "airport" },
      { id: "c-12", from: "Ziarah Kota Sejuk Thaif", to: "Makkah PP / Wisata Thaif", priceSAR: 500, category: "ziarah", highlight: true },
    ],
  },
  {
    id: "staria-starex",
    name: "Staria / Starex",
    category: "MPV Premium",
    capacity: "7 Kursi (Ideal 4 - 6 Penumpang)",
    luggage: "4 - 5 Koper Besar",
    badge: "Paling Diminati Keluarga",
    featured: true,
    tagline: "Kenyamanan Lapang untuk Perjalanan Keluarga",
    description: "MPV modern berdesain futuristik dengan ruang kabin luas, pintu geser praktis, dan tempat duduk lega. Solusi favorit keluarga yang membawa anak-anak dan koper banyak.",
    idealFor: "Keluarga (4-6 orang) atau rombongan kecil dengan bagasi",
    features: [
      "Kapasitas 7 Kursi dengan legroom ekstra",
      "Pintu geser otomatis memudahkan lansia & anak-anak",
      "Bagasi luas untuk koper & oleh-oleh",
      "Layanan antar-jemput 24 Jam standby",
    ],
    routes: [
      { id: "s-1", from: "Bandara Jeddah", to: "Makkah", priceSAR: 350, note: "+biaya untuk Nusuk", category: "airport", highlight: true },
      { id: "s-2", from: "Makkah", to: "Jeddah", priceSAR: 300, category: "intercity" },
      { id: "s-3", from: "Ziarah Kota Makkah", to: "Destinasi Bersejarah", priceSAR: 300, note: "Dengan Museum: 350 SAR", category: "ziarah", highlight: true },
      { id: "s-4", from: "Makkah", to: "Madinah", priceSAR: 550, category: "intercity" },
      { id: "s-5", from: "Madinah", to: "Jeddah", priceSAR: 550, category: "intercity" },
      { id: "s-6", from: "Ziarah Kota Madinah", to: "Jabal Uhud, Quba, Kebun Kurma", priceSAR: 300, category: "ziarah" },
      { id: "s-7", from: "Makkah", to: "Stasiun Kereta Haramain", priceSAR: 220, category: "station" },
      { id: "s-8", from: "Madinah", to: "Stasiun Kereta Haramain", priceSAR: 220, category: "station" },
      { id: "s-9", from: "Hotel Madinah", to: "Bandara Madinah", priceSAR: 220, category: "airport" },
      { id: "s-10", from: "Bandara Madinah", to: "Hotel Madinah", priceSAR: 300, category: "airport" },
      { id: "s-11", from: "Ziarah Kota Sejuk Thaif", to: "Makkah PP / Wisata Thaif", priceSAR: 600, category: "ziarah", highlight: true },
    ],
  },
  {
    id: "hiace",
    name: "Toyota Hiace",
    category: "Minibus Eksekutif",
    capacity: "11 Kursi (Ideal 7 - 10 Penumpang)",
    luggage: "8 - 10 Koper Besar",
    badge: "Kapasitas Besar",
    featured: false,
    tagline: "Pilihan Ekonomis & Lega untuk Rombongan Komunitas",
    description: "Minibus tangguh dengan 11 kursi penumpang dan atap tinggi (high-roof). Ruang kabin sangat lega untuk rombongan keluarga besar, majelis taklim, atau group mandiri.",
    idealFor: "Rombongan group, keluarga besar 7-10 orang, dan majelis taklim",
    features: [
      "Kapasitas 11 Kursi penumpang lega",
      "Kabin tinggi (high-roof) memudahkan bergerak di dalam",
      "Bagasi ekstra lapang untuk koper seluruh rombongan",
      "Hemat biaya per pax untuk grup",
    ],
    routes: [
      { id: "h-1", from: "Bandara Jeddah", to: "Makkah", priceSAR: 400, category: "airport", highlight: true },
      { id: "h-2", from: "Makkah", to: "Jeddah", priceSAR: 350, category: "intercity" },
      { id: "h-3", from: "Ziarah Kota Makkah", to: "Destinasi Bersejarah", priceSAR: 350, note: "Dengan Museum: 400 SAR", category: "ziarah", highlight: true },
      { id: "h-4", from: "Makkah", to: "Madinah", priceSAR: 600, category: "intercity" },
      { id: "h-5", from: "Madinah", to: "Jeddah", priceSAR: 600, category: "intercity" },
      { id: "h-6", from: "Ziarah Kota Madinah", to: "Jabal Uhud, Quba, Khandaq", priceSAR: 350, category: "ziarah" },
      { id: "h-7", from: "Hotel Makkah", to: "Stasiun Kereta Haramain", priceSAR: 250, category: "station" },
      { id: "h-8", from: "Madinah", to: "Stasiun Kereta Haramain", priceSAR: 250, category: "station" },
      { id: "h-9", from: "Bandara Madinah", to: "Hotel Madinah", priceSAR: 350, category: "airport" },
      { id: "h-10", from: "Hotel / Gedung Madinah", to: "Bandara Madinah", priceSAR: 250, category: "airport" },
      { id: "h-11", from: "Ziarah Kota Sejuk Thaif", to: "Makkah PP / Wisata Thaif", priceSAR: 700, category: "ziarah", highlight: true },
    ],
  },
  {
    id: "gmc-xl",
    name: "GMC Yukon XL",
    category: "Luxury VIP SUV",
    capacity: "7 Kursi VIP (Ideal 4 - 6 Penumpang)",
    luggage: "5 - 7 Koper Besar",
    badge: "Kelas VIP Tertinggi",
    featured: true,
    tagline: "Kemewahan & Eksklusivitas Tertinggi di Tanah Suci",
    description: "SUV legendaris berukuran penuh (Full-Size Luxury SUV). Menawarkan suspensi paling empuk, jok kulit premium, privasi tinggi, serta kehadiran yang mewah dan berwibawa.",
    idealFor: "Tamu VIP, keluarga eksekutif, dan jamaah yang memprioritaskan privasi & kemewahan",
    features: [
      "Armada Luxury SUV Full-Size teratas",
      "Kenyamanan suspensi udara kelas satu",
      "Jok kulit mewah & kabin super senyap",
      "Pelayanan sopir VIP berdedikasi",
    ],
    routes: [
      { id: "g-1", from: "Bandara Madinah", to: "Hotel Madinah", priceSAR: 350, category: "airport" },
      { id: "g-2", from: "Ziarah Kota Madinah", to: "Destinasi Bersejarah & Ziarah", priceSAR: 400, category: "ziarah" },
      { id: "g-3", from: "Hotel Madinah", to: "Bandara Madinah", priceSAR: 300, category: "airport" },
      { id: "g-4", from: "Hotel Madinah", to: "Stasiun Kereta Madinah", priceSAR: 300, category: "station" },
      { id: "g-5", from: "Stasiun Kereta Madinah", to: "Hotel Madinah", priceSAR: 300, category: "station" },
      { id: "g-6", from: "Bandara Jeddah", to: "Makkah", priceSAR: 500, category: "airport", highlight: true },
      { id: "g-7", from: "Makkah", to: "Jeddah", priceSAR: 400, category: "intercity" },
      { id: "g-8", from: "Ziarah Kota Makkah", to: "Destinasi Bersejarah", priceSAR: 400, note: "Dengan Museum: 450 SAR", category: "ziarah", highlight: true },
      { id: "g-9", from: "Makkah", to: "Kota Thaif", priceSAR: 900, category: "ziarah", highlight: true },
    ],
  },
];

export interface VisaVaccineService {
  id: string;
  category: "visa" | "vaksin";
  name: string;
  subtitle: string;
  badge: string;
  priceFormatted: string;
  currencyLabel: string;
  featured?: boolean;
  processingTime: string;
  validity: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

export const VISA_VACCINE_SERVICES: VisaVaccineService[] = [
  {
    id: "visa-umrah",
    category: "visa",
    name: "Visa Umrah & Saudi",
    subtitle: "Izin Masuk Resmi Kerajaan Arab Saudi",
    badge: "Paling Banyak Diajukan",
    priceFormatted: "Rp 2.700.000",
    currencyLabel: "/ paspor",
    featured: true,
    processingTime: "1 - 3 Hari Kerja",
    validity: "90 Hari Kunjungan",
    description:
      "Pengurusan visa resmi Umrah / Tourist Arab Saudi yang terhubung langsung ke sistem Kementerian Haji & Umrah (Muassasah / Nusuk). Aman, resmi, dan terverifikasi cepat.",
    requirements: [
      "Foto paspor asli (masa berlaku min. 6 bulan)",
      "Pas foto terbaru latar belakang putih",
      "KTP & Kartu Keluarga (KK)",
      "Buku nikah (bila bepergian bersama suami/istri)",
    ],
    benefits: [
      "Terdaftar resmi di sistem portal visa Saudi & Nusuk",
      "Termasuk asuransi kesehatan resmi dari otoritas Saudi",
      "Asistensi kelengkapan dokumen hingga e-Visa terbit",
      "Bebas konsultasi dan pendampingan input data",
    ],
  },
  {
    id: "visa-voa-egypt",
    category: "visa",
    name: "Visa VOA Egypt (Mesir)",
    subtitle: "Visa On Arrival Transit & Wisata Sejarah Mesir",
    badge: "Umrah Plus / Transit",
    priceFormatted: "$200",
    currencyLabel: "USD / orang",
    featured: false,
    processingTime: "On Arrival / Pre-arranged Approval",
    validity: "30 Hari Kunjungan",
    description:
      "Layanan asistensi pengurusan Visa On Arrival (VOA) untuk wilayah Mesir. Sangat tepat bagi jamaah yang mengambil rute transit atau paket Umrah Plus Mesir (Kairo, Piramida Giza, Sungai Nil).",
    requirements: [
      "Paspor asli berlaku minimal 6 bulan",
      "Tiket penerbangan lanjutan (Return / Onward Ticket)",
      "Bukti reservasi hotel / itinerary tour Mesir",
      "Asuransi perjalanan internasional",
    ],
    benefits: [
      "Asistensi handling dan imigrasi di Bandara Kairo",
      "Proses izin masuk terkoordinasi dan minim antre",
      "Didampingi oleh perwakilan mitra lokal resmi di Mesir",
      "Pengecekan kelengkapan berkas sebelum keberangkatan",
    ],
  },
  {
    id: "vaksin-meningitis",
    category: "vaksin",
    name: "Vaksin Meningitis Internasional",
    subtitle: "Sertifikat Resmi Buku Kuning (ICV) Kemenkes RI",
    badge: "Wajib Regulasi",
    priceFormatted: "Rp 1.500.000",
    currencyLabel: "/ jamaah",
    featured: false,
    processingTime: "1 Hari (Sertifikat Langsung Terbit)",
    validity: "Berlaku hingga 3 Tahun",
    description:
      "Layanan pendaftaran dan pendampingan vaksinasi Meningitis Meningokokus resmi sesuai ketentuan Kementerian Kesehatan RI dan Kementerian Haji Arab Saudi. Termasuk Buku Kuning (ICV) dan integrasi SatuSehat.",
    requirements: [
      "KTP asli atau salinan identitas diri",
      "Fotokopi / scan paspor untuk pencatatan nomor di ICV",
      "Kondisi fisik sehat pada saat jadwal penyuntikan",
      "Jadwal vaksinasi minimal 14 hari sebelum keberangkatan",
    ],
    benefits: [
      "Penerbitan Buku Kuning (ICV) resmi berstandar WHO",
      "Vaksin halal tersertifikasi MUI dan BPOM RI",
      "Terintegrasi otomatis ke sistem SatuSehat Kemenkes",
      "Koordinasi faskes / KKP tanpa perlu antre panjang",
    ],
  },
];

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
