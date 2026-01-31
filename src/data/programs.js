// Data Program Smile Kids Center
// Ganti dengan data asli sekolah

export const programs = [
  {
    id: 1,
    slug: 'daycare',
    name: 'Daycare',
    ageRange: '6 bulan - 2 tahun',
    schedule: 'Senin - Jumat, 07:00 - 17:00',
    shortDesc: 'Penitipan anak dengan stimulasi perkembangan optimal untuk si kecil.',
    fullDesc: 'Program Daycare kami menyediakan lingkungan yang aman, nyaman, dan penuh kasih sayang untuk bayi dan balita. Dengan rasio pengasuh-anak yang kecil, setiap anak mendapat perhatian individual yang dibutuhkan untuk tumbuh kembang optimal.',
    objectives: [
      'Stimulasi sensorik dan motorik',
      'Pengenalan bahasa dan komunikasi',
      'Pembentukan rutinitas sehat',
      'Sosialisasi awal dengan teman sebaya'
    ],
    activities: [
      'Tummy time & aktivitas motorik',
      'Musik dan lagu anak',
      'Bermain sensori (pasir, air, tekstur)',
      'Story time & puppet show',
      'Outdoor play di area aman'
    ],
    image: '/images/program-daycare.jpg',
    color: '#FF8A6E'
  },
  {
    id: 2,
    slug: 'playgroup',
    name: 'Playgroup',
    ageRange: '2 - 3 tahun',
    schedule: 'Senin - Jumat, 08:00 - 11:00',
    shortDesc: 'Belajar sambil bermain untuk mengembangkan kreativitas dan sosialisasi anak.',
    fullDesc: 'Program Playgroup dirancang khusus untuk anak usia 2-3 tahun dengan pendekatan bermain sambil belajar. Anak-anak akan mengeksplorasi dunia melalui aktivitas yang menyenangkan sambil mengembangkan keterampilan sosial dan kognitif.',
    objectives: [
      'Mengembangkan kemandirian awal',
      'Melatih koordinasi motorik halus dan kasar',
      'Membangun keterampilan sosial dasar',
      'Mengenalkan konsep dasar (warna, bentuk, angka)'
    ],
    activities: [
      'Circle time & morning routine',
      'Art & craft projects',
      'Bermain balok dan puzzle',
      'Outdoor exploration',
      'Musik dan gerakan',
      'Free play dengan supervisi'
    ],
    image: '/images/program-playgroup.jpg',
    color: '#FFC107'
  },
  {
    id: 3,
    slug: 'nursery',
    name: 'Nursery',
    ageRange: '3 - 4 tahun',
    schedule: 'Senin - Jumat, 08:00 - 12:00',
    shortDesc: 'Persiapan pra-sekolah dengan fokus pada kemandirian dan keterampilan sosial.',
    fullDesc: 'Program Nursery mempersiapkan anak untuk transisi ke jenjang TK. Dengan kurikulum yang seimbang antara akademik dan bermain, anak-anak mengembangkan fondasi yang kuat untuk pembelajaran formal.',
    objectives: [
      'Persiapan keaksaraan awal',
      'Pengenalan konsep matematika dasar',
      'Pengembangan keterampilan sosial-emosional',
      'Membangun kemandirian dan tanggung jawab'
    ],
    activities: [
      'Pre-reading & phonics activities',
      'Counting games & math concepts',
      'Science experiments sederhana',
      'Dramatic play & role-playing',
      'Physical education',
      'Cooking class sederhana'
    ],
    image: '/images/program-nursery.jpg',
    color: '#00BFA5'
  },
  {
    id: 4,
    slug: 'kindergarten-a',
    name: 'TK A',
    ageRange: '4 - 5 tahun',
    schedule: 'Senin - Jumat, 08:00 - 12:30',
    shortDesc: 'Program TK dengan kurikulum terpadu untuk kesiapan sekolah dasar.',
    fullDesc: 'Program TK A menggunakan kurikulum terpadu yang menggabungkan pembelajaran akademik, seni, dan karakter. Anak-anak belajar membaca, menulis, dan berhitung dengan cara yang menyenangkan.',
    objectives: [
      'Membaca dan menulis huruf & angka',
      'Konsep matematika dasar (penjumlahan sederhana)',
      'Pengenalan bahasa Inggris',
      'Pengembangan karakter dan nilai-nilai'
    ],
    activities: [
      'Literacy & numeracy class',
      'English fun learning',
      'Sains dan lingkungan',
      'Seni rupa & musik',
      'Physical education & games',
      'Field trips edukatif'
    ],
    image: '/images/program-tka.jpg',
    color: '#2196F3'
  },
  {
    id: 5,
    slug: 'kindergarten-b',
    name: 'TK B',
    ageRange: '5 - 6 tahun',
    schedule: 'Senin - Jumat, 08:00 - 13:00',
    shortDesc: 'Persiapan intensif menuju SD dengan fondasi akademik dan karakter yang kuat.',
    fullDesc: 'Program TK B adalah tahap akhir persiapan anak sebelum memasuki Sekolah Dasar. Fokus pada penguatan kemampuan calistung, kemandirian, serta kesiapan mental dan sosial untuk lingkungan sekolah formal.',
    objectives: [
      'Membaca dan menulis dengan lancar',
      'Operasi matematika dasar',
      'Kemampuan berpikir kritis & problem solving',
      'Kesiapan sosial-emosional untuk SD'
    ],
    activities: [
      'Advanced reading & writing',
      'Math problem solving',
      'Science projects',
      'Public speaking & presentation',
      'Team activities & sports',
      'Graduation preparation'
    ],
    image: '/images/program-tkb.jpg',
    color: '#9C27B0'
  },
  {
    id: 6,
    slug: 'enrichment',
    name: 'Enrichment Class',
    ageRange: '3 - 6 tahun',
    schedule: 'Sabtu, 09:00 - 11:00',
    shortDesc: 'Kelas tambahan untuk mengembangkan bakat dan minat khusus anak.',
    fullDesc: 'Program Enrichment menyediakan berbagai kelas ekstrakurikuler untuk mengembangkan bakat dan minat anak di luar jam sekolah reguler. Tersedia berbagai pilihan kelas sesuai minat anak.',
    objectives: [
      'Mengembangkan bakat dan minat khusus',
      'Meningkatkan kreativitas dan ekspresi diri',
      'Membangun kepercayaan diri',
      'Memberikan pengalaman pembelajaran baru'
    ],
    activities: [
      'Mini Chef (cooking class)',
      'Art Studio',
      "Little Scientist",
      'Dance & Movement',
      'English Fun',
      'Mandarin basic'
    ],
    image: '/images/program-enrichment.jpg',
    color: '#FF5722'
  }
]

export function getProgramBySlug(slug) {
  return programs.find(p => p.slug === slug)
}

export function getAllPrograms() {
  return programs
}
