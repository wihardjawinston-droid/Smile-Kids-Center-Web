// Data Program Smile Kids Center
import terapiAnakImg from '@/assets/programs/terapi-anak.png'
import konselingAnakImg from '@/assets/programs/konseling-anak.png'
import homeschoolingImg from '@/assets/programs/homeschooling.png'
import tesIqImg from '@/assets/programs/tes-iq.png'
import kelasMinatImg from '@/assets/programs/kelas-minat.png'

export const programs = [
  {
    id: 1,
    slug: 'terapi-anak',
    name: 'Program Terapi Anak',
    subtitle: 'Pendampingan Terpadu untuk Mengembangkan Potensi Anak',
    shortDesc: 'Program terapi ini dirancang untuk membantu anak mengembangkan kemampuan komunikasi, perilaku, motorik, serta keterampilan sosial melalui pendekatan yang terstruktur dan menyenangkan.',
    fullDesc: 'Program terapi ini dirancang untuk membantu anak mengembangkan kemampuan komunikasi, perilaku, motorik, serta keterampilan sosial melalui pendekatan yang terstruktur dan menyenangkan. Program ini mencakup berbagai metode terapi seperti ABA, terapi wicara, sensori integrasi, pretend play, activity daily living skill, serta character building therapy untuk mendukung perkembangan anak secara menyeluruh.',
    objectives: [
      'Mengembangkan kemampuan komunikasi dan bahasa anak.',
      'Meningkatkan kemampuan interaksi sosial.',
      'Membantu anak mengontrol perilaku dan emosi.',
      'Mengembangkan kemampuan motorik dan sensorik anak.',
      'Melatih kemandirian dalam aktivitas sehari-hari.',
      'Membentuk karakter positif seperti disiplin dan tanggung jawab.'
    ],
    activities: [
      'Latihan mengikuti instruksi sederhana.',
      'Latihan berbicara dan menirukan kata atau suara.',
      'Bermain permainan sensorik seperti pasir atau playdough.',
      'Aktivitas keseimbangan seperti ayunan terapi atau berjalan di balance beam.',
      'Bermain peran (dokter, guru, atau toko-tokoan).',
      'Latihan aktivitas sehari-hari seperti makan sendiri, memakai baju, dan merapikan barang.',
      'Permainan kelompok untuk melatih kerja sama dan interaksi sosial.'
    ],
    color: '#FF8A6E',
    image: terapiAnakImg
  },
  {
    id: 2,
    slug: 'asesmen-tumbuh-kembang',
    name: 'Asesmen Tumbuh Kembang',
    subtitle: 'Memahami Tahap Perkembangan Anak Secara Menyeluruh',
    shortDesc: 'Asesmen tumbuh kembang dilakukan untuk mengetahui apakah perkembangan anak sudah sesuai dengan tahap usia perkembangannya.',
    fullDesc: 'Asesmen tumbuh kembang dilakukan untuk mengetahui apakah perkembangan anak sudah sesuai dengan tahap usia perkembangannya. Hasil asesmen membantu tenaga profesional dan orang tua dalam menentukan program terapi atau pembelajaran yang tepat bagi anak.',
    objectives: [
      'Mengetahui tahap perkembangan anak sesuai usia.',
      'Mengidentifikasi kekuatan dan kebutuhan anak.',
      'Menentukan program terapi atau pembelajaran yang tepat.'
    ],
    activities: [
      'Observasi perilaku dan aktivitas anak.',
      'Tes perkembangan motorik, bahasa, dan sosial.',
      'Wawancara dengan orang tua.',
      'Pengisian checklist perkembangan anak.'
    ],
    color: '#FFC107'
  },
  {
    id: 3,
    slug: 'konseling-anak',
    name: 'Konseling Anak',
    subtitle: 'Mendampingi Anak Mengenal dan Mengelola Emosi',
    shortDesc: 'Konseling anak merupakan sesi pendampingan yang bertujuan untuk membantu anak memahami dan mengekspresikan perasaannya.',
    fullDesc: 'Konseling anak merupakan sesi pendampingan yang bertujuan untuk membantu anak memahami dan mengekspresikan perasaannya. Melalui pendekatan yang ramah anak, konselor membantu anak mengatasi berbagai masalah emosional, sosial, maupun perilaku.',
    objectives: [
      'Membantu anak memahami perasaan yang dialami.',
      'Mengembangkan kemampuan anak dalam mengekspresikan emosi secara sehat.',
      'Membantu anak mengatasi masalah perilaku atau sosial.'
    ],
    activities: [
      'Terapi bermain.',
      'Menggambar atau mewarnai untuk mengekspresikan perasaan.',
      'Bercerita tentang pengalaman anak.',
      'Permainan mengenal emosi seperti senang, sedih, atau marah.',
      'Diskusi ringan bersama konselor.'
    ],
    color: '#00BFA5',
    image: konselingAnakImg
  },
  {
    id: 4,
    slug: 'homeschooling',
    name: 'Homeschooling Anak Kebutuhan Khusus',
    subtitle: 'Pembelajaran Personal Sesuai Kebutuhan Anak',
    shortDesc: 'Program homeschooling merupakan kegiatan belajar mengajar pendidikan nonformal yang dirancang khusus untuk anak kebutuhan khusus.',
    fullDesc: 'Program homeschooling merupakan kegiatan belajar mengajar pendidikan nonformal yang dirancang khusus untuk anak kebutuhan khusus. Pembelajaran dilakukan secara fleksibel dan disesuaikan dengan kemampuan serta gaya belajar anak agar proses belajar menjadi lebih efektif dan menyenangkan.',
    objectives: [
      'Mengembangkan kemampuan akademik dasar anak.',
      'Memberikan metode belajar yang sesuai dengan kebutuhan anak.',
      'Meningkatkan kemandirian dan kepercayaan diri dalam belajar.'
    ],
    activities: [
      'Belajar membaca dan menulis.',
      'Belajar berhitung sederhana.',
      'Pembelajaran melalui permainan edukatif.',
      'Kegiatan kreatif seperti membuat kerajinan atau proyek sederhana.'
    ],
    color: '#2196F3',
    image: homeschoolingImg
  },
  {
    id: 5,
    slug: 'kelas-minat',
    name: 'Kelas Minat',
    subtitle: 'Mengembangkan Bakat dan Kreativitas Anak',
    shortDesc: 'Kelas minat memberikan kesempatan bagi anak untuk mengeksplorasi berbagai kegiatan yang sesuai dengan bakat dan minatnya.',
    fullDesc: 'Kelas minat memberikan kesempatan bagi anak untuk mengeksplorasi berbagai kegiatan yang sesuai dengan bakat dan minatnya, seperti memasak, musik, menggambar, dan olahraga. Program ini membantu anak mengembangkan kreativitas, kepercayaan diri, serta kemampuan motorik dan sosial.',
    objectives: [
      'Mengembangkan minat dan bakat anak.',
      'Meningkatkan kreativitas dan kepercayaan diri.',
      'Melatih koordinasi motorik dan interaksi sosial.'
    ],
    activities: [
      'Memasak makanan atau camilan sederhana.',
      'Bernyanyi dan bermain alat musik sederhana.',
      'Menggambar, mewarnai, dan membuat karya seni.',
      'Senam ringan dan permainan olahraga sederhana.'
    ],
    color: '#9C27B0',
    image: kelasMinatImg
  },
  {
    id: 6,
    slug: 'tes-iq',
    name: 'Tes IQ',
    subtitle: 'Menggali Potensi Intelektual Anak',
    shortDesc: 'Tes IQ dilakukan untuk mengukur kemampuan intelektual anak serta mengetahui potensi belajar yang dimiliki.',
    fullDesc: 'Tes IQ dilakukan untuk mengukur kemampuan intelektual anak serta mengetahui potensi belajar yang dimiliki. Hasil tes ini dapat membantu menentukan metode pembelajaran serta program pengembangan yang paling sesuai bagi anak.',
    objectives: [
      'Mengukur kemampuan intelektual anak.',
      'Mengetahui potensi belajar anak.',
      'Menentukan metode pembelajaran yang tepat.'
    ],
    activities: [
      'Tes logika dan pola.',
      'Tes memori.',
      'Tes pemecahan masalah.',
      'Tes verbal dan non-verbal.'
    ],
    color: '#FF5722',
    image: tesIqImg
  }
]

export function getProgramBySlug(slug) {
  return programs.find(p => p.slug === slug)
}

export function getAllPrograms() {
  return programs
}
