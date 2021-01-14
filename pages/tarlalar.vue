<template>
  <div
    class="bg-black h-screen grid grid-cols-3 grid-rows-1 justify-between items-center gap-4"
  >
    <div
      v-for="tarla in tarlaData"
      :key="tarla.tarlaM2"
      class="flex flex-col h-42 w-42 text-center text-white"
    >
      <img
        class="h-42 w-42 rounded-2xl m-2"
        src="../static/tarlaResim.jpeg"
        :alt="tarla.tarlaAçıklama"
      />

      <h1>{{ tarla.tarlaM2 }} m2</h1>
      <h1>Fiyat: {{ tarla.tarlaFiyat }}₺</h1>
      <nuxt-link
        class="border-2 border-solid rounded-2xl p-2"
        :to="`/tarla/${tarla.tarlaM2}`"
        >Satın Al</nuxt-link
      >
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['tarlaData']),
  },
}
</script>
