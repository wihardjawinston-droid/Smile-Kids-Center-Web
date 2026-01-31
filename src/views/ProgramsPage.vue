<script setup>
import { ref, computed } from 'vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import ProgramCard from '@/components/common/ProgramCard.vue'
import CTASection from '@/components/sections/CTASection.vue'
import { programs } from '@/data/programs'

const selectedAge = ref('all')

const ageFilters = [
  { value: 'all', label: 'Semua Usia' },
  { value: '0-2', label: '0-2 tahun' },
  { value: '2-3', label: '2-3 tahun' },
  { value: '3-4', label: '3-4 tahun' },
  { value: '4-6', label: '4-6 tahun' }
]

const filteredPrograms = computed(() => {
  if (selectedAge.value === 'all') {
    return programs
  }
  
  return programs.filter(program => {
    const ageRange = program.ageRange.toLowerCase()
    if (selectedAge.value === '0-2') {
      return ageRange.includes('bulan') || ageRange.includes('0') || ageRange.includes('1') || ageRange.includes('2')
    }
    if (selectedAge.value === '2-3') {
      return ageRange.includes('2') || ageRange.includes('3')
    }
    if (selectedAge.value === '3-4') {
      return ageRange.includes('3') || ageRange.includes('4')
    }
    if (selectedAge.value === '4-6') {
      return ageRange.includes('4') || ageRange.includes('5') || ageRange.includes('6')
    }
    return true
  })
})
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
        <!-- Filter -->
        <div class="filter-bar">
          <label class="filter-label">Filter berdasarkan usia:</label>
          <div class="filter-options">
            <button
              v-for="filter in ageFilters"
              :key="filter.value"
              class="filter-btn"
              :class="{ active: selectedAge === filter.value }"
              @click="selectedAge = filter.value"
            >
              {{ filter.label }}
            </button>
          </div>
        </div>

        <!-- Programs Grid -->
        <div class="programs-grid">
          <ProgramCard
            v-for="program in filteredPrograms"
            :key="program.id"
            :program="program"
          />
        </div>

        <!-- Empty State -->
        <div v-if="filteredPrograms.length === 0" class="empty-state">
          <span class="empty-icon">🔍</span>
          <p>Tidak ada program untuk filter yang dipilih.</p>
          <button @click="selectedAge = 'all'" class="btn btn-primary">
            Lihat Semua Program
          </button>
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

/* Filter */
.filter-bar {
  margin-bottom: var(--space-8);
  text-align: center;
}

.filter-label {
  display: block;
  font-weight: var(--font-medium);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-3);
}

.filter-options {
  display: flex;
  gap: var(--space-2);
  flex-wrap: wrap;
  justify-content: center;
}

.filter-btn {
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-full);
  border: 2px solid var(--color-neutral-200);
  background-color: var(--color-bg-primary);
  color: var(--color-text-secondary);
  font-weight: var(--font-medium);
  font-size: var(--text-sm);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.filter-btn:hover {
  border-color: var(--color-primary-300);
  color: var(--color-primary-600);
}

.filter-btn.active {
  background-color: var(--color-primary-500);
  border-color: var(--color-primary-500);
  color: white;
}

/* Programs Grid */
.programs-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: var(--space-12);
}

.empty-icon {
  font-size: 64px;
  display: block;
  margin-bottom: var(--space-4);
}

.empty-state p {
  color: var(--color-text-secondary);
  margin-bottom: var(--space-4);
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

  .filter-options {
    gap: var(--space-1);
  }

  .filter-btn {
    padding: var(--space-1) var(--space-3);
    font-size: var(--text-xs);
  }
}
</style>
