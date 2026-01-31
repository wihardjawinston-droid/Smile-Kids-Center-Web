<script setup>
import SectionTitle from '@/components/common/SectionTitle.vue'
import CTASection from '@/components/sections/CTASection.vue'
import { siteConfig } from '@/data/siteConfig'

const values = [
  {
    icon: '🎯',
    title: 'Pembelajaran Holistik',
    description: 'Mengembangkan aspek kognitif, sosial-emosional, fisik, dan kreatif anak secara seimbang.'
  },
  {
    icon: '🎮',
    title: 'Bermain Sambil Belajar',
    description: 'Metode pembelajaran melalui permainan yang menyenangkan dan bermakna.'
  },
  {
    icon: '💝',
    title: 'Penuh Kasih Sayang',
    description: 'Lingkungan yang hangat dan penuh perhatian untuk setiap anak.'
  },
  {
    icon: '🌱',
    title: 'Menghargai Keunikan',
    description: 'Setiap anak memiliki potensi unik yang kami bantu kembangkan.'
  }
]

const highlights = [
  { icon: '👨‍👩‍👧', text: 'Rasio guru-murid 1:5' },
  { icon: '🔒', text: 'Keamanan 24 jam dengan CCTV' },
  { icon: '🍎', text: 'Menu makanan bergizi' },
  { icon: '📱', text: 'Laporan perkembangan harian' },
  { icon: '🚗', text: 'SOP antar-jemput yang ketat' },
  { icon: '🏥', text: 'Tim kesehatan siaga' }
]

const galleryImages = [
  {
    src: new URL('@/assets/gallery/classroom.jpg', import.meta.url).href,
    title: 'Classroom'
  },
  {
    src: new URL('@/assets/gallery/4th-floor-1.jpg', import.meta.url).href,
    title: '4th Floor'
  },
  {
    src: new URL('@/assets/gallery/2nd-3rd-floor.jpg', import.meta.url).href,
    title: '2nd & 3rd Floor'
  },
  {
    src: new URL('@/assets/gallery/4th-floor-2.jpg', import.meta.url).href,
    title: '4th Floor'
  },
  {
    src: new URL('@/assets/gallery/4th-floor-3.jpg', import.meta.url).href,
    title: '4th Floor'
  }
]
</script>

<template>
  <main class="about-page">
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="container">
        <h1 class="page-title">Tentang Kami</h1>
        <p class="page-subtitle">Mengenal lebih dekat Smile Kids Center</p>
      </div>
    </section>

    <!-- About Section -->
    <section class="about-section section">
      <div class="container">
        <div class="about-grid">
          <div class="about-content">
            <h2 class="section-heading">Selamat Datang di {{ siteConfig.schoolName }}</h2>
            <p>
              {{ siteConfig.schoolName }} adalah lembaga pendidikan anak usia dini yang berdedikasi untuk memberikan 
              fondasi terbaik bagi tumbuh kembang anak-anak Indonesia. Sejak berdiri, kami telah meluluskan ratusan 
              alumni yang siap melanjutkan pendidikan ke jenjang berikutnya dengan percaya diri.
            </p>
            <p>
              Dengan pendekatan bermain sambil belajar dan kurikulum yang terintegrasi, kami memastikan setiap anak 
              mendapat kesempatan untuk berkembang sesuai dengan potensi unik mereka. Tim pengajar kami yang 
              berpengalaman dan penuh kasih sayang siap membimbing anak Anda di setiap langkah perjalanan belajarnya.
            </p>
          </div>
          <div class="about-image">
            <div class="image-placeholder">
              <span class="placeholder-emoji">🏫</span>
              <span class="placeholder-text">Foto Sekolah</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision & Mission -->
    <section class="vision-section section bg-light">
      <div class="container">
        <div class="vision-grid">
          <div class="vision-card">
            <div class="vision-icon">🎯</div>
            <h3>Visi</h3>
            <p>
              Menjadi lembaga pendidikan anak usia dini terdepan yang menghasilkan generasi cerdas, 
              berkarakter, dan siap menghadapi masa depan.
            </p>
          </div>
          <div class="vision-card">
            <div class="vision-icon">🚀</div>
            <h3>Misi</h3>
            <ul>
              <li>Menyediakan lingkungan belajar yang aman, nyaman, dan menyenangkan</li>
              <li>Mengembangkan potensi anak secara holistik</li>
              <li>Membangun karakter positif sejak dini</li>
              <li>Bermitra dengan orang tua dalam proses pendidikan</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="values-section section">
      <div class="container">
        <SectionTitle
          title="Nilai & Pendekatan Kami"
          subtitle="Prinsip yang kami pegang dalam mendidik anak-anak"
        />
        <div class="values-grid">
          <div v-for="(value, index) in values" :key="index" class="value-card">
            <div class="value-icon">{{ value.icon }}</div>
            <h4>{{ value.title }}</h4>
            <p>{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Safety Highlights -->
    <section class="safety-section section bg-warm">
      <div class="container">
        <SectionTitle
          title="Keamanan & Kualitas"
          subtitle="Komitmen kami untuk kenyamanan orang tua dan keamanan anak"
        />
        <div class="highlights-grid">
          <div v-for="(item, index) in highlights" :key="index" class="highlight-item">
            <span class="highlight-icon">{{ item.icon }}</span>
            <span class="highlight-text">{{ item.text }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Preview -->
    <section class="gallery-section section">
      <div class="container">
        <SectionTitle
          title="Suasana Sekolah Kami"
          subtitle="Intip kegiatan dan lingkungan belajar di Smile Kids Center"
        />
        <div class="gallery-grid">
          <div v-for="(image, index) in galleryImages" :key="index" class="gallery-item">
            <img :src="image.src" :alt="image.title" class="gallery-image" />
            <div class="gallery-overlay">
              <span class="gallery-title">{{ image.title }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <CTASection />
  </main>
</template>

<style scoped>
/* Page Hero */
.page-hero {
  background: linear-gradient(135deg, var(--color-primary-100) 0%, var(--color-secondary-100) 100%);
  padding: calc(var(--navbar-height) + var(--space-12)) 0 var(--space-12);
  text-align: center;
}

.page-title {
  font-size: var(--text-4xl);
  font-weight: var(--font-bold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-2);
}

.page-subtitle {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
}

/* About Grid */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-12);
  align-items: center;
}

.section-heading {
  font-size: var(--text-2xl);
  margin-bottom: var(--space-4);
  color: var(--color-primary-600);
}

.about-content p {
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-4);
}

