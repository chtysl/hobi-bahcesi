export const state = () => ({
  tarlaData: [
    {
      tarlaM2: 100,
      tarlaFiyat: 1000,
      tarlaAçıklama:
        '100m2 yükseltimiş sebze yatağında 4 kişilik bir ailenin yıl boyunca sebze ihtiyacını karşılayın.',
    },
    {
      tarlaM2: 150,
      tarlaFiyat: 1500,
      tarlaAçıklama:
        '150m2 yükseltimiş sebze yatağında 6 kişilik bir ailenin yıl boyunca sebze ihtiyacını karşılayın.',
    },
    {
      tarlaM2: 200,
      tarlaFiyat: 2000,
      tarlaAçıklama:
        '200m2 yükseltimiş sebze yatağında 8 kişilik bir ailenin yıl boyunca sebze ihtiyacını karşılayın.',
    },
  ],
  sepet: [],
})

// export const getters = {
//   getterValue: (state) => {
//     return state.value
//   },
// }

export const mutations = {
  updateSepet: (state, payload) => {
    state.sepet.push(payload)
  },
}

// export const actions = {
//   updateActionValue({ commit }) {
//     commit('updateValue', payload)
//   },
// }
