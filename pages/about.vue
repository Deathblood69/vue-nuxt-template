<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});
</script>

<template>
  <section>
    <p>This page will be displayed at the /about route.</p>
  </section>
</template>
