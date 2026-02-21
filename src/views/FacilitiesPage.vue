<script setup>
import SectionTitle from '@/components/common/SectionTitle.vue'
import CTASection from '@/components/sections/CTASection.vue'
import { facilities } from '@/data/facilities'
</script>

<template>
  <main class="facilities-page">
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="container">
        <h1 class="page-title">Fasilitas Kami</h1>
        <p class="page-subtitle">Lingkungan belajar yang aman, nyaman, dan mendukung tumbuh kembang anak</p>
      </div>
    </section>

    <!-- Facilities List -->
    <section class="facilities-section section">
      <div class="container">
        <div class="facilities-grid">
          <div
            v-for="facility in facilities"
            :key="facility.id"
            class="facility-card"
          >
            <div class="facility-image">
              <img :src="facility.image" :alt="facility.name" class="facility-img" />
            </div>
            <div class="facility-info">
              <h3 class="facility-name">{{ facility.name }}</h3>
              <p class="facility-desc">{{ facility.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Safety Section -->
    <section class="safety-section section bg-warm">
      <div class="container">
        <SectionTitle
          title="Keamanan adalah Prioritas Kami"
          subtitle="Kami berkomitmen untuk memberikan lingkungan yang aman bagi setiap anak"
        />
        <div class="safety-grid">
          <div class="safety-item">
            <span class="safety-icon">🔒</span>
            <h4>Akses Terkontrol</h4>
            <p>Sistem keamanan dengan akses kartu untuk orang tua dan pengasuh terdaftar</p>
          </div>
          <div class="safety-item">
            <span class="safety-icon">📹</span>
            <h4>CCTV 24 Jam</h4>
            <p>Pengawasan seluruh area sekolah dengan rekaman yang tersimpan</p>
          </div>
          <div class="safety-item">
            <span class="safety-icon">🧯</span>
            <h4>Peralatan Keselamatan</h4>
            <p>APAR, P3K, dan jalur evakuasi tersedia di setiap sudut</p>
          </div>
          <div class="safety-item">
            <span class="safety-icon">👮</span>
            <h4>SOP Antar-Jemput</h4>
            <p>Prosedur ketat untuk serah terima anak dengan orang tua/wali</p>
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

/* Facilities Grid */
.facilities-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.facility-card {
  background-color: var(--color-bg-primary);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
}

.facility-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.facility-image {
  height: 200px;
  overflow: hidden;
}

.facility-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-base);
}

.facility-card:hover .facility-img {
  transform: scale(1.05);
}

.facility-info {
  padding: var(--space-5);
}

.facility-name {
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  margin-bottom: var(--space-2);
}

.facility-desc {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
}

/* Safety Section */
.safety-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
}

.safety-item {
  text-align: center;
  padding: var(--space-6);
  background-color: var(--color-bg-primary);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
}

.safety-icon {
  font-size: 48px;
  display: block;
  margin-bottom: var(--space-3);
}

.safety-item h4 {
  font-size: var(--text-lg);
  margin-bottom: var(--space-2);
}

.safety-item p {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
}

/* Responsive */
@media (max-width: 1023px) {
  .facilities-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .safety-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .page-title {
    font-size: var(--text-3xl);
  }

  .facilities-grid {
    grid-template-columns: 1fr;
  }

  .safety-grid {
    grid-template-columns: 1fr;
  }
}
</style>
