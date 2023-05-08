<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useHomeStore } from '~/store/home'

const homeStore = useHomeStore()
const { helloData } = storeToRefs(homeStore)
const fetchData = () => {
  homeStore.fetchHelloData()
}
</script>

<template>
  <div>
    mine
    <div><button @click="fetchData">fetch helloData</button></div>
    <div>{{ helloData }}</div>
  </div>
</template>
