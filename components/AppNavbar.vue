<template>
  <nav>
    <ul class="fixed flex justify-between text-base text-white p-4 w-screen">
      <li>
        <nuxt-link to="/"><AppLogo /></nuxt-link>
      </li>
      <li><nuxt-link to="/tarlalar">Tarlalar</nuxt-link></li>
      <li><nuxt-link to="/hakkimizda">Hakkımızda</nuxt-link></li>
      <li><nuxt-link to="/sepet">Sepet</nuxt-link></li>
    </ul>
  </nav>
</template>

<script>
import AppLogo from '@/components/AppLogo.vue'

export default {
  components: {
    AppLogo,
  },
}
</script>
