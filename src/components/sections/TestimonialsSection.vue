<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import { testimonials } from '@/data/testimonials'

const currentIndex = ref(0)
let autoplayInterval = null

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + testimonials.length) % testimonials.length
}

const goToSlide = (index) => {
  currentIndex.value = index
}

onMounted(() => {
  autoplayInterval = setInterval(nextSlide, 5000)
})

onUnmounted(() => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
  }
})
</script>

<template>
  <section class="testimonials-section section">
    <div class="container">
      <SectionTitle
        title="Apa Kata Orang Tua?"
        subtitle="Testimoni dari orang tua yang mempercayakan buah hati mereka kepada kami"
      />

      <div class="testimonials-slider">
        <button class="slider-btn prev" @click="prevSlide" aria-label="Previous testimonial">
          ←
        </button>

        <div class="slider-track">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="testimonial.id"
            class="testimonial-card"
            :class="{ active: index === currentIndex }"
          >
            <div class="testimonial-content">
              <div class="quote-icon">"</div>
              <p class="testimonial-text">{{ testimonial.content }}</p>
              <div class="testimonial-author">
                <div class="author-avatar">
                  {{ testimonial.name.charAt(0) }}
                </div>
                <div class="author-info">
                  <span class="author-name">{{ testimonial.name }}</span>
                  <span class="author-role">{{ testimonial.role }}</span>
                </div>
              </div>
              <div class="rating">
                <span v-for="star in testimonial.rating" :key="star">⭐</span>
              </div>
            </div>
          </div>
        </div>

        <button class="slider-btn next" @click="nextSlide" aria-label="Next testimonial">
          →
        </button>
      </div>

      <div class="slider-dots">
        <button
          v-for="(_, index) in testimonials"
          :key="index"
          class="dot"
          :class="{ active: index === currentIndex }"
          @click="goToSlide(index)"
          :aria-label="`Go to testimonial ${index + 1}`"
        ></button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials-section {
  background: linear-gradient(135deg, var(--color-secondary-50) 0%, var(--color-primary-50) 100%);
}

.testimonials-slider {
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.slider-track {
  flex: 1;
  overflow: hidden;
  position: relative;
  min-height: 300px;
}

.testimonial-card {
  position: absolute;
  inset: 0;
  opacity: 0;
  transform: translateX(50px);
  transition: all 0.5s ease;
  pointer-events: none;
}

.testimonial-card.active {
  opacity: 1;
  transform: translateX(0);
  pointer-events: auto;
}

.testimonial-content {
  background-color: var(--color-bg-primary);
  border-radius: var(--radius-2xl);
  padding: var(--space-8);
  box-shadow: var(--shadow-lg);
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.quote-icon {
  font-size: 64px;
  line-height: 1;
  color: var(--color-primary-300);
  font-family: Georgia, serif;
}

.testimonial-text {
  font-size: var(--text-lg);
  line-height: var(--leading-relaxed);
  color: var(--color-text-primary);
  margin-bottom: var(--space-6);
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  margin-bottom: var(--space-4);
}

.author-avatar {
  width: 50px;
  height: 50px;
  border-radius: var(--radius-full);
  background: linear-gradient(135deg, var(--color-primary-400), var(--color-secondary-400));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-xl);
  font-weight: var(--font-bold);
  color: white;
}

.author-info {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.author-name {
  font-weight: var(--font-semibold);
  color: var(--color-text-primary);
}

.author-role {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
}

.rating {
  font-size: var(--text-lg);
}

/* Slider Buttons */
.slider-btn {
  width: 50px;
  height: 50px;
  border-radius: var(--radius-full);
  background-color: var(--color-bg-primary);
  border: none;
  box-shadow: var(--shadow-md);
  font-size: var(--text-xl);
  cursor: pointer;
  transition: all var(--transition-fast);
  flex-shrink: 0;
}

.slider-btn:hover {
  background-color: var(--color-primary-500);
  color: white;
  transform: scale(1.1);
}

/* Dots */
.slider-dots {
  display: flex;
  justify-content: center;
  gap: var(--space-2);
  margin-top: var(--space-6);
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: var(--radius-full);
  background-color: var(--color-neutral-300);
  border: none;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.dot:hover {
  background-color: var(--color-neutral-400);
}

.dot.active {
  background-color: var(--color-primary-500);
  width: 30px;
}

/* Responsive */
@media (max-width: 767px) {
  .slider-btn {
    display: none;
  }

  .testimonial-content {
    padding: var(--space-6);
  }

  .quote-icon {
    font-size: 48px;
  }

  .testimonial-text {
    font-size: var(--text-base);
  }

  .slider-track {
    min-height: 350px;
  }
}
</style>
