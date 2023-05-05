<template>
  <div class="home global-style2">
    home page
    <div class="p1">111</div>
    <div class="p2">222</div>
    <div class="p3">333</div>
    <ClientOnly>
      我只会在客户端渲染
      <template #fallback>
        <div>loading....</div>
      </template>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
// 匿名路由中间件
definePageMeta({
  middleware: [
    function () {
      console.log('index page ')
    },
    function (to, from) {
      console.log('to', to)
      console.log('from', from)
    }
  ]
})
</script>

<style scoped lang="scss">
.p1 {
  color: $huColor;
}
.p2 {
  @include border();
}
.p3 {
  font-size: $hu20;
}
</style>
