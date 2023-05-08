<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useHomeStore } from '~/store/home'

const homeStore = useHomeStore()
const { count } = storeToRefs(homeStore)
const addCount = () => {
  homeStore.increment()
}
</script>

<template>
  <div>
    Page: detail
    <div>{{ count }}</div>
    <div><button @click="addCount">++</button></div>
  </div>
</template>

<style scoped></style>
