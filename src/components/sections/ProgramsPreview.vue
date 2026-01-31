<script setup>
import { RouterLink } from 'vue-router'
import SectionTitle from '@/components/common/SectionTitle.vue'
import ProgramCard from '@/components/common/ProgramCard.vue'
import { programs } from '@/data/programs'

// Show only first 6 programs
const featuredPrograms = programs.slice(0, 6)
</script>

<template>
  <section class="programs-preview section">
    <div class="container">
      <SectionTitle
        title="Program Kami"
        subtitle="Berbagai program pendidikan yang dirancang khusus untuk setiap tahap perkembangan anak"
      />

      <div class="programs-grid">
        <ProgramCard
          v-for="program in featuredPrograms"
          :key="program.id"
          :program="program"
        />
      </div>

      <div class="section-cta">
        <RouterLink to="/program" class="btn btn-outline btn-lg">
          Lihat Semua Program →
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.programs-preview {
  background-color: var(--color-bg-secondary);
}

.programs-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.section-cta {
  text-align: center;
  margin-top: var(--space-10);
}

@media (max-width: 1023px) {
  .programs-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .programs-grid {
    grid-template-columns: 1fr;
  }
}
</style>
