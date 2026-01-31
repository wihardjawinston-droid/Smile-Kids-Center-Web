<script setup>
import { ref, reactive } from 'vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import { siteConfig, getWhatsAppLink, getPhoneLink, getEmailLink } from '@/data/siteConfig'
import { programs } from '@/data/programs'

// Form state
const formData = reactive({
  parentName: '',
  childName: '',
  childAge: '',
  program: '',
  phone: '',
  message: '',
  honeypot: '' // Anti-spam
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)
const errors = reactive({})

// Validate form
const validateForm = () => {
  const newErrors = {}

  if (!formData.parentName.trim()) {
    newErrors.parentName = 'Nama orang tua wajib diisi'
  }

  if (!formData.childAge) {
    newErrors.childAge = 'Usia anak wajib diisi'
  }

  if (!formData.program) {
    newErrors.program = 'Program minat wajib dipilih'
  }

  if (!formData.phone.trim()) {
    newErrors.phone = 'Nomor HP/WhatsApp wajib diisi'
  } else if (!/^[\d\s\-+()]+$/.test(formData.phone)) {
    newErrors.phone = 'Format nomor tidak valid'
  }

  Object.keys(errors).forEach(key => delete errors[key])
  Object.assign(errors, newErrors)

  return Object.keys(newErrors).length === 0
}

// Submit form
const submitForm = async () => {
  if (formData.honeypot) {
    return // Bot detected
  }

  if (!validateForm()) {
    return
  }

  isSubmitting.value = true

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))

  // In real implementation, send data to backend
  console.log('Form submitted:', formData)

  isSubmitting.value = false
  isSubmitted.value = true
}

// Reset form
const resetForm = () => {
  Object.keys(formData).forEach(key => formData[key] = '')
  isSubmitted.value = false
}

// Age options
const ageOptions = [
  '6 bulan - 1 tahun',
  '1 - 2 tahun',
  '2 - 3 tahun',
  '3 - 4 tahun',
  '4 - 5 tahun',
  '5 - 6 tahun'
]
</script>

<template>
  <main class="contact-page">
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="container">
        <h1 class="page-title">Hubungi Kami</h1>
        <p class="page-subtitle">Kami siap menjawab pertanyaan dan membantu Anda</p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section section">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Info -->
          <div class="contact-info">
            <h2 class="info-title">Informasi Kontak</h2>

            <div class="info-item">
              <span class="info-icon">📍</span>
              <div>
                <h4>Alamat</h4>
                <p>{{ siteConfig.address }}</p>
              </div>
            </div>

            <div class="info-item">
              <span class="info-icon">📞</span>
              <div>
                <h4>Telepon</h4>
                <a :href="getPhoneLink()">{{ siteConfig.phone }}</a>
              </div>
            </div>

            <div class="info-item">
              <span class="info-icon">💬</span>
              <div>
                <h4>WhatsApp</h4>
                <a :href="getWhatsAppLink()" target="_blank" rel="noopener">Chat Sekarang</a>
              </div>
            </div>

            <div class="info-item">
              <span class="info-icon">✉️</span>
              <div>
                <h4>Email</h4>
                <a :href="getEmailLink()">{{ siteConfig.email }}</a>
              </div>
            </div>

            <div class="info-item">
              <span class="info-icon">🕐</span>
              <div>
                <h4>Jam Operasional</h4>
                <p>{{ siteConfig.operatingHours.weekday }}</p>
                <p>{{ siteConfig.operatingHours.saturday }}</p>
                <p>{{ siteConfig.operatingHours.sunday }}</p>
              </div>
            </div>

            <!-- Quick CTA -->
            <div class="quick-cta">
              <a
                :href="getWhatsAppLink(siteConfig.whatsappMessages.visit)"
                target="_blank"
                rel="noopener"
                class="btn btn-whatsapp btn-lg"
              >
                💬 Chat via WhatsApp
              </a>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="contact-form-wrapper">
            <h2 class="form-title">Formulir Inquiry</h2>
            <p class="form-subtitle">Isi formulir di bawah dan kami akan menghubungi Anda</p>

            <!-- Success State -->
            <div v-if="isSubmitted" class="success-message">
              <div class="success-icon">✅</div>
              <h3>Terima kasih!</h3>
              <p>Formulir Anda telah terkirim. Tim kami akan menghubungi Anda dalam 1x24 jam.</p>
              <button @click="resetForm" class="btn btn-outline">
                Kirim Formulir Lain
              </button>
            </div>

            <!-- Form -->
            <form v-else @submit.prevent="submitForm" class="contact-form">
              <!-- Honeypot -->
              <input
                type="text"
                v-model="formData.honeypot"
                class="honeypot"
                tabindex="-1"
                autocomplete="off"
              />

              <div class="form-group">
                <label for="parentName">Nama Orang Tua <span class="required">*</span></label>
                <input
                  type="text"
                  id="parentName"
                  v-model="formData.parentName"
                  :class="{ error: errors.parentName }"
                  placeholder="Nama lengkap Anda"
                />
                <span v-if="errors.parentName" class="error-text">{{ errors.parentName }}</span>
              </div>

              <div class="form-group">
                <label for="childName">Nama Anak</label>
                <input
                  type="text"
                  id="childName"
                  v-model="formData.childName"
                  placeholder="Nama anak Anda (opsional)"
                />
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="childAge">Usia Anak <span class="required">*</span></label>
                  <select
                    id="childAge"
                    v-model="formData.childAge"
                    :class="{ error: errors.childAge }"
                  >
                    <option value="">Pilih usia</option>
                    <option v-for="age in ageOptions" :key="age" :value="age">
                      {{ age }}
                    </option>
                  </select>
                  <span v-if="errors.childAge" class="error-text">{{ errors.childAge }}</span>
                </div>

                <div class="form-group">
                  <label for="program">Program Minat <span class="required">*</span></label>
                  <select
                    id="program"
                    v-model="formData.program"
                    :class="{ error: errors.program }"
                  >
                    <option value="">Pilih program</option>
                    <option v-for="prog in programs" :key="prog.id" :value="prog.name">
                      {{ prog.name }} ({{ prog.ageRange }})
                    </option>
                  </select>
                  <span v-if="errors.program" class="error-text">{{ errors.program }}</span>
                </div>
              </div>

              <div class="form-group">
                <label for="phone">No. HP/WhatsApp <span class="required">*</span></label>
                <input
                  type="tel"
                  id="phone"
                  v-model="formData.phone"
                  :class="{ error: errors.phone }"
                  placeholder="Contoh: 08123456789"
                />
                <span v-if="errors.phone" class="error-text">{{ errors.phone }}</span>
              </div>

              <div class="form-group">
                <label for="message">Pesan</label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  rows="4"
                  placeholder="Tuliskan pertanyaan atau pesan Anda (opsional)"
                ></textarea>
              </div>

              <button
                type="submit"
                class="btn btn-primary btn-lg submit-btn"
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting">Mengirim...</span>
                <span v-else>Kirim Formulir</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="map-section">
      <div class="container">
        <SectionTitle
          title="Lokasi Kami"
          subtitle="Kunjungi kami di alamat berikut"
        />
        <div class="map-wrapper">
          <iframe 
            :src="siteConfig.mapEmbedUrl"
            width="100%"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
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

