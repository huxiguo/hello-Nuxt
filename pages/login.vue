<script lang="ts" setup>
definePageMeta({
  layout: 'custum-layout'
})
const nuxtApp = useNuxtApp()
if (process.client) {
  console.log(nuxtApp.$myClient())
}

// 使用$fetch发起请求
const BASE_URL = 'http://mapi.yunog.cn:3000'
interface Idata {
  code: number
  data: any[]
}
const { data } = useAsyncData<Idata>('banner', async () => {
  return await $fetch(`${BASE_URL}/dj/banner`)
})
console.log('code', data.value?.code)
console.log('data', data.value?.data)
</script>

<template>
  <div>
    Page: login
    <span>{{ useNuxtApp().$formatData('12321') }}</span>
  </div>
</template>

<style scoped></style>
