<script setup lang="ts">
import { Page } from "~/models/interfaces/Page";

const array: Array<Page> = [];
const pages = ref(array);
</script>

<template>
  <v-app-bar id="appbar" :elevation="0">
    <h1>
      <slot name="titre"></slot>
    </h1>
    <slot name="pages">
      <nav id="container">
        <a
          class="link"
          v-for="page in pages"
          :key="page.path"
          :href="page.path"
        >
          {{ page.libelle }}
        </a>
      </nav>
    </slot>
    <slot name="actions" />
  </v-app-bar>
</template>

<style scoped>
#appbar {
  background-color: cornflowerblue;
  display: flex;
  justify-content: center;
  align-items: center;
}

#appbar h1 {
  margin: 16px;
  width: auto;
  color: white;
}

#appbar nav {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

#container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: white;
}

button {
  background-color: dimgrey;
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

a {
  text-decoration: none;
}

a:visited {
  color: inherit;
  text-decoration: none;
}
</style>
