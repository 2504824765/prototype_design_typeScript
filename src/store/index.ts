import { defineStore } from 'pinia'
export const useUserStore = defineStore('user', {
  state: () => ({
    role: 'student', // student, teacher, company
  }),
  actions: {
    setRole(role: string) {
      this.role = role
    },
  },
})