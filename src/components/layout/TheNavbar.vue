<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { siteConfig, getWhatsAppLink } from '@/data/siteConfig'
import logoImg from '@/assets/logo-smilekids.png'

const route = useRoute()
const isMenuOpen = ref(false)

const navLinks = [
  { name: 'Beranda', path: '/' },
  { name: 'Tentang Kami', path: '/tentang-kami' },
  { name: 'Program', path: '/program' },
  { name: 'Fasilitas', path: '/fasilitas' },
  { name: 'Galeri', path: '/galeri' },
  { name: 'Kontak', path: '/kontak' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const isActive = (path) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}
</script>

<template>
  <header class="navbar">
    <div class="container navbar-container">
      <!-- Logo -->
      <RouterLink to="/" class="navbar-logo" @click="closeMenu">
        <img :src="logoImg" alt="SmileKids Logo" class="logo-icon" />
        <span class="logo-text">{{ siteConfig.schoolName }}</span>
      </RouterLink>

      <!-- Desktop Navigation -->
      <nav class="navbar-nav desktop-nav">
        <RouterLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="nav-link"
          :class="{ active: isActive(link.path) }"
        >
          {{ link.name }}
        </RouterLink>
      </nav>

      <!-- CTA Button -->
      <a
        :href="getWhatsAppLink(siteConfig.whatsappMessages.general)"
        target="_blank"
        rel="noopener"
        class="btn btn-whatsapp navbar-cta"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span>WhatsApp</span>
      </a>

      <!-- Mobile Menu Button -->
      <button
        class="navbar-toggle"
        @click="toggleMenu"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle navigation menu"
      >
        <span class="hamburger" :class="{ open: isMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
    </div>

    <!-- Mobile Navigation -->
    <nav class="navbar-nav mobile-nav" :class="{ open: isMenuOpen }">
      <RouterLink
        v-for="link in navLinks"
        :key="link.path"
        :to="link.path"
        class="nav-link"
        :class="{ active: isActive(link.path) }"
        @click="closeMenu"
      >
        {{ link.name }}
      </RouterLink>
      <a
        :href="getWhatsAppLink(siteConfig.whatsappMessages.general)"
        target="_blank"
        rel="noopener"
        class="btn btn-whatsapp mobile-cta"
        @click="closeMenu"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Chat WhatsApp
      </a>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--navbar-height);
  background-color: var(--color-bg-primary);
  box-shadow: var(--shadow-sm);
  z-index: 1000;
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

/* Logo */
.navbar-logo {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-weight: var(--font-bold);
  font-size: var(--text-xl);
  color: var(--color-text-primary);
  text-decoration: none;
}

.logo-icon {
  height: 45px;
  width: auto;
  object-fit: contain;
}

.logo-text {
  background: linear-gradient(135deg, var(--color-primary-600), var(--color-secondary-500));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Desktop Navigation */
.desktop-nav {
  display: flex;
  align-items: center;
  gap: var(--space-6);
}

.nav-link {
  font-weight: var(--font-medium);
  color: var(--color-text-secondary);
  transition: color var(--transition-fast);
  padding: var(--space-2) 0;
  position: relative;
}

.nav-link:hover {
  color: var(--color-primary-600);
}

.nav-link.active {
  color: var(--color-primary-600);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--color-primary-500);
  border-radius: var(--radius-full);
}

/* CTA Button */
.navbar-cta {
  display: flex;
  padding: var(--space-2) var(--space-4);
  font-size: var(--text-sm);
}

/* Mobile Menu Toggle */
.navbar-toggle {
  display: none;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
}

.hamburger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 24px;
}

.hamburger span {
  display: block;
  height: 2px;
  background-color: var(--color-text-primary);
  border-radius: var(--radius-full);
  transition: all var(--transition-fast);
}

.hamburger.open span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
}

.hamburger.open span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Mobile Navigation */
.mobile-nav {
  display: none;
  flex-direction: column;
  position: absolute;
  top: var(--navbar-height);
  left: 0;
  right: 0;
  background-color: var(--color-bg-primary);
  padding: var(--space-4);
  box-shadow: var(--shadow-lg);
  transform: translateY(-100%);
  opacity: 0;
  visibility: hidden;
  transition: all var(--transition-base);
}

.mobile-nav.open {
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}

.mobile-nav .nav-link {
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-md);
}

.mobile-nav .nav-link:hover,
.mobile-nav .nav-link.active {
  background-color: var(--color-primary-50);
}

.mobile-nav .nav-link.active::after {
  display: none;
}

.mobile-cta {
  margin-top: var(--space-4);
  justify-content: center;
}

/* Responsive */
@media (max-width: 1023px) {
  .desktop-nav {
    display: none;
  }

  .navbar-cta {
    display: none;
  }

  .navbar-toggle {
    display: flex;
  }

  .mobile-nav {
    display: flex;
  }
}

@media (max-width: 767px) {
  .logo-text {
    font-size: var(--text-lg);
  }
}
</style>
