<script setup>
import { RouterView } from 'vue-router'
import TheNavbar from '@/components/layout/TheNavbar.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp.vue'
</script>

<template>
  <div id="app">
    <TheNavbar />
    <RouterView />
    <TheFooter />
    <FloatingWhatsApp />
  </div>
</template>

<style>
@import '@/assets/styles/global.css';
</style>
