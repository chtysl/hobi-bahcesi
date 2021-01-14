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
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['sepet']),
  },
}
</script>
