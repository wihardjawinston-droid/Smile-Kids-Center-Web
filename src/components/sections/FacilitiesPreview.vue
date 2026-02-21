<script setup>
import { RouterLink } from 'vue-router'
import SectionTitle from '@/components/common/SectionTitle.vue'
import { facilities } from '@/data/facilities'

// Show first 6 facilities
const featuredFacilities = facilities.slice(0, 6)
</script>

<template>
  <section class="facilities-preview section">
    <div class="container">
      <SectionTitle
        title="Fasilitas Kami"
        subtitle="Lingkungan belajar yang aman, nyaman, dan mendukung tumbuh kembang anak"
      />

      <div class="facilities-grid">
        <div
          v-for="facility in featuredFacilities"
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

      <div class="section-cta">
        <RouterLink to="/fasilitas" class="btn btn-outline btn-lg">
          Lihat Semua Fasilitas →
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.facilities-preview {
  background-color: var(--color-bg-primary);
}

.facilities-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.facility-card {
  display: flex;
  gap: var(--space-4);
  padding: var(--space-5);
  background-color: var(--color-bg-secondary);
  border-radius: var(--radius-xl);
  transition: all var(--transition-base);
}

.facility-card:hover {
  background-color: var(--color-primary-50);
  transform: translateX(4px);
}

.facility-image {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: var(--radius-lg);
}

.facility-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-base);
}

.facility-card:hover .facility-img {
  transform: scale(1.1);
}

.facility-info {
  flex: 1;
}

.facility-name {
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-1);
}

.facility-desc {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
}

.section-cta {
  text-align: center;
  margin-top: var(--space-10);
}

@media (max-width: 1023px) {
  .facilities-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .facilities-grid {
    grid-template-columns: 1fr;
  }
}
</style>
