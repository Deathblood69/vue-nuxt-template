<script setup lang="ts"></script>

<template>
  <AppHeader class="navbar">
    <template #titre>Application</template>
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
.v-app-bar {
  height: 25vh;
}

main {
  margin-top: 25vh;
  min-height: 75vh;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
