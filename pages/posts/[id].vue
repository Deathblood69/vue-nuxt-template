<script setup lang="ts">
const route = useRoute();

definePageMeta({
  middleware: "auth",
});
</script>

<template>Post {{ route.params.id }}</template>
