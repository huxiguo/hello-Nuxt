<script lang="ts" setup>
defineProps({
  error: Object
})
const goHome = () => {
  clearError({
    redirect: '/'
  })
}
</script>

<template>
  <div>error ppppp {{ error }} ---{{ error }}</div>
  <button @click="goHome">home</button>
</template>

<style scoped></style>
