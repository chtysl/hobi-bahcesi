<template>
  <div
    class="h-screen flex justify-center items-center bg-black text-white text-center"
  >
    <AppTarla />
    <div class="flex flex-col items-center p-4">
      <h1 class="m-2">{{ currentTarla.tarlaM2 }} m2</h1>
      <h1 class="m-2">Fiyat: {{ currentTarla.tarlaFiyat }}₺</h1>
      <h1 class="m-2">Özellikler: {{ currentTarla.tarlaAçıklama }}</h1>
      <button
        class="border-2 border-solid rounded-2xl p-2 w-2/5 text-center"
        @click="sepeteEkle"
      >
        Sepete Ekle
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppTarla from '@/components/AppTarla.vue'
export default {
  components: {
    AppTarla,
  },
  data() {
    return {
      id: this.$route.params.slug,
    }
  },
  computed: {
    ...mapState(['tarlaData']),
    currentTarla() {
      let result
      for (let i = 0; i < this.tarlaData.length; i++) {
        // eslint-disable-next-line eqeqeq
        if (this.tarlaData[i].tarlaM2 == this.id) {
          result = this.tarlaData[i]
        }
      }

      return result
    },
  },
  methods: {
    sepeteEkle() {
      this.$store.commit('updateSepet', this.currentTarla)
    },
  },
}
</script>
