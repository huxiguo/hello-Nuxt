<script lang="ts" setup>
const { data } = await useLazyFetch('/api/homeInfo')
const { data: data2 } = await useLazyFetch('/api/hello', {
  method: 'POST',
  body: {
    username: 'sss',
    password: '123'
  },
  params: {
    id: 123
  }
})
console.log('123132', data2)
</script>

<template>
  <div>
    Page: mine
    <span>{{ data?.code }}</span>
    <span>{{ data?.data.name }}</span>
    <span>{{ data?.data.age }}</span>
  </div>
</template>

<style scoped></style>
