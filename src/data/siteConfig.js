// Site Configuration
// Ganti dengan data asli sekolah

export const siteConfig = {
  // School Info
  schoolName: 'Smile Kids Center',
  tagline: 'Where Learning Meets Happiness',
  description: 'Pendidikan Anak Usia Dini dengan pendekatan bermain sambil belajar untuk tumbuh kembang optimal buah hati Anda.',
  
  // Contact
  phone: '+6281234567890',
  whatsapp: '6281234567890', // without + for wa.me link
  email: 'info@smilekidscenter.com',
  
  // Address
  address: 'Jl. Pendidikan No. 123, Kelurahan Sukamaju, Kecamatan Bahagia, Jakarta Selatan 12345',
  
  // Google Maps
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.123456789!2d106.123456!3d-6.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMDcnMjQuNCJTIDEwNsKwMDcnMjQuNCJF!5e0!3m2!1sen!2sid!4v1234567890123',
  
  // Operating Hours
  operatingHours: {
    weekday: 'Senin - Jumat: 07:00 - 17:00',
    saturday: 'Sabtu: 08:00 - 12:00 (Enrichment Class)',
    sunday: 'Minggu & Hari Libur: Tutup'
  },
  
  // Social Media
  socialMedia: {
    instagram: 'https://instagram.com/smilekidscenter',
    facebook: 'https://facebook.com/smilekidscenter',
    youtube: 'https://youtube.com/@smilekidscenter',
    tiktok: 'https://tiktok.com/@smilekidscenter'
  },
  
  // WhatsApp Message Templates
  whatsappMessages: {
    general: 'Halo, saya ingin bertanya tentang Smile Kids Center.',
    trial: 'Halo, saya ingin menjadwalkan trial class untuk anak saya.',
    visit: 'Halo, saya ingin menjadwalkan kunjungan ke Smile Kids Center.',
    program: (programName) => `Halo, saya ingin bertanya tentang program ${programName}.`
  },

  // USP (Unique Selling Points)
  usp: [
    {
      icon: '👨‍👩‍👧',
      title: 'Rasio 1:5',
      description: 'Satu guru untuk maksimal 5 anak memastikan perhatian individual.'
    },
    {
      icon: '📚',
      title: 'Kurikulum Terpadu',
      description: 'Menggabungkan kurikulum nasional dengan metode pembelajaran modern.'
    },
    {
      icon: '🏠',
      title: 'Fasilitas Lengkap',
      description: 'Ruang kelas ber-AC, playground indoor & outdoor, dan area belajar yang nyaman.'
    },
    {
      icon: '🔒',
      title: 'Keamanan Terjamin',
      description: 'CCTV 24 jam, access control, dan SOP antar-jemput yang ketat.'
    },
    {
      icon: '🍎',
      title: 'Menu Sehat',
      description: 'Makanan bergizi disiapkan oleh chef dengan menu yang disetujui ahli gizi.'
    }
  ]
}

// Helper function to generate WhatsApp link
export function getWhatsAppLink(message = siteConfig.whatsappMessages.general) {
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodedMessage}`
}

// Helper function to generate phone link
export function getPhoneLink() {
  return `tel:${siteConfig.phone}`
}

// Helper function to generate email link
export function getEmailLink() {
  return `mailto:${siteConfig.email}`
}
