<script setup>
import { RouterLink } from 'vue-router'
import { siteConfig, getWhatsAppLink, getPhoneLink, getEmailLink } from '@/data/siteConfig'

const currentYear = new Date().getFullYear()

const quickLinks = [
  { name: 'Beranda', path: '/' },
  { name: 'Tentang Kami', path: '/tentang-kami' },
  { name: 'Program', path: '/program' },
  { name: 'Fasilitas', path: '/fasilitas' },
  { name: 'Galeri', path: '/galeri' },
  { name: 'Kontak', path: '/kontak' }
]
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <!-- School Info -->
        <div class="footer-section">
          <div class="footer-logo">
            <span class="logo-icon">🌟</span>
            <span class="logo-text">{{ siteConfig.schoolName }}</span>
          </div>
          <p class="footer-description">
            {{ siteConfig.description }}
          </p>
          <!-- Social Media -->
          <div class="social-links">
            <a
              :href="siteConfig.socialMedia.instagram"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
              class="social-link"
            >
              📷
            </a>
            <a
              :href="siteConfig.socialMedia.facebook"
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
              class="social-link"
            >
              📘
            </a>
            <a
              :href="siteConfig.socialMedia.youtube"
              target="_blank"
              rel="noopener"
              aria-label="YouTube"
              class="social-link"
            >
              ▶️
            </a>
            <a
              :href="siteConfig.socialMedia.tiktok"
              target="_blank"
              rel="noopener"
              aria-label="TikTok"
              class="social-link"
            >
              🎵
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="footer-section">
          <h4 class="footer-title">Menu</h4>
          <ul class="footer-links">
            <li v-for="link in quickLinks" :key="link.path">
              <RouterLink :to="link.path" class="footer-link">
                {{ link.name }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="footer-section">
          <h4 class="footer-title">Kontak</h4>
          <ul class="footer-contact">
            <li>
              <span class="contact-icon">📍</span>
              <span>{{ siteConfig.address }}</span>
            </li>
            <li>
              <span class="contact-icon">📞</span>
              <a :href="getPhoneLink()">{{ siteConfig.phone }}</a>
            </li>
            <li>
              <span class="contact-icon">💬</span>
              <a :href="getWhatsAppLink()" target="_blank" rel="noopener">WhatsApp Chat</a>
            </li>
            <li>
              <span class="contact-icon">✉️</span>
              <a :href="getEmailLink()">{{ siteConfig.email }}</a>
            </li>
          </ul>
        </div>

        <!-- Operating Hours -->
        <div class="footer-section">
          <h4 class="footer-title">Jam Operasional</h4>
          <ul class="footer-hours">
            <li>{{ siteConfig.operatingHours.weekday }}</li>
            <li>{{ siteConfig.operatingHours.saturday }}</li>
            <li>{{ siteConfig.operatingHours.sunday }}</li>
          </ul>
          <a
            :href="getWhatsAppLink(siteConfig.whatsappMessages.visit)"
            target="_blank"
            rel="noopener"
            class="btn btn-primary btn-sm footer-cta"
          >
            Jadwalkan Kunjungan
          </a>
        </div>
      </div>

      <!-- Copyright -->
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} {{ siteConfig.schoolName }}. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-neutral-900);
  color: var(--color-neutral-300);
  padding: var(--space-16) 0 var(--space-6);
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1.5fr 1.5fr;
  gap: var(--space-8);
}

/* Footer Logo & Description */
.footer-logo {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin-bottom: var(--space-4);
}

.logo-icon {
  font-size: var(--text-2xl);
}

.logo-text {
  font-size: var(--text-xl);
  font-weight: var(--font-bold);
  color: var(--color-text-inverse);
}

.footer-description {
  font-size: var(--text-sm);
  line-height: var(--leading-relaxed);
  color: var(--color-neutral-400);
  margin-bottom: var(--space-4);
}

/* Social Links */
.social-links {
  display: flex;
  gap: var(--space-3);
}

.social-link {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-neutral-800);
  border-radius: var(--radius-lg);
  font-size: var(--text-lg);
  transition: all var(--transition-fast);
}

.social-link:hover {
  background-color: var(--color-primary-500);
  transform: translateY(-2px);
}

/* Footer Titles */
.footer-title {
  color: var(--color-text-inverse);
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  margin-bottom: var(--space-4);
}

/* Footer Links */
.footer-links {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.footer-link {
  color: var(--color-neutral-400);
  font-size: var(--text-sm);
  transition: color var(--transition-fast);
}

.footer-link:hover {
  color: var(--color-primary-400);
}

/* Contact List */
.footer-contact {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.footer-contact li {
  display: flex;
  gap: var(--space-2);
  font-size: var(--text-sm);
  color: var(--color-neutral-400);
}

.contact-icon {
  flex-shrink: 0;
}

.footer-contact a {
  color: var(--color-neutral-400);
  transition: color var(--transition-fast);
}

.footer-contact a:hover {
  color: var(--color-primary-400);
}

/* Operating Hours */
.footer-hours {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.footer-hours li {
  font-size: var(--text-sm);
  color: var(--color-neutral-400);
}

.footer-cta {
  margin-top: var(--space-4);
}

/* Footer Bottom */
.footer-bottom {
  margin-top: var(--space-12);
  padding-top: var(--space-6);
  border-top: 1px solid var(--color-neutral-800);
  text-align: center;
}

.footer-bottom p {
  font-size: var(--text-sm);
  color: var(--color-neutral-500);
}

/* Responsive */
@media (max-width: 1023px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: var(--space-10);
  }

  .footer-section {
    text-align: center;
  }

  .footer-logo {
    justify-content: center;
  }

  .social-links {
    justify-content: center;
  }

  .footer-links,
  .footer-contact,
  .footer-hours {
    align-items: center;
  }

  .footer-contact li {
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
  }
}
</style>
