<script setup>
import SectionTitle from '@/components/common/SectionTitle.vue'
import ProgramCard from '@/components/common/ProgramCard.vue'
import CTASection from '@/components/sections/CTASection.vue'
import { programs } from '@/data/programs'
</script>

<template>
  <main class="programs-page">
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="container">
        <h1 class="page-title">Program Kami</h1>
        <p class="page-subtitle">Berbagai program pendidikan untuk setiap tahap perkembangan anak</p>
      </div>
    </section>

    <!-- Programs List -->
    <section class="programs-section section">
      <div class="container">
        <!-- Programs Grid -->
        <div class="programs-grid">
          <ProgramCard
            v-for="program in programs"
            :key="program.id"
            :program="program"
          />
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

/* Programs Grid */
.programs-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

@media (max-width: 1023px) {
  .programs-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .page-title {
    font-size: var(--text-3xl);
  }

  .programs-grid {
    grid-template-columns: 1fr;
  }
}
</style>
