<script lang="ts" setup>
definePageMeta({
  layout: 'custum-layout'
})
const nuxtApp = useNuxtApp()
if (process.client) {
  console.log(nuxtApp.$myClient())
}

// 使用$fetch发起请求
const BASE_URL = 'http://codercba.com:9060/juanpi/api/'
interface Idata {
  code: number
  data: any[]
}
// const { data } = await useFetch<Idata>(`${BASE_URL}/dj/banner`)
// const { data } = await useFetch<Idata>('/homeInfo', {
//   method: 'GET',
//   baseURL: BASE_URL,
//   lazy: true,
//   params: {
//     name: 'liujun'
//   },
//   // 拦截器 client server
//   onRequest({ request, options }) {
//     console.log('onRequest', options)
//     // options.headers = {
//     //   token: 'xxxx'
//     // }
//   },
//   onRequestError({ request, options, error }) {
//     console.log('onRequestError', error)
//   },
//   onResponse({ response, options }) {
//     console.log('onResponse', response._data)
//   },
//   onResponseError({ request, response, options, error }) {
//     console.log('onResponseError', error)
//   }
// })
const { data } = await useLazyFetch<Idata>('/homeInfo', {
  method: 'GET',
  baseURL: BASE_URL,
  params: {
    name: 'liujun'
  }
})
watch(data, newData => {
  console.log('newData', newData)
})
console.log('code', data.value?.code)
console.log('data', data.value?.data)
// const { data } = useAsyncData<Idata>('banner', async () => {
//   return await $fetch(`${BASE_URL}/dj/banner`)
// })
</script>

<template>
  <div>
    Page: login
    <span>{{ useNuxtApp().$formatData('12321') }}</span>
  </div>
</template>

<style scoped></style>