.about-image {
  display: flex;
  justify-content: center;
}

.image-placeholder {
  width: 100%;
  max-width: 400px;
  aspect-ratio: 4/3;
  background: linear-gradient(135deg, var(--color-primary-100), var(--color-secondary-100));
  border-radius: var(--radius-2xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
}

.placeholder-emoji {
  font-size: 64px;
}

.placeholder-text {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
}

/* Vision Section */
.vision-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-8);
}

.vision-card {
  background-color: var(--color-bg-primary);
  padding: var(--space-8);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
}

.vision-icon {
  font-size: 48px;
  margin-bottom: var(--space-4);
}

.vision-card h3 {
  font-size: var(--text-2xl);
  margin-bottom: var(--space-4);
  color: var(--color-primary-600);
}

.vision-card p,
.vision-card li {
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
}

.vision-card ul {
  padding-left: var(--space-4);
}

.vision-card li {
  margin-bottom: var(--space-2);
  position: relative;
  padding-left: var(--space-4);
}

.vision-card li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-secondary-500);
}

/* Values Grid */
.values-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
}

.value-card {
  text-align: center;
  padding: var(--space-6);
  background-color: var(--color-bg-secondary);
  border-radius: var(--radius-xl);
  transition: all var(--transition-base);
}

.value-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.value-icon {
  font-size: 48px;
  margin-bottom: var(--space-3);
}

.value-card h4 {
  font-size: var(--text-lg);
  margin-bottom: var(--space-2);
}

.value-card p {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
}

/* Highlights Grid */
.highlights-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4);
  background-color: var(--color-bg-primary);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}

.highlight-icon {
  font-size: 24px;
}

.highlight-text {
  font-weight: var(--font-medium);
  color: var(--color-text-primary);
}

/* Gallery Grid */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
}

.gallery-item {
  aspect-ratio: 4/3;
  background-color: var(--color-neutral-100);
  border-radius: var(--radius-lg);
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: all var(--transition-base);
}

.gallery-item:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-base);
}

.gallery-item:hover .gallery-image {
  transform: scale(1.05);
}

.gallery-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  padding: var(--space-4);
  opacity: 0;
  transition: opacity var(--transition-base);
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-title {
  color: white;
  font-weight: var(--font-semibold);
  font-size: var(--text-base);
}

/* Responsive */
@media (max-width: 1023px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }

  .about-content {
    order: 1;
  }

  .about-image {
    order: 0;
  }

  .vision-grid {
    grid-template-columns: 1fr;
  }

  .values-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .highlights-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .page-title {
    font-size: var(--text-3xl);
  }

  .values-grid {
    grid-template-columns: 1fr;
  }

  .highlights-grid {
    grid-template-columns: 1fr;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
