// ============================================================================
// tolong.in - Master Content & Configuration Data
// Tagline: "Menolong Dengan Hati."
// Slogan: "Dari mahasiswa, oleh mahasiswa, untuk mahasiswa."
// Hashtag: #MenolongDenganHati
// ============================================================================

// ----------------------------------------------------------------------------
// Foto Latar Kampus UPI Bandung (Wikimedia Commons / Bebas Lisensi)
// Ganti URL ini bila ingin menggunakan foto lokal atau foto kustom sendiri
// ----------------------------------------------------------------------------
export const HERO_BG_URL =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Villa_Isola_Bandung.JPG/1280px-Villa_Isola_Bandung.JPG';

export const SERVICES_BG_URL =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Bumi_Siliwangi_UPI_Bandung.jpg/1280px-Bumi_Siliwangi_UPI_Bandung.jpg';

export const PHOTO_CREDIT = 'Foto latar UPI: Wikimedia Commons (Creative Commons BY-SA)';

// ----------------------------------------------------------------------------
// Kontak Resmi (WA, Media Sosial, Partner)
// ----------------------------------------------------------------------------
export const WA_NUMBER = '6285183351823';
export const WA_DISPLAY = '0851-8335-1823';
export const WA_LINK = `https://wa.me/${WA_NUMBER}`;

export const INSTAGRAM_HANDLE = '@upi.tolong';
export const INSTAGRAM_URL = 'https://instagram.com/upi.tolong';

export const TIKTOK_HANDLE = '@upi.tolong';
export const TIKTOK_URL = 'https://tiktok.com/@upi.tolong';

export const PARTNER_HANDLE = '@upi.shitpost';
export const PARTNER_URL = 'https://instagram.com/upi.shitpost';

export const BRAND_TAGLINE = 'Menolong Dengan Hati.';
export const BRAND_SLOGAN = 'Dari mahasiswa, oleh mahasiswa, untuk mahasiswa.';
export const BRAND_HASHTAG = '#MenolongDenganHati';

// TODO: Konfirmasi jam operasional resmi sebelum publikasi
export const OPERATIONAL_HOURS = '08.00 - 22.00 WIB';

// ----------------------------------------------------------------------------
// Strip Angka Kepercayaan
// ----------------------------------------------------------------------------
export const TRUST_STATS = [
  {
    id: 'stat-orders',
    value: 78,
    suffix: '',
    label: 'Pesanan Terlayani',
    period: 'Juli 2026', // TODO: Verifikasi sebelum publikasi
    note: 'Terus bertambah setiap pekan',
  },
  {
    id: 'stat-runners',
    value: 18,
    suffix: '',
    label: 'Runner Mahasiswa',
    period: 'Aktif di Kampus', // TODO: Verifikasi sebelum publikasi
    note: 'Tersebar di berbagai fakultas UPI',
  },
  {
    id: 'stat-followers',
    value: 2500,
    suffix: '+',
    label: 'Pengikut Komunitas',
    period: 'Instagram & TikTok', // TODO: Verifikasi sebelum publikasi
    note: '@upi.tolong & ekosistem kampus',
  },
  {
    id: 'stat-repeat',
    value: 24,
    prefix: '±',
    suffix: '%',
    label: 'Pelanggan Order Ulang',
    period: 'Repeat Order Rate', // TODO: Verifikasi sebelum publikasi
    note: 'Tingkat kepuasan & kepercayaan tinggi',
  },
];

// ----------------------------------------------------------------------------
// Kategori Layanan (5 Kategori)
// ----------------------------------------------------------------------------
export interface ServiceCategory {
  id: string;
  name: string;
  tagline: string;
  iconName: string;
  illustration: 'jastip' | 'mobilitas' | 'informasi' | 'akademik' | 'khusus';
  desc: string;
  examples: string[];
  sampleRequest: string;
  waTemplate: string;
}

export interface OrderFormData {
  nama: string;
  fakultasAngkatan: string;
  noWa: string;
  mauDitolongApa: string;
  deadline: string;
  lokasiAwal: string;
  lokasiTujuan: string;
  bayarJasa: string;
  catatan: string;
}

