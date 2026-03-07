<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { getProgramBySlug, programs } from '@/data/programs'
import { siteConfig, getWhatsAppLink } from '@/data/siteConfig'

const route = useRoute()

const program = computed(() => {
  return getProgramBySlug(route.params.slug)
})

const otherPrograms = computed(() => {
  return programs.filter(p => p.slug !== route.params.slug).slice(0, 3)
})

const whatsappLink = computed(() => {
  if (program.value) {
    return getWhatsAppLink(siteConfig.whatsappMessages.program(program.value.name))
  }
  return getWhatsAppLink()
})
</script>

<template>
  <main class="program-detail-page">
    <template v-if="program">
      <!-- Hero Section -->
      <section class="program-hero" :style="{ backgroundColor: program.color + '15' }">
        <div class="container">
          <RouterLink to="/program" class="back-link">← Kembali ke Daftar Program</RouterLink>
          <div class="hero-content">
            <div class="hero-info">
              <h1 class="program-title">{{ program.name }}</h1>
              <p class="program-subtitle">{{ program.subtitle }}</p>
              <p class="program-desc">{{ program.fullDesc }}</p>
              <div class="hero-cta">
                <a
                  :href="getWhatsAppLink(siteConfig.whatsappMessages.trial)"
                  target="_blank"
                  rel="noopener"
                  class="btn btn-primary btn-lg"
                >
                  📅 Daftar Trial Class
                </a>
                <a
                  :href="whatsappLink"
                  target="_blank"
                  rel="noopener"
                  class="btn btn-whatsapp btn-lg"
                >
                  💬 Tanya via WhatsApp
                </a>
              </div>
            </div>
            <div class="hero-visual">
              <div class="program-image" :style="{ backgroundColor: program.color + '30' }">
                <img v-if="program.image" :src="program.image" :alt="program.name" class="program-hero-img" />
                <span v-else class="program-icon" :style="{ color: program.color }">
                  {{ program.name.charAt(0) }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Program Details -->
      <section class="details-section section">
        <div class="container">
          <div class="details-grid">
            <!-- Objectives -->
            <div class="detail-card">
              <h2 class="detail-title">🎯 Tujuan Pembelajaran</h2>
              <ul class="detail-list">
                <li v-for="(obj, index) in program.objectives" :key="index">
                  {{ obj }}
                </li>
              </ul>
            </div>

            <!-- Activities -->
            <div class="detail-card">
              <h2 class="detail-title">🎨 Aktivitas Pembelajaran</h2>
              <ul class="detail-list">
                <li v-for="(act, index) in program.activities" :key="index">
                  {{ act }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>



      <!-- Bottom CTA -->
      <section class="bottom-cta section">
        <div class="container">
          <div class="cta-card">
            <h2>Tertarik dengan program {{ program.name }}?</h2>
            <p>Jadwalkan kunjungan atau trial class gratis untuk melihat langsung kegiatan pembelajaran!</p>
            <div class="cta-buttons">
              <a
                :href="getWhatsAppLink(siteConfig.whatsappMessages.visit)"
                target="_blank"
                rel="noopener"
                class="btn btn-primary btn-lg"
              >
                📅 Jadwalkan Kunjungan
              </a>
              <a
                :href="whatsappLink"
                target="_blank"
                rel="noopener"
                class="btn btn-whatsapp btn-lg"
              >
                💬 Chat WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Other Programs -->
      <section class="other-programs section bg-light">
        <div class="container">
          <h2 class="section-title text-center">Program Lainnya</h2>
          <div class="programs-grid">
            <div
              v-for="prog in otherPrograms"
              :key="prog.id"
              class="other-card"
            >
              <RouterLink :to="`/program/${prog.slug}`" class="other-link">
                <div class="other-icon" :style="{ backgroundColor: prog.color }">
                  {{ prog.name.charAt(0) }}
                </div>
                <h3>{{ prog.name }}</h3>
                <p>{{ prog.subtitle }}</p>
              </RouterLink>
            </div>
          </div>
        </div>
      </section>
    </template>

    <!-- Not Found -->
    <template v-else>
      <section class="not-found section">
        <div class="container text-center">
          <h1>Program Tidak Ditemukan</h1>
          <p>Maaf, program yang Anda cari tidak tersedia.</p>
          <RouterLink to="/program" class="btn btn-primary">
            Lihat Semua Program
          </RouterLink>
        </div>
      </section>
    </template>
  </main>
</template>

<style scoped>
/* Hero */
.program-hero {
  padding: calc(var(--navbar-height) + var(--space-8)) 0 var(--space-12);
}

.back-link {
  display: inline-block;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-6);
  transition: color var(--transition-fast);
}

.back-link:hover {
  color: var(--color-primary-600);
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-12);
  align-items: center;
}

.program-title {
  font-size: var(--text-4xl);
  font-weight: var(--font-bold);
  margin-bottom: var(--space-2);
}

.program-subtitle {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-4);
  font-style: italic;
}

.program-desc {
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-6);
}

.hero-cta {
  display: flex;
  gap: var(--space-3);
  flex-wrap: wrap;
}

.hero-visual {
  display: flex;
  justify-content: center;
}

.program-image {
  width: 300px;
  height: 300px;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.program-hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.program-icon {
  font-size: 120px;
  font-weight: var(--font-bold);
}

/* Details */
.details-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6);
}

.detail-card {
  background-color: var(--color-bg-secondary);
  padding: var(--space-6);
  border-radius: var(--radius-xl);
}

.detail-title {
  font-size: var(--text-xl);
  margin-bottom: var(--space-4);
}

.detail-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.detail-list li {
  position: relative;
  padding-left: var(--space-6);
  color: var(--color-text-secondary);
}

.detail-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-secondary-500);
  font-weight: var(--font-bold);
}



/* Bottom CTA */
.cta-card {
  background: linear-gradient(135deg, var(--color-primary-500), var(--color-secondary-500));
  padding: var(--space-10);
  border-radius: var(--radius-2xl);
  text-align: center;
  color: white;
}

.cta-card h2 {
  color: white;
  margin-bottom: var(--space-2);
}

.cta-card p {
  opacity: 0.9;
  margin-bottom: var(--space-6);
}

.cta-buttons {
  display: flex;
  gap: var(--space-4);
  justify-content: center;
  flex-wrap: wrap;
}

.cta-buttons .btn-primary {
  background-color: white;
  color: var(--color-primary-600);
}

/* Other Programs */
.section-title {
  font-size: var(--text-2xl);
  margin-bottom: var(--space-8);
}

.programs-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.other-card {
  background-color: var(--color-bg-primary);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  text-align: center;
  transition: all var(--transition-base);
}

.other-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.other-link {
  display: block;
}

.other-icon {
  width: 60px;
  height: 60px;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
  color: white;
  margin: 0 auto var(--space-4);
}

.other-card h3 {
  font-size: var(--text-lg);
  margin-bottom: var(--space-1);
}

.other-card p {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
}

/* Not Found */
.not-found {
  padding-top: calc(var(--navbar-height) + var(--space-16));
  min-height: 60vh;
}

/* Responsive */
@media (max-width: 1023px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-cta {
    justify-content: center;
  }

  .hero-visual {
    display: none;
  }

  .details-grid {
    grid-template-columns: 1fr;
  }



  .programs-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .program-title {
    font-size: var(--text-3xl);
  }

  .hero-cta {
    flex-direction: column;
    align-items: stretch;
  }



  .cta-buttons {
    flex-direction: column;
    align-items: stretch;
  }

  .programs-grid {
    grid-template-columns: 1fr;
  }
}
</style>
