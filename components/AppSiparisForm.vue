<template>
  <div>
    <form>
      <h3>İsim</h3>
      <input
        v-model="isim"
        class="rounded-md border-black border-2 text-black"
        type="text"
        required
      />
      <h3>Soyisim</h3>
      <input
        v-model="soyisim"
        class="rounded-md border-black border-2 text-black"
        type="text"
        required
      />
      <h3>Email</h3>
      <input
        v-model="email"
        class="rounded-md border-black border-2 text-black"
        type="email"
        required
      />
      <h3>Adres</h3>
      <input
        v-model="adres"
        class="rounded-md border-black border-2 text-black"
        type="text"
        required
      /><br />
      <button @click.prevent="onayla">Sipariş Ver</button>
    </form>
    <div v-if="onaylı">
      <h1>Sayın {{ isim }} {{ soyisim }}</h1>
      <h1>Siparişiniz onaylanmıştır.</h1>
      <h1>En kısa sürede {{ adres }} teslim edilecektir.</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isim: '',
      soyisim: '',
      email: '',
      adres: '',
      onaylı: false,
    }
  },
  methods: {
    onayla() {
      if (this.isim && this.soyisim && this.email && this.adres) {
        this.onaylı = true
      }
    },
  },
}
</script>