export const formatTolongInOrderMessage = (data: Partial<OrderFormData>): string => {
  return `FORM PEMESANAN TOLONG.IN
Menolong dengan Hati, Melesat Lebih Tinggi

Nama: ${data.nama || ''}
Fakultas & Angkatan: ${data.fakultasAngkatan || ''}
No. WhatsApp: ${data.noWa || ''}

Mau ditolong apa: ${data.mauDitolongApa || ''}
Deadline: ${data.deadline || ''}

Lokasi Awal: ${data.lokasiAwal || ''}
Lokasi Tujuan: ${data.lokasiTujuan || ''}

Aku mau bayar jasa ini: ${data.bayarJasa || ''}

(Belum termasuk biaya barang, makanan, minuman, atau parkir yaa)

Catatan: ${data.catatan || ''}`;
};

// Alias kompatibilitas
export const formatUpiTolongOrderMessage = formatTolongInOrderMessage;

export const SERVICES_LIST: ServiceCategory[] = [
  {
    id: 'jastip',
    name: 'Jasa Titip (Jastip)',
    tagline: 'Kebutuhan perut & barang tiba tanpa repot',
    iconName: 'ShoppingBag',
    illustration: 'jastip',
    desc: 'Titip makanan, minuman, dan belanja barang kebutuhan harianmu tanpa perlu memecah konsentrasi belajar atau keluar dari kosan.',
    examples: [
      'Titip makanan favorit (dimsum gerbang, pecel lele, seblak, geprek)',
      'Minuman kekinian & kopi penyemangat nugas',
      'Barang darurat tertinggal (kabel charger, alat tulis, obat warung)',
      'Ambil & antar laundry kiloan/satuan',
      'Tukar ukuran baju pesanan ke distro/toko terdekat',
    ],
    sampleRequest: 'beliin makanan / barang titipan',
    waTemplate: formatUpiTolongOrderMessage({
      mauDitolongApa: 'beliin makanan / barang titipan',
      deadline: 'secepatnya aja',
      lokasiAwal: 'gerlong / sekitar gerbang UPI',
      lokasiTujuan: 'kosan / kampus UPI',
      bayarJasa: 'disepakati bersama admin',
    }),
  },
  {
    id: 'mobilitas',
    name: 'Mobilitas & Anjem',
    tagline: 'Antar-jemput santai, pindahan kos jadi ringan',
    iconName: 'Bike',
    illustration: 'mobilitas',
    desc: 'Layanan antar-jemput fleksibel oleh sesama mahasiswa, pendampingan perjalanan, dan bantuan tenaga fisik untuk urusan kosan.',
    examples: [
      'Antar-jemput (anjem) area kampus, kosan, stasiun, atau terminal',
      'Helper tenaga angkut & bantuan pindahan kosan',
      'Jasa antre loket, cetak berkas, atau antre pendaftaran',
      'Antar jalan-jalan keliling Bandung dengan teman pemandu lokal',
    ],
    sampleRequest: 'antar-jemput (anjem) / helper angkut barang',
    waTemplate: formatUpiTolongOrderMessage({
      mauDitolongApa: 'antar-jemput (anjem) / helper angkut barang',
      deadline: 'hari ini',
      lokasiAwal: 'titik jemput',
      lokasiTujuan: 'titik tujuan',
      bayarJasa: 'disepakati bersama admin',
    }),
  },
  {
    id: 'informasi',
    name: 'Informasi & Survei',
    tagline: 'Mata & telingamu di lapangan kampus',
    iconName: 'Compass',
    illustration: 'informasi',
    desc: 'Bantuan verifikasi langsung ke lokasi fisik untuk kamu yang masih di luar kota, plus solusi informasi administratif kampus.',
    examples: [
      'Survei kosan calon mahasiswa (cek air, sinyal, foto & video riil 360°)',
      'Informasi administrasi kampus (contoh: penggantian VA pembayaran UKT)',
      'Cek ketersediaan buku/tesis di perpustakaan',
      'Pencarian informasi langsung ke kantor birokrasi/jurusan',
      'Promosi usaha UMKM mahasiswa & publikasi kegiatan',
    ],
    sampleRequest: 'survei kosan / cek berkas administrasi kampus',
    waTemplate: formatUpiTolongOrderMessage({
      mauDitolongApa: 'survei kosan / cek berkas administrasi kampus',
      deadline: 'fleksibel / besok',
      lokasiAwal: 'kampus UPI / kos sasaran',
      lokasiTujuan: 'info dikirim via WhatsApp',
      bayarJasa: 'disepakati bersama admin',
    }),
  },
  {
    id: 'akademik',
    name: 'Akademik & Riset',
    tagline: 'Dukungan belajar & penelitian dari sesama akademisi',
    iconName: 'GraduationCap',
    illustration: 'akademik',
    desc: 'Dukungan persiapan akademik dan penyelesaian riset kuliah langsung dari sesama mahasiswa yang berpengalaman.',
    examples: [
      'Bimbingan belajar mata kuliah dasar & penjurusan',
      'Bantuan pencarian responden kuesioner penelitian skripsi',
      'Penyebaran instrumen wawancara & observasi lapangan',
    ],
    sampleRequest: 'bantuan bimbingan belajar / pencarian responden riset',
    waTemplate: formatUpiTolongOrderMessage({
      mauDitolongApa: 'bantuan bimbingan belajar / pencarian responden riset',
      deadline: 'sesuai jadwal tugas',
      lokasiAwal: 'kampus UPI',
      lokasiTujuan: 'online / tatap muka',
      bayarJasa: 'disepakati bersama admin',
    }),
  },
  {
    id: 'khusus',
    name: 'Layanan Khusus',
    tagline: 'Kebutuhanmu unik? Ceritakan ke kami',
    iconName: 'Sparkles',
    illustration: 'khusus',
    desc: 'Kebutuhanmu belum ada di daftar atas? Tenang, ceritakan apa saja keperluanmu ke admin, kami carikan runner yang pas.',
    examples: [
      'Jaga stan pameran/acara kampus',
      'Bantuan fotografer dadakan wisuda/momen penting',
      'Teman ngobrol & diskusi positif seputar kehidupan kampus',
      'Tugas lapangan darurat lainnya',
    ],
    sampleRequest: 'kebutuhan khusus (ceritakan ke admin)',
    waTemplate: formatUpiTolongOrderMessage({
      mauDitolongApa: 'kebutuhan khusus / tugas lapangan unik',
      deadline: 'secepatnya aja',
      lokasiAwal: 'kawasan UPI Bandung',
      lokasiTujuan: 'lokasi acara / kosan',
      bayarJasa: 'disepakati bersama admin',
    }),
  },
];

