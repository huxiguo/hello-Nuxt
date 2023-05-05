<template>
  <div>
    parent
    <NuxtPage></NuxtPage>
  </div>
</template>

<script setup lang="ts">
// 中间件
definePageMeta({
  middleware: ['home']
})
</script>

<style scoped lang="scss"></style>
