<script setup>
import { AuthEvent } from "~/domains/auth/constantes/AuthEvent";
import { useAuthStore } from "~/domains/auth/store/useAuthStore";

const emit = defineEmits(["featureEvent"]);

const authStore = useAuthStore();

const formRegister = {
  email: "",
  username: "",
  password: "",
  passwordRepeat: "",
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
    .registerUser(formRegister)
    .then(() =>
      emit("featureEvent", {
        action: AuthEvent.LOGIN,
      }),
    )
    .catch((e) => {
      console.error(e.message); // TODO Ajouter une alerte
    });
}
</script>

<template>
  <AppFormRegister
    @submit.prevent.capture="handleSubmit"
    @click.stop.capture="handleRedirect"
    v-model:email="formRegister.email"
    v-model:username="formRegister.username"
    v-model:password="formRegister.password"
    v-model:passwordRepeat="formRegister.passwordRepeat"
  />
</template>

<style scoped>
form {
  width: 30%;
  margin: auto;
}
</style>