// Catatan harga penting
export const PRICING_NOTE = 'Harga disepakati bersama admin sebelum runner jalan. Tanpa tarif tersembunyi!';

// ----------------------------------------------------------------------------
// 6 Langkah Cara Kerja
// ----------------------------------------------------------------------------
export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: 'Kirim Pesananmu',
    desc: 'Hubungi admin melalui WhatsApp, Instagram, atau TikTok. Ceritakan apa yang kamu butuhkan dengan santai.',
    iconName: 'MessageSquare',
  },
  {
    step: 2,
    title: 'Sepakati Harga Bersama',
    desc: 'Admin berdiskusi denganmu untuk menyepakati harga yang wajar dan transparan. Admin bisa kasih patokan dari tarif layanan serupa.',
    iconName: 'Handshake',
  },
  {
    step: 3,
    title: 'Diteruskan ke Runner',
    desc: 'Setelah sepakat, admin langsung meneruskan pesananmu ke runner mahasiswa yang siaga dan bersedia di sekitar lokasi.',
    iconName: 'UserCheck',
  },
  {
    step: 4,
    title: 'Runner Bertugas',
    desc: 'Runner menjalankan tugas dengan SOP ramah dan sigap. Admin tetap memantau dan siap jadi teman konsultasimu.',
    iconName: 'CheckCircle2',
  },
  {
    step: 5,
    title: 'Bayar Aman Selesai Tugas',
    desc: 'Bayar setelah bantuan selesai lewat QRIS (sangat disarankan) atau tunai. Demi keamanan, jangan transfer ke rekening pribadi runner.',
    iconName: 'QrCode',
  },
  {
    step: 6,
    title: 'Tercatat & Beri Ulasan',
    desc: 'Pesananmu otomatis tercatat dalam sistem evaluasi. Kamu bisa memberi rating dan masukan agar layanan kami makin baik.',
    iconName: 'Star',
  },
];

export const TIMEOUT_CALLOUT =
  'Kalau belum ada runner yang bisa ambil dalam ±15 menit, admin akan segera menghubungimu untuk konfirmasi apakah ingin ditunda atau dibatalkan tanpa penalti.';

