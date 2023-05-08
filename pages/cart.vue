<script lang="ts" setup>
const count = useCount()
const addCount = () => {
  count.value++
}
</script>

<template>
  <div>
    Page: cart
    <div>{{ count }}</div>
    <div>
      <button @click="addCount">count++</button>
    </div>
  </div>
</template>

<style scoped></style>
