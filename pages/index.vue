<template>
  <div>
    home page
    <div>{{ count }}</div>
    <div>
      <button @click="InCount">count--</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const count = useCount()
const InCount = () => {
  count.value--
}
</script>

<style scoped lang="scss"></style>
