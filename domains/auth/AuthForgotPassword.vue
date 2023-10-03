<script setup>
import { AuthEvent } from "~/domains/auth/constantes/AuthEvent";
import AppFormForgotPassword from "~/components/AppFormForgotPassword.vue";
import { useAuthStore } from "~/domains/auth/store/useAuthStore.js";

const emit = defineEmits(["featureEvent"]);

const router = useRouter();

const authStore = useAuthStore();

const formReset = {
  email: "",
};

function handleRedirect(event) {
  const { action } = event.target.dataset;
  if (action === "login") {
    emit("featureEvent", {
      action: AuthEvent.LOGIN,
    });
  }
}

function handleSubmit() {
  authStore
    .resetPassword(formReset)
    .then(() =>
      emit("featureEvent", {
        action: AuthEvent.LOGIN,
      }),
    )
    .catch(() =>
      console.error("Erreur", "La réinitialisation du mot de passe  a échouée"),
    );
}
</script>

<template>
  <AppFormForgotPassword
    @submit.prevent.capture="handleSubmit"
    @click.stop.capture="handleRedirect"
    v-model:email="formReset.email"
  />
</template>

<style scoped>
form {
  width: 30%;
  margin: auto;
}
</style>
