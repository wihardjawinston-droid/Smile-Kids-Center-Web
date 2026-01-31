<script setup>
import SectionTitle from '@/components/common/SectionTitle.vue'
import { siteConfig } from '@/data/siteConfig'
</script>

<template>
  <section class="usp-section section">
    <div class="container">
      <SectionTitle
        title="Mengapa Memilih Kami?"
        subtitle="Keunggulan Smile Kids Center yang membuat kami berbeda"
      />

      <div class="usp-grid">
        <div
          v-for="(item, index) in siteConfig.usp"
          :key="index"
          class="usp-card"
        >
          <div class="usp-icon">{{ item.icon }}</div>
          <h3 class="usp-title">{{ item.title }}</h3>
          <p class="usp-description">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.usp-section {
  background: linear-gradient(135deg, var(--color-bg-tertiary) 0%, var(--color-bg-primary) 100%);
}

.usp-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--space-6);
}

.usp-card {
  text-align: center;
  padding: var(--space-6);
  background-color: var(--color-bg-primary);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
}

.usp-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.usp-icon {
  font-size: 48px;
  margin-bottom: var(--space-4);
}

.usp-title {
  font-size: var(--text-lg);
  font-weight: var(--font-bold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-2);
}

.usp-description {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
}

@media (max-width: 1023px) {
  .usp-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 767px) {
  .usp-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-4);
  }

  .usp-card {
    padding: var(--space-4);
  }

  .usp-icon {
    font-size: 36px;
  }

  .usp-title {
    font-size: var(--text-base);
  }
}
</style>
