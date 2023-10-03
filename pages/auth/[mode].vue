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
  switch (action) {
    case AuthEvent.REGISTER:
      router.push("/auth/register");
      break;
    case AuthEvent.LOGIN:
      router.push("/auth/login");
      break;
    case AuthEvent.FORGOT:
      router.push("/auth/forgot");
      break;
  }
}
</script>

<template v-if="activeFeature">
  <component @featureEvent="handleFeatureEvent" :is="activeFeature" />
</template>