// ----------------------------------------------------------------------------
// Kenapa Tolong.in (6 Poin Utama + 3 Kata Ajaib)
// ----------------------------------------------------------------------------
export const WHY_US_POINTS = [
  {
    title: 'Runner Mahasiswa Terlatih',
    desc: 'Semua runner adalah mahasiswa aktif yang dibekali pelatihan SOP keramahan, ketepatan waktu, dan etika kerja.',
    iconName: 'GraduationCap',
  },
  {
    title: 'Admin Responsif & Hangat',
    desc: 'Bukan bot kaku. Kamu mengobrol dengan admin yang mengerti bahasa mahasiswa dan siap mencari solusi terbaik.',
    iconName: 'HeartHandshake',
  },
  {
    title: 'Harga Disepakati di Awal',
    desc: 'Transparan sejak detik pertama. Tidak ada tarif melonjak misterius, semua dibicarakan di muka bersama admin.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Pembayaran Aman (QRIS/Tunai)',
    desc: 'Bayar setelah pekerjaan tuntas. Mendukung QRIS resmi dan uang tunai tanpa risiko rekening liar.',
    iconName: 'Wallet',
  },
  {
    title: 'Pesanan Tercatat & Dievaluasi',
    desc: 'Setiap tugas memiliki rekam jejak sistem yang jelas demi keamanan barang, privasi, dan kepuasan pelanggan.',
    iconName: 'FileCheck',
  },
  {
    title: 'Paham Seluk-Beluk Kampus',
    desc: 'Runner hafal jalan tikus, jam buka kantin legendaris, tata letak gedung kuliah, sampai birokrasi kampus UPI.',
    iconName: 'MapPin',
  },
];

export const THREE_MAGIC_WORDS = [
  {
    word: 'Tolong',
    desc: 'Meminta bantuan dengan adab, kerendahan hati, dan saling menghargai martabat sesama teman seperjuangan.',
    bg: 'bg-red-50 text-[#D32F2F]',
  },
  {
    word: 'Maaf',
    desc: 'Tulus mengakui keterbatasan, menjunjung kejujuran bila ada kendala lapangan, dan selalu siap berbenah cepat.',
    bg: 'bg-amber-50 text-amber-800',
  },
  {
    word: 'Terima Kasih',
    desc: 'Mengapresiasi setiap tetes keringat ikhtiar runner dan memuliakan kepercayaan yang telah dititipkan pelanggan.',
    bg: 'bg-emerald-50 text-emerald-800',
  },
];

// ----------------------------------------------------------------------------
// Tentang Kami & Roadmap Wilayah
// ----------------------------------------------------------------------------
export const ABOUT_STORY = {
  paragraph1:
    'Di kehidupan kampus, ada kalanya jadwal kuliah padat, tugas menumpuk, badan drop, atau sekadar tidak sempat keluar kosan untuk urusan kecil yang mendesak. Di sisi lain, ada banyak mahasiswa hebat yang memiliki waktu luang di sela jam kuliah, punya kendaraan, dan ingin mandiri mencari penghasilan tambahan tanpa terikat shift kerja kaku yang mengorbankan nilai akademik.',
  paragraph2:
    'tolong.in hadir mempertemukan dua kebutuhan tersebut dengan sistem berbasis komunitas yang teratur dan hangat. Bukan sekadar bisnis jasa titip, ini adalah ruang gotong royong modern yang menghubungkan mahasiswa yang butuh bantuan dengan mahasiswa yang berdedikasi menolong — sesuai semangat kami: Menolong Dengan Hati.',
};

export interface AreaLocation {
  id: string;
  name: string;
  query: string;
  desc: string;
  popularSpots: string;
}

