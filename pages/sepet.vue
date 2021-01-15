<template>
  <div
    class="h-screen bg-black text-white flex justify-center items-center p-4"
  >
    <table class="m-40">
      <thead>
        <tr>
          <th class="pr-5">Tarla m2</th>
          <th>Tarla Fiyat</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="tarla in sepet" :key="tarla.tarlaM2" class="border-2">
          <td>{{ tarla.tarlaM2 }}</td>
          <td>{{ tarla.tarlaFiyat }}</td>
        </tr>
      </tbody>
      <tr class="mt-2">
        <td>Toplam fiyat: {{ toplamFiyat }}</td>
      </tr>
    </table>
    <AppSiparisForm />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppSiparisForm from '@/components/AppSiparisForm.vue'
export default {
  components: {
    AppSiparisForm,
  },
  computed: {
    ...mapState(['sepet']),
    toplamFiyat() {
      if (!this.sepet.length) return 0
      return this.sepet.reduce((acc, next) => acc + +next.tarlaFiyat, 0)
    },
  },
}
</script>
