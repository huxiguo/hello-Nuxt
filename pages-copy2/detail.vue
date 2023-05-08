<script lang="ts" setup>
// import { fetchHomeInfoData } from '~/service/home'
// const { data } = await fetchHomeInfoData()

// console.log(data.value?.code)
// console.log(data.value?.data)
const { data } = await useLazyFetch('/api/homeInfo')
console.log('data', data)
</script>

<template>
  <div>Page: detail</div>
</template>

<style scoped></style>
