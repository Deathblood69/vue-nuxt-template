import {useAuthStore} from "~/domains/auth/store/useAuthStore.js";

export default defineNuxtRouteMiddleware(() => {
  const authStore = useAuthStore()
  if (!authStore.isAuthenticated()) {
    return navigateTo("/auth/login");
  }
});
