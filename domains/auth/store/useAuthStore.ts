import { defineStore } from "pinia";
import { fetchService } from "~/services/fetchService";
import { MethodeHTTP } from "~/models/enumerations/MethodeHTTP";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
  }),
  actions: {
    setUser(user) {
      if (user) {
        this.user = user;
      }
    },
    isAuthenticated() {
      return Boolean(this.user);
    },
    async registerUser(user) {
      return await fetchService("/api/users", MethodeHTTP.POST, user);
    },

    async tryLogin(user) {
      return await fetchService("/auth/token", MethodeHTTP.POST, user);
    },

    async resetPassword(user) {
      return await fetchService("/auth/reset-password", MethodeHTTP.POST, user);
    },
  },
});
