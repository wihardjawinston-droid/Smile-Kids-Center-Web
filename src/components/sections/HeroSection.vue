<script setup>
import { RouterLink } from 'vue-router'
import { siteConfig, getWhatsAppLink } from '@/data/siteConfig'
</script>

<template>
  <section class="hero">
    <div class="hero-bg">
      <div class="hero-pattern"></div>
    </div>
    <div class="container hero-container">
      <div class="hero-content">
        <span class="hero-badge">🌟 {{ siteConfig.tagline }}</span>
        <h1 class="hero-title">
          Tempat Terbaik untuk
          <span class="highlight">Tumbuh Kembang</span>
          Buah Hati Anda
        </h1>
        <p class="hero-subtitle">
          {{ siteConfig.description }}
        </p>
        <div class="hero-cta">
          <a
            :href="getWhatsAppLink(siteConfig.whatsappMessages.trial)"
            target="_blank"
            rel="noopener"
            class="btn btn-primary btn-lg"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            Jadwalkan Trial Class
          </a>
          <a
            :href="getWhatsAppLink(siteConfig.whatsappMessages.general)"
            target="_blank"
            rel="noopener"
            class="btn btn-whatsapp btn-lg"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat WhatsApp
          </a>
        </div>
        <div class="hero-stats">
          <div class="stat">
            <span class="stat-number">10+</span>
            <span class="stat-label">Tahun Pengalaman</span>
          </div>
          <div class="stat">
            <span class="stat-number">500+</span>
            <span class="stat-label">Alumni Sukses</span>
          </div>
          <div class="stat">
            <span class="stat-number">98%</span>
            <span class="stat-label">Orang Tua Puas</span>
          </div>
        </div>
      </div>
      <div class="hero-visual">
        <div class="hero-image-wrapper">
          <div class="hero-image-placeholder">
            <span class="placeholder-emoji">👨‍👩‍👧‍👦</span>
            <span class="placeholder-text">Foto Anak-anak Belajar</span>
          </div>
        </div>
        <div class="floating-badge badge-1">🎨 Kreatif</div>
        <div class="floating-badge badge-2">📚 Edukatif</div>
        <div class="floating-badge badge-3">😊 Menyenangkan</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: calc(100vh - var(--navbar-height));
  padding-top: calc(var(--navbar-height) + var(--space-8));
  padding-bottom: var(--space-12);
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--color-primary-50) 0%, var(--color-secondary-50) 50%, var(--color-bg-primary) 100%);
  z-index: -1;
}

.hero-pattern {
  position: absolute;
  inset: 0;
  opacity: 0.5;
  background-image: radial-gradient(var(--color-primary-200) 1px, transparent 1px);
  background-size: 30px 30px;
}

.hero-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-12);
  align-items: center;
}

/* Hero Content */
.hero-content {
  max-width: 600px;
}

.hero-badge {
  display: inline-block;
  background-color: var(--color-primary-100);
  color: var(--color-primary-800);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-full);
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  margin-bottom: var(--space-4);
}

.hero-title {
  font-size: var(--text-5xl);
  font-weight: var(--font-extrabold);
  line-height: var(--leading-tight);
  color: var(--color-text-primary);
  margin-bottom: var(--space-6);
}

.hero-title .highlight {
  background: linear-gradient(135deg, var(--color-primary-500), var(--color-secondary-500));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-8);
}

.hero-cta {
  display: flex;
  gap: var(--space-4);
  flex-wrap: wrap;
  margin-bottom: var(--space-10);
}

/* Stats */
.hero-stats {
  display: flex;
  gap: var(--space-8);
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: var(--text-3xl);
  font-weight: var(--font-bold);
  color: var(--color-primary-600);
}

.stat-label {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
}

/* Hero Visual */
.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image-wrapper {
  width: 100%;
  max-width: 500px;
  aspect-ratio: 4/3;
  border-radius: var(--radius-2xl);
  overflow: hidden;
  box-shadow: var(--shadow-2xl);
  background: linear-gradient(135deg, var(--color-primary-100), var(--color-secondary-100));
}

.hero-image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
}

.placeholder-emoji {
  font-size: 80px;
}

.placeholder-text {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
}

/* Floating Badges */
.floating-badge {
  position: absolute;
  background-color: var(--color-bg-primary);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-full);
  box-shadow: var(--shadow-lg);
  font-weight: var(--font-semibold);
  font-size: var(--text-sm);
  animation: float 3s ease-in-out infinite;
}

.badge-1 {
  top: 10%;
  left: 0;
  animation-delay: 0s;
}

.badge-2 {
  top: 50%;
  right: 0;
  animation-delay: 1s;
}

.badge-3 {
  bottom: 10%;
  left: 10%;
  animation-delay: 2s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Responsive */
@media (max-width: 1023px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-content {
    max-width: 100%;
  }

  .hero-cta {
    justify-content: center;
  }

  .hero-stats {
    justify-content: center;
  }

  .hero-visual {
    display: none;
  }
}

@media (max-width: 767px) {
  .hero {
    padding-top: calc(var(--navbar-height) + var(--space-6));
    min-height: auto;
  }

  .hero-title {
    font-size: var(--text-3xl);
  }

  .hero-subtitle {
    font-size: var(--text-base);
  }

  .hero-cta {
    flex-direction: column;
    align-items: stretch;
  }

  .hero-cta .btn {
    justify-content: center;
  }

  .hero-stats {
    flex-wrap: wrap;
    gap: var(--space-6);
  }

  .stat {
    flex: 1 0 40%;
  }
}
</style>
