<template>
  <div>
    <div class="flex flex-col items-center justify-center h-screen bg-img">
      <h1 class="text-white text-5xl">Bakımı Bizden</h1>
      <h2 class="text-white text-4xl">Toplaması Sizden</h2>
      <div
        class="mt-2 text-white rounded-md p-2 bg-transparent border-2 border-solid border-gray-100 text-lg flex flex-col items-center justify-center"
      >
        <nuxt-link to="/tarlalar">Tarlalarımız</nuxt-link>
      </div>
    </div>
    <div
      class="flex justify-between items-center max-h-screen bg-gray-600 p-16"
    >
      <h1 class="text-yellow-600 text-4xl text-center">
        Aylık 1000 ₺'den başlayan fiyatlarla
      </h1>
      <p class="text-white text-2xl pl-8">
        Kendinize ait hobi tarlanız olsun.<br />
        Toprakla bütünleşin stress atın. <br />
        Kendi emeğiniz olan ürünleri aileniz ve çevrenizle paylaşın.<br />
        Sulaması ve gübrelemsini biz yapalım.
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.bg-img {
  background: url('../static/hero.jpeg');
  background-size: cover;
  background-position: center;
}
</style>
