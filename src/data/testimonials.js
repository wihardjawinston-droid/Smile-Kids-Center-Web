// Data Testimoni Smile Kids Center
// Ganti dengan testimoni asli dari orang tua

export const testimonials = [
  {
    id: 1,
    name: 'Ibu Sarah M.',
    role: 'Orang tua murid TK B',
    content: 'Anak saya sangat senang bersekolah di Smile Kids Center. Guru-gurunya sangat sabar dan perhatian. Dalam waktu 6 bulan, perkembangan anak saya sangat pesat, terutama dalam membaca dan bersosialisasi.',
    avatar: '/images/avatar-1.jpg',
    rating: 5
  },
  {
    id: 2,
    name: 'Bapak Andre T.',
    role: 'Orang tua murid Playgroup',
    content: 'Fasilitas sekolah sangat lengkap dan bersih. Tim guru yang profesional membuat kami sebagai orang tua merasa tenang menitipkan anak. Highly recommended!',
    avatar: '/images/avatar-2.jpg',
    rating: 5
  },
  {
    id: 3,
    name: 'Ibu Diana K.',
    role: 'Orang tua murid Daycare',
    content: 'Sebagai working mom, saya sangat terbantu dengan program Daycare yang fleksibel. Laporan harian dan foto kegiatan membuat saya tetap terhubung dengan perkembangan anak.',
    avatar: '/images/avatar-3.jpg',
    rating: 5
  },
  {
    id: 4,
    name: 'Ibu Rina S.',
    role: 'Orang tua murid Nursery',
    content: 'Kurikulum yang diterapkan sangat bagus. Anak saya tidak hanya pintar secara akademik, tapi juga memiliki karakter yang baik. Terima kasih Smile Kids Center!',
    avatar: '/images/avatar-4.jpg',
    rating: 5
  }
]

export function getAllTestimonials() {
  return testimonials
}
