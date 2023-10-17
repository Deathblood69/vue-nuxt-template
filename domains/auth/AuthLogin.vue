<script setup lang="ts">
import { AuthEvent } from "~/domains/auth/constantes/AuthEvent";
import { useAuthStore } from "~/domains/auth/store/useAuthStore";

const emit = defineEmits(["featureEvent"]);

const authStore = useAuthStore();

const formLogin = {
  username: "",
  password: "",
  remember: false,
};

function handleRedirect(event) {
  const { action } = event.target.dataset;
  let emitAction;
  switch (action) {
    case "register":
      emitAction = AuthEvent.REGISTER;
      break;
    case "forgot":
      emitAction = AuthEvent.FORGOT;
      break;
  }
  if (emitAction) {
    emit("featureEvent", {
      action: emitAction,
    });
  }
}

function handleSubmit() {
  authStore
    .tryLogin(formLogin)
    .then(authStore.setUser)
    .then(() =>
      emit("featureEvent", {
        action: AuthEvent.CONNECT,
      }),
    )
    .catch((e) => {
      console.error(e.message); // TODO Ajouter une alerte
    });
}
</script>

<template>
  <AppFormLogin
    @submit.prevent.capture="handleSubmit"
    @click.stop.capture="handleRedirect"
    v-model:username="formLogin.username"
    v-model:password="formLogin.password"
    v-model:remember="formLogin.remember"
  >
  </AppFormLogin>
</template>

<style scoped>
form {
  width: 30%;
  margin: auto;
}
</style>
