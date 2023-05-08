<template>
  <div>home page</div>
</template>

<script setup lang="ts">
const { data } = await useLazyFetch('/api/login', {
  method: 'GET'
})
console.log('data', data)
</script>

<style scoped lang="scss"></style>
