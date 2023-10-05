// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    "/_nuxt/**": { headers: { "access-control-allow-methods": "GET" } },
    "/api/**": { cors: false },
  },
});
