// Site Configuration
// Ganti dengan data asli sekolah

export const siteConfig = {
  // School Info
  schoolName: 'Smile Kids Center',
  tagline: 'Where Learning Meets Happiness',
  description: 'Pendidikan Anak Usia Dini dengan pendekatan bermain sambil belajar untuk tumbuh kembang optimal buah hati Anda.',

  // Contact
  phone: '0895-3594-78505',
  whatsapp: '62895359478505', // without + for wa.me link
  email: 'info@smilekidscenter.com',

  // Address
  address: 'Smile Kids Center Tumbuh Kembang Anak, Plaza Pacific, Rukan Jl. Boulevard Bar. Raya No.52 54 Blok A3, Klp. Gading Bar., Kec. Klp. Gading, Jkt Utara, Daerah Khusus Ibukota Jakarta 14240',

  // Google Maps
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.8384611603456!2d106.8945328!3d-6.152383799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f540a553fbb9%3A0x559d8404e5efccfc!2sSmile%20Kids%20Center%20Tumbuh%20Kembang%20Anak!5e0!3m2!1sen!2sid!4v1769837298693!5m2!1sen!2sid',

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
