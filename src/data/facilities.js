// Data Fasilitas Smile Kids Center
// Ganti dengan data asli sekolah

export const facilities = [
  {
    id: 1,
    name: 'Ruang Kelas Ber-AC',
    description: 'Ruang kelas yang nyaman dengan AC dan pencahayaan optimal untuk kegiatan belajar.',
    icon: '🏫',
    image: '/images/facility-classroom.jpg'
  },
  {
    id: 2,
    name: 'Playground Indoor',
    description: 'Area bermain indoor yang aman dengan matras dan perlengkapan bermain berkualitas.',
    icon: '🎠',
    image: '/images/facility-indoor-play.jpg'
  },
  {
    id: 3,
    name: 'Playground Outdoor',
    description: 'Taman bermain outdoor dengan ayunan, perosotan, dan area pasir yang terawat.',
    icon: '🌳',
    image: '/images/facility-outdoor-play.jpg'
  },
  {
    id: 4,
    name: 'Ruang Musik',
    description: 'Ruang musik lengkap dengan berbagai alat musik untuk mengembangkan bakat seni anak.',
    icon: '🎵',
    image: '/images/facility-music.jpg'
  },
  {
    id: 5,
    name: 'Ruang Seni',
    description: 'Studio seni dengan perlengkapan lengkap untuk aktivitas melukis, kerajinan, dan kreativitas.',
    icon: '🎨',
    image: '/images/facility-art.jpg'
  },
  {
    id: 6,
    name: 'Perpustakaan Mini',
    description: 'Koleksi buku anak yang lengkap untuk menumbuhkan minat baca sejak dini.',
    icon: '📚',
    image: '/images/facility-library.jpg'
  },
  {
    id: 7,
    name: 'Ruang Tidur/Rest Area',
    description: 'Ruang istirahat yang nyaman untuk tidur siang anak dengan kasur individual.',
    icon: '🛏️',
    image: '/images/facility-rest.jpg'
  },
  {
    id: 8,
    name: 'Dapur Bersih',
    description: 'Dapur higienis dengan menu makanan bergizi yang disiapkan oleh chef berpengalaman.',
    icon: '🍽️',
    image: '/images/facility-kitchen.jpg'
  },
  {
    id: 9,
    name: 'Toilet Ramah Anak',
    description: 'Toilet dengan ukuran anak-anak yang bersih dan aman.',
    icon: '🚿',
    image: '/images/facility-toilet.jpg'
  },
  {
    id: 10,
    name: 'Area Parkir Luas',
    description: 'Parkir yang luas dan aman untuk antar jemput anak.',
    icon: '🚗',
    image: '/images/facility-parking.jpg'
  },
  {
    id: 11,
    name: 'CCTV 24 Jam',
    description: 'Pengawasan keamanan dengan CCTV di seluruh area sekolah.',
    icon: '📹',
    image: '/images/facility-cctv.jpg'
  },
  {
    id: 12,
    name: 'Ruang UKS',
    description: 'Unit Kesehatan Sekolah dengan peralatan P3K lengkap.',
    icon: '🏥',
    image: '/images/facility-clinic.jpg'
  }
]

export function getAllFacilities() {
  return facilities
}
