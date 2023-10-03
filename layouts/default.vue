<script setup>
import { useRouter } from "vue-router";

// ====== PARAMETRAGE ====== //

const router = useRouter();

// ====== REQUETES ====== //

// ====== VARIABLES ====== //

const pages = ref([
  {
    path: "/",
    libelle: "Home",
  },
  {
    path: "/about",
    libelle: "About",
  },
  {
    path: "/posts/1",
    libelle: "Post 1",
  },
  {
    path: "/posts/2",
    libelle: "Post 2",
  },
]);

// ====== METHODES ====== //

function handleNavigate(event) {
  const { action, payload } = event.target.dataset;
  switch (action) {
    case "account":
      router.push("/account");
      break;
    case "redirect":
      router.push(payload);
      break;
  }
}
</script>

<template>
  <AppHeader @click.stop.capture="handleNavigate">
    <template #titre>Application</template>
    <template #pages>
      <button
        class="link"
        v-for="page in pages"
        :key="page.path"
        data-action="redirect"
        :data-payload="page.path"
      >
        {{ page.libelle }}
      </button>
    </template>
    <template #actions>
      <button class="link" data-action="account">Account</button>
    </template>
  </AppHeader>

  <main>
    <slot />
  </main>
</template>

<style>
body {
  min-height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
<style scoped>
header {
  height: 10vh;
  background-color: cornflowerblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.link {
  margin: 16px;
  color: white;
  text-decoration: none;
}

.link:hover {
  opacity: 0.6;
  cursor: pointer;
}

button {
  background-color: transparent;
  border: none;
  color: white;
  padding: 8px 16px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  opacity: 1;
  transition: 0.3s;
}

button:hover {
  opacity: 0.6;
  cursor: pointer;
}

main {
  min-height: 90vh;
  overflow-y: auto;
}
</style>
