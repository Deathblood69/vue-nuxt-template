<script setup lang="ts">
import { Page } from "~/models/interfaces/Page";

const array: Array<Page> = [];
const pages = ref(array);
</script>

<template>
  <header>
    <div id="container">
      <h1 class="link">
        <slot name="titre">Titre</slot>
      </h1>
      <nav id="container" class="link">
        <slot name="pages">
          <a
            class="link"
            v-for="page in pages"
            :key="page.path"
            :href="page.path"
          >
            {{ page.libelle }}
          </a>
        </slot>
      </nav>
    </div>

    <div>
      <slot name="actions" />
    </div>
  </header>
</template>

<style scoped>
#container {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
}

.link {
  margin: 16px;
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