export const CAMPUS_MAP_AREAS: AreaLocation[] = [
  {
    id: 'upi-pusat',
    name: 'Kawasan Kampus UPI Bumi Siliwangi',
    query: 'Universitas Pendidikan Indonesia Bandung',
    desc: 'Pusat kampus UPI, gedung rektorat, gymnasium, & seluruh fakultas',
    popularSpots: 'Gerbang Utama, Museum Diknas, FIP, FPBS, FPMIPA',
  },
  {
    id: 'setiabudi',
    name: 'Setiabudi & sekitarnya',
    query: 'Jalan Dr Setiabudi Bandung',
    desc: 'Koridor utama gerbang UPI, halte busway, & pusat kuliner malam',
    popularSpots: 'Halte UPI, Indomaret Setiabudi, Roti Gempol, Borma',
  },
  {
    id: 'gerlong',
    name: 'Gegerkalong Girang & Hilir',
    query: 'Gegerkalong Bandung',
    desc: 'Pusat kosan mahasiswa terpadat, jasa fotokopi, & warung makan',
    popularSpots: 'KPAD Gerlong, Gerlong Tengah, Warteg Barokah, Jl. Kartika',
  },
  {
    id: 'ledeng',
    name: 'Ledeng & Ciwaruga',
    query: 'Terminal Ledeng Bandung',
    desc: 'Jalur transportasi strategis & hunian asri sejuk mahasiswa',
    popularSpots: 'Terminal Ledeng, Perbatasan Ciwaruga, Kosan Sejuk',
  },
  {
    id: 'isola',
    name: 'Isola & perkampungan kos mahasiswa',
    query: 'Villa Isola UPI Bandung',
    desc: 'Landmark heritage legendaris UPI & deretan kosan lingkar kampus',
    popularSpots: 'Gedung Isola, Kolam Renang UPI, Perkampungan Mahasiswa',
  },
];

export const CURRENT_AREA = CAMPUS_MAP_AREAS.map((a) => a.name);

export const ROADMAP_STAGES = [
  {
    stage: 'Sekarang',
    campus: 'UPI Bandung (Pilot)',
    desc: 'Fokus melayani mahasiswa, dosen, tendik, alumni, UMKM, dan warga di kawasan UPI Bumi Siliwangi & kos sekitar.',
    status: 'Berjalan Aktif',
    active: true,
  },
  {
    stage: 'Berikutnya',
    campus: 'Kampus Lain di Bandung',
    desc: 'Ekspansi jaringan runner mahasiswa ke ITB, Unpad, Telkom University, UIN, dan politeknik se-Bandung Raya.',
    status: 'Persiapan Sistem',
    active: false,
  },
  {
    stage: 'Visi Jangka Panjang',
    campus: 'Kampus di Seluruh Indonesia',
    desc: 'Membangun ekosistem gotong royong mahasiswa terbesar di tanah air yang mandiri, beretika, dan berdampak nyata.',
    status: 'Rencana Masa Depan',
    active: false,
  },
];

// ----------------------------------------------------------------------------
// Bergabung Jadi Runner / Staf
// ----------------------------------------------------------------------------
export const RUNNER_BENEFITS = [
  {
    title: 'Penghasilan Fleksibel',
    desc: 'Dapatkan insentif per pesanan yang kamu ambil. Bebas atur waktu kapan mau online di sela jam kosong kuliah.',
    iconName: 'Coins',
  },
  {
    title: 'Pengalaman Kerja Nyata',
    desc: 'Asah komunikasi, kedisiplinan, manajemen waktu, dan penyelesaian masalah langsung di lapangan kampus.',
    iconName: 'Briefcase',
  },
  {
    title: 'Relasi Luas & Komunitas Solid',
    desc: 'Kenal mahasiswa dari berbagai jurusan dan fakultas, plus kesempatan jejaring dengan dosen dan UMKM mitra.',
    iconName: 'Users',
  },
  {
    title: 'Belajar Kepemimpinan',
    desc: 'Kesempatan naik jenjang menjadi staf operasional, koordinator bidang, hingga direktur divisi.',
    iconName: 'Award',
  },
];

export const OPREC_TIMELINE = [
  { step: '01', title: 'Isi Formulir Daring', desc: 'Isi data diri dan minat peran melalui form open recruitment berkala.' },
  { step: '02', title: 'Seleksi Administrasi', desc: 'Verifikasi status mahasiswa aktif dan komitmen waktu.' },
  { step: '03', title: 'Pengumuman Hasil', desc: 'Pemberitahuan calon terpilih via WhatsApp resmi tolong.in.' },
  { step: '04', title: 'Internship 1 Bulan', desc: 'Pembekalan SOP pelayanan prima, etika kerja, dan pendampingan di lapangan.' },
  { step: '05', title: 'Inaugurasi Staf', desc: 'Resmi menjadi bagian keluarga besar tolong.in dan siap menjalankan tugas.' },
];

