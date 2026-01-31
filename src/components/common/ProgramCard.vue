<script setup>
import { RouterLink } from 'vue-router'
import { getWhatsAppLink, siteConfig } from '@/data/siteConfig'

const props = defineProps({
  program: {
    type: Object,
    required: true
  }
})

const whatsappLink = getWhatsAppLink(siteConfig.whatsappMessages.program(props.program.name))
</script>

<template>
  <article class="program-card">
    <div class="card-image" :style="{ backgroundColor: program.color + '20' }">
      <div class="age-badge">{{ program.ageRange }}</div>
      <span class="program-icon" :style="{ backgroundColor: program.color }">
        {{ program.name.charAt(0) }}
      </span>
    </div>
    <div class="card-body">
      <h3 class="card-title">{{ program.name }}</h3>
      <p class="card-schedule">📅 {{ program.schedule }}</p>
      <p class="card-desc">{{ program.shortDesc }}</p>
      <div class="card-actions">
        <RouterLink :to="`/program/${program.slug}`" class="btn btn-primary btn-sm">
          Lihat Detail
        </RouterLink>
        <a :href="whatsappLink" target="_blank" rel="noopener" class="btn btn-outline btn-sm">
          Tanya
        </a>
      </div>
    </div>
  </article>
</template>

<style scoped>
.program-card {
  background-color: var(--color-bg-primary);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
}

.program-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.card-image {
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.age-badge {
  position: absolute;
  top: var(--space-3);
  right: var(--space-3);
  background-color: var(--color-bg-primary);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  color: var(--color-text-secondary);
  box-shadow: var(--shadow-sm);
}

.program-icon {
  width: 80px;
  height: 80px;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-3xl);
  font-weight: var(--font-bold);
  color: white;
}

.card-body {
  padding: var(--space-5);
}

.card-title {
  font-size: var(--text-xl);
  font-weight: var(--font-bold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-2);
}

.card-schedule {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-3);
}

.card-desc {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-4);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-actions {
  display: flex;
  gap: var(--space-2);
}

.card-actions .btn {
  flex: 1;
  justify-content: center;
}
</style>
