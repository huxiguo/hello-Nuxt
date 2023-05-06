<script lang="ts" setup>
const route = useRoute()
const { id } = route.params
// 验证动态路由
definePageMeta({
  validate: route => {
    console.log(route.params.id)
    // return /^\d+$/.test(route.params.id as string)
    return {
      statusCode: 401
    }
  }
})
</script>

<template>
  <div>Page: detail id id={{ id }}</div>
</template>

<style scoped></style>
