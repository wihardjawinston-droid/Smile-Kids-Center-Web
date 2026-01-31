import { createRouter, createWebHistory } from 'vue-router'

// Views
import HomePage from '@/views/HomePage.vue'
import AboutPage from '@/views/AboutPage.vue'
import ProgramsPage from '@/views/ProgramsPage.vue'
import ProgramDetailPage from '@/views/ProgramDetailPage.vue'
import FacilitiesPage from '@/views/FacilitiesPage.vue'
import GalleryPage from '@/views/GalleryPage.vue'
import ContactPage from '@/views/ContactPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: {
      title: 'Smile Kids Center - Pendidikan Anak Usia Dini Berkualitas',
      description: 'Smile Kids Center menyediakan pendidikan anak usia dini dengan pendekatan bermain sambil belajar. Jadwalkan trial class gratis sekarang!'
    }
  },
  {
    path: '/tentang-kami',
    name: 'About',
    component: AboutPage,
    meta: {
      title: 'Tentang Kami - Smile Kids Center',
      description: 'Kenali lebih dekat Smile Kids Center, visi misi, dan pendekatan pembelajaran kami yang mengutamakan perkembangan holistik anak.'
    }
  },
  {
    path: '/program',
    name: 'Programs',
    component: ProgramsPage,
    meta: {
      title: 'Program Kami - Smile Kids Center',
      description: 'Berbagai program pendidikan anak usia dini dari Playgroup hingga TK. Temukan program yang sesuai untuk buah hati Anda.'
    }
  },
  {
    path: '/program/:slug',
    name: 'ProgramDetail',
    component: ProgramDetailPage,
    meta: {
      title: 'Detail Program - Smile Kids Center',
      description: 'Informasi lengkap tentang program pendidikan di Smile Kids Center.'
    }
  },
  {
    path: '/fasilitas',
    name: 'Facilities',
    component: FacilitiesPage,
    meta: {
      title: 'Fasilitas - Smile Kids Center',
      description: 'Fasilitas lengkap dan aman untuk mendukung tumbuh kembang anak di Smile Kids Center.'
    }
  },
  {
    path: '/galeri',
    name: 'Gallery',
    component: GalleryPage,
    meta: {
      title: 'Galeri - Smile Kids Center',
      description: 'Lihat kegiatan seru dan momen berharga anak-anak di Smile Kids Center.'
    }
  },
  {
    path: '/kontak',
    name: 'Contact',
    component: ContactPage,
    meta: {
      title: 'Hubungi Kami - Smile Kids Center',
      description: 'Hubungi Smile Kids Center untuk informasi pendaftaran dan jadwalkan kunjungan sekolah.'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Update document title based on route meta
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Smile Kids Center'
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', to.meta.description || '')
  }
  
  next()
})

export default router
