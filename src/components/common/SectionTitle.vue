<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  centered: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div class="section-title" :class="{ centered }">
    <h2 class="title">{{ title }}</h2>
    <p v-if="subtitle" class="subtitle">{{ subtitle }}</p>
  </div>
</template>

<style scoped>
.section-title {
  margin-bottom: var(--space-10);
}

.section-title.centered {
  text-align: center;
}

.title {
  font-size: var(--text-3xl);
  font-weight: var(--font-bold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-3);
  position: relative;
}

.section-title.centered .title::after {
  content: '';
  display: block;
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, var(--color-primary-500), var(--color-secondary-500));
  border-radius: var(--radius-full);
  margin: var(--space-4) auto 0;
}

.section-title:not(.centered) .title::after {
  content: '';
  display: block;
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, var(--color-primary-500), var(--color-secondary-500));
  border-radius: var(--radius-full);
  margin-top: var(--space-4);
}

.subtitle {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  max-width: 600px;
  line-height: var(--leading-relaxed);
}

.section-title.centered .subtitle {
  margin: 0 auto;
}

@media (max-width: 767px) {
  .title {
    font-size: var(--text-2xl);
  }

  .subtitle {
    font-size: var(--text-base);
  }
}
</style>
