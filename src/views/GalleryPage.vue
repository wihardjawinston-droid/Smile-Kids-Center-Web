<script setup>
import { ref } from 'vue'
import CTASection from '@/components/sections/CTASection.vue'

// Placeholder gallery images
const galleryImages = ref([
  { id: 1, category: 'kelas', alt: 'Kegiatan di kelas' },
  { id: 2, category: 'kelas', alt: 'Belajar membaca' },
  { id: 3, category: 'event', alt: 'Perayaan hari kemerdekaan' },
  { id: 4, category: 'outdoor', alt: 'Bermain di playground' },
  { id: 5, category: 'kelas', alt: 'Aktivitas seni' },
  { id: 6, category: 'event', alt: 'Pentas seni' },
  { id: 7, category: 'outdoor', alt: 'Outing ke taman' },
  { id: 8, category: 'kelas', alt: 'Eksperimen sains' },
  { id: 9, category: 'event', alt: 'Wisuda TK' },
  { id: 10, category: 'kelas', alt: 'Bermain balok' },
  { id: 11, category: 'outdoor', alt: 'Senam pagi' },
  { id: 12, category: 'event', alt: 'Peringatan hari kartini' },
  { id: 13, category: 'kelas', alt: 'Cooking class' },
  { id: 14, category: 'outdoor', alt: 'Berkebun' },
  { id: 15, category: 'kelas', alt: 'Circle time' },
  { id: 16, category: 'event', alt: 'Family day' }
])

const selectedCategory = ref('all')
const lightboxOpen = ref(false)
const lightboxImage = ref(null)

const categories = [
  { value: 'all', label: 'Semua' },
  { value: 'kelas', label: 'Kegiatan Kelas' },
  { value: 'event', label: 'Event' },
  { value: 'outdoor', label: 'Outdoor' }
]

const filteredImages = ref(galleryImages.value)

const filterImages = (category) => {
  selectedCategory.value = category
  if (category === 'all') {
    filteredImages.value = galleryImages.value
  } else {
    filteredImages.value = galleryImages.value.filter(img => img.category === category)
  }
}

const openLightbox = (image) => {
  lightboxImage.value = image
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  lightboxImage.value = null
  document.body.style.overflow = ''
}

const getEmoji = (category) => {
  const emojis = {
    kelas: '📚',
    event: '🎉',
    outdoor: '🌳'
  }
  return emojis[category] || '📷'
}
</script>

<template>
  <main class="gallery-page">
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="container">
        <h1 class="page-title">Galeri</h1>
        <p class="page-subtitle">Momen-momen berharga dan kegiatan seru anak-anak kami</p>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="gallery-section section">
      <div class="container">
        <!-- Filter -->
        <div class="filter-bar">
          <button
            v-for="cat in categories"
            :key="cat.value"
            class="filter-btn"
            :class="{ active: selectedCategory === cat.value }"
            @click="filterImages(cat.value)"
          >
            {{ cat.label }}
          </button>
        </div>

        <!-- Gallery Grid -->
        <div class="gallery-grid">
          <div
            v-for="image in filteredImages"
            :key="image.id"
            class="gallery-item"
            @click="openLightbox(image)"
          >
            <div class="image-placeholder">
              <span class="placeholder-emoji">{{ getEmoji(image.category) }}</span>
              <span class="placeholder-text">{{ image.alt }}</span>
            </div>
            <div class="image-overlay">
              <span class="view-icon">🔍</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <div
      v-if="lightboxOpen"
      class="lightbox"
      @click.self="closeLightbox"
    >
      <button class="lightbox-close" @click="closeLightbox">✕</button>
      <div class="lightbox-content">
        <div class="lightbox-image">
          <span class="lightbox-emoji">{{ getEmoji(lightboxImage?.category) }}</span>
          <span class="lightbox-text">{{ lightboxImage?.alt }}</span>
        </div>
        <p class="lightbox-caption">{{ lightboxImage?.alt }}</p>
      </div>
    </div>

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
  display: flex;
  gap: var(--space-2);
  justify-content: center;
  margin-bottom: var(--space-8);
  flex-wrap: wrap;
}

.filter-btn {
  padding: var(--space-2) var(--space-5);
  border-radius: var(--radius-full);
  border: 2px solid var(--color-neutral-200);
  background-color: var(--color-bg-primary);
  color: var(--color-text-secondary);
  font-weight: var(--font-medium);
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

/* Gallery Grid */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-4);
}

.gallery-item {
  position: relative;
  aspect-ratio: 1;
  border-radius: var(--radius-lg);
  overflow: hidden;
  cursor: pointer;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--color-neutral-100), var(--color-neutral-200));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  transition: transform var(--transition-base);
}

.placeholder-emoji {
  font-size: 48px;
}

.placeholder-text {
  font-size: var(--text-xs);
  color: var(--color-text-secondary);
  text-align: center;
  padding: 0 var(--space-2);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-fast);
}

.view-icon {
  font-size: 32px;
}

.gallery-item:hover .image-placeholder {
  transform: scale(1.1);
}

.gallery-item:hover .image-overlay {
  opacity: 1;
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-4);
}

.lightbox-close {
  position: absolute;
  top: var(--space-4);
  right: var(--space-4);
  width: 48px;
  height: 48px;
  border-radius: var(--radius-full);
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  font-size: var(--text-xl);
  cursor: pointer;
  transition: background-color var(--transition-fast);
}

.lightbox-close:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.lightbox-content {
  max-width: 90%;
  max-height: 90%;
}

.lightbox-image {
  width: 600px;
  max-width: 100%;
  aspect-ratio: 4/3;
  background: linear-gradient(135deg, var(--color-neutral-700), var(--color-neutral-800));
  border-radius: var(--radius-xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
}

.lightbox-emoji {
  font-size: 100px;
}

.lightbox-text {
  color: white;
  font-size: var(--text-lg);
}

.lightbox-caption {
  text-align: center;
  color: white;
  margin-top: var(--space-4);
  font-size: var(--text-lg);
}

/* Responsive */
@media (max-width: 1023px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 767px) {
  .page-title {
    font-size: var(--text-3xl);
  }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-2);
  }

  .placeholder-emoji {
    font-size: 32px;
  }
}
</style>
