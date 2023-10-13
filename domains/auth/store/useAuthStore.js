import {defineStore} from 'pinia'
import {fetchService} from "~/services/fetchService.js";

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null
  }),
  actions: {
    setUser(user) {
      if (user) {
        this.user = user;
      }
    },
    isAuthenticated() {
      return Boolean(this.user)
    },
    async registerUser(user) {
      try {
        return await fetchService("/api/users", "POST", user);
      } catch (e) {
        throw new Error(e);
      }
    },

    async tryLogin(user) {
      try {
        return await fetchService("/auth/token", "POST", user)
      } catch (e) {
        throw new Error(e);
      }
    },

    async resetPassword(user) {
      try {
        return await fetchService("/auth/reset-password", "POST", user,);
      } catch (e) {
        throw new Error(e);
      }
    }
  },
})