/* Contact Grid */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: var(--space-12);
}

/* Contact Info */
.contact-info {
  padding: var(--space-8);
  background-color: var(--color-bg-secondary);
  border-radius: var(--radius-2xl);
}

.info-title {
  font-size: var(--text-2xl);
  margin-bottom: var(--space-6);
  color: var(--color-primary-600);
}

.info-item {
  display: flex;
  gap: var(--space-4);
  margin-bottom: var(--space-5);
}

.info-icon {
  font-size: 28px;
  flex-shrink: 0;
}

.info-item h4 {
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  margin-bottom: var(--space-1);
}

.info-item p,
.info-item a {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
}

.info-item a:hover {
  color: var(--color-primary-600);
}

.quick-cta {
  margin-top: var(--space-8);
  padding-top: var(--space-6);
  border-top: 1px solid var(--color-neutral-200);
}

.quick-cta .btn {
  width: 100%;
  justify-content: center;
}

/* Contact Form */
.contact-form-wrapper {
  padding: var(--space-8);
  background-color: var(--color-bg-primary);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);
}

.form-title {
  font-size: var(--text-2xl);
  margin-bottom: var(--space-2);
}

.form-subtitle {
  color: var(--color-text-secondary);
  margin-bottom: var(--space-6);
}

.honeypot {
  position: absolute;
  left: -9999px;
}

.form-group {
  margin-bottom: var(--space-4);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
}

label {
  display: block;
  font-weight: var(--font-medium);
  margin-bottom: var(--space-2);
}

.required {
  color: var(--color-error);
}

input,
select,
textarea {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  border: 2px solid var(--color-neutral-200);
  border-radius: var(--radius-lg);
  font-size: var(--text-base);
  transition: all var(--transition-fast);
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: var(--color-primary-400);
  box-shadow: 0 0 0 3px var(--color-primary-100);
}

input.error,
select.error {
  border-color: var(--color-error);
}

.error-text {
  display: block;
  color: var(--color-error);
  font-size: var(--text-sm);
  margin-top: var(--space-1);
}

textarea {
  resize: vertical;
  min-height: 100px;
}

.submit-btn {
  width: 100%;
  margin-top: var(--space-4);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Success Message */
.success-message {
  text-align: center;
  padding: var(--space-10);
}

.success-icon {
  font-size: 64px;
  margin-bottom: var(--space-4);
}

.success-message h3 {
  font-size: var(--text-2xl);
  color: var(--color-success);
  margin-bottom: var(--space-2);
}

.success-message p {
  color: var(--color-text-secondary);
  margin-bottom: var(--space-6);
}

/* Map Section */
.map-section {
  padding: var(--space-16) 0;
  background-color: var(--color-bg-secondary);
}

.map-wrapper {
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-md);
}

.map-placeholder {
  height: 400px;
  background: linear-gradient(135deg, var(--color-neutral-100), var(--color-neutral-200));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
}

.map-icon {
  font-size: 64px;
}

.map-placeholder p {
  color: var(--color-text-secondary);
}

.map-address {
  max-width: 400px;
  text-align: center;
  padding: 0 var(--space-4);
}

/* Responsive */
@media (max-width: 1023px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 767px) {
  .page-title {
    font-size: var(--text-3xl);
  }

  .contact-info,
  .contact-form-wrapper {
    padding: var(--space-5);
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .map-placeholder {
    height: 300px;
  }
}
</style>