export const CAREER_LADDER = [
  { title: 'Intern', desc: 'Masa pembelajaran 1 bulan, memahami SOP & kultur pelayanan' },
  { title: 'Staf', desc: 'Menjadi runner aktif atau staf pendukung operasional harian' },
  { title: 'Koordinator Bidang', desc: 'Memimpin subbagian logistik, operasional, atau relasi mitra' },
  { title: 'Direktur', desc: 'Menentukan arah strategis pengembangan ekosistem tolong.in' },
];

// ----------------------------------------------------------------------------
// Testimoni Pengguna
// // TODO: Minta izin pelanggan sebelum publikasi
// ----------------------------------------------------------------------------
export const TESTIMONIALS = [
  {
    id: 'testi-1',
    name: 'A.',
    role: 'Pelanggan UPI',
    service: 'Jasa Titip Makanan',
    quote: 'Pesanan selalu sampai, admin fast respon, tim lapangannya gercep semua.',
    stars: 5,
  },
  {
    id: 'testi-2',
    name: 'Pelanggan UPI',
    role: 'Mahasiswi Rantau',
    service: 'Antar Keliling Bandung',
    quote: 'Runnernya komunikatif, tahu tujuan dan jalan, bahkan mau dengerin curhat. Top deh!',
    stars: 5,
  },
  {
    id: 'testi-3',
    name: 'A.Z.',
    role: 'Mahasiswa UPI',
    service: 'Informasi Administrasi UKT',
    quote: 'Ngebantu banget, bener-bener nggak ada obat!',
    stars: 5,
  },
];

// ----------------------------------------------------------------------------
// Pertanyaan yang Sering Diajukan (FAQ)
// ----------------------------------------------------------------------------
export const FAQ_LIST = [
  {
    question: 'Apakah harus download aplikasi di Play Store atau App Store?',
    answer:
      'Sama sekali tidak perlu! tolong.in bukan aplikasi yang memakan memori ponselmu. Kamu cukup mengirim pesan via WhatsApp Business, Instagram DM, atau TikTok ke admin kami.',
  },
  {
    question: 'Bagaimana harga layanannya ditentukan?',
    answer:
      'Harga selalu disepakati bersama admin sebelum runner jalan. Kalau kamu belum punya bayangan atau ragu, admin akan memberikan patokan perkiraan wajar berdasarkan jarak dan tingkat kesulitan dari layanan serupa.',
  },
  {
    question: 'Bagaimana cara pembayarannya?',
    answer:
      'Pembayaran dilakukan setelah pesanan selesai dikerjakan runner. Kamu bisa bayar via QRIS resmi (sangat disarankan demi kemudahan dan pencatatan) atau uang tunai langsung ke runner. Harap TIDAK mentransfer ke rekening pribadi runner ya!',
  },
  {
    question: 'Bagaimana kalau belum ada runner yang bisa ambil pesanan saya?',
    answer:
      'Jika dalam rentang ±15 menit belum ada runner yang siaga, admin akan langsung menghubungimu kembali untuk menanyakan apakah kamu bersedia menunggu sedikit lebih lama atau ingin membatalkan pesanan tanpa biaya apapun.',
  },
  {
    question: 'Siapa saja yang boleh menggunakan tolong.in?',
    answer:
      'Semua orang! Mulai dari mahasiswa, dosen, tenaga kependidikan (tendik), alumni, pemilik UMKM, hingga masyarakat umum di sekitar kampus. Fokus utama saat ini adalah kawasan UPI Bumi Siliwangi dan sekitarnya.',
  },
  {
    question: 'Kalau ada kendala atau barang tidak sesuai, harus hubungi siapa?',
    answer:
      'Langsung hubungi admin melalui nomor WhatsApp resmi tolong.in. Admin kami akan langsung menengahi, mencarikan solusi penggantian, atau menyelesaikan kendala bersama runner terkait.',
  },
  {
    question: 'Gimana cara bergabung menjadi runner tolong.in?',
    answer:
      'Kami rutin membuka program Open Recruitment Internship sekitar 2 bulan sekali untuk mahasiswa aktif. Kamu bisa memantau pengumuman pendaftaran di akun Instagram @upi.tolong atau menghubungi admin via WhatsApp.',
  },
];
