<script setup>
import { useRoute } from "#app";
import AuthLogin from "~/domains/auth/AuthLogin.vue";
import AuthRegister from "~/domains/auth/AuthRegister.vue";
import AuthForgotPassword from "~/domains/auth/AuthForgotPassword.vue";

import { AuthEvent } from "~/domains/auth/constantes/AuthEvent.js";

definePageMeta({
  layout: "auth",
});

const router = useRouter();

const route = useRoute();

const mode = ref(route.params.mode);

const features = {
  register: AuthRegister,
  login: AuthLogin,
  forgot: AuthForgotPassword,
};

const activeFeature = computed(() => features[mode.value] ?? null);

function handleFeatureEvent(value) {
  const { action } = value;
  let path;
  switch (action) {
    case AuthEvent.REGISTER:
      path = "/auth/register";
      break;
    case AuthEvent.LOGIN:
      path = "/auth/login";
      break;
    case AuthEvent.FORGOT:
      path = "/auth/forgot";
      break;
    case AuthEvent.CONNECT:
      path = "/";
      break;
  }
  if (path) {
    router.push(path);
  }
}
</script>

<template v-if="activeFeature">
  <component @featureEvent="handleFeatureEvent" :is="activeFeature" />
</template>
