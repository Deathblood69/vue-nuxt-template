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
header {
  height: 25vh;
  background-color: cornflowerblue;
  display: flex;
  justify-content: center;
  align-items: center;
}

main {
  min-height: 75vh;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
