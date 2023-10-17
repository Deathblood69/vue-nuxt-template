import {useAuthStore} from "~/domains/auth/store/useAuthStore.ts";

export default defineNuxtRouteMiddleware(() => {
  const authStore = useAuthStore()
  if (!authStore.isAuthenticated()) {
    return navigateTo("/auth/login");
  }
});
