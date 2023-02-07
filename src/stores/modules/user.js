import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: {
      id: 'abc123',
      name: 'Adam Jahr',
    },
  }),
  // getters
  // actions
})
