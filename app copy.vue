<template>
  <div>
    <div>
      <h2 class="global-style">Hello Nuxt3</h2>
      <div class="f1">111</div>
      <div class="f2">222</div>
      <div class="f3">333</div>
    </div>
    <div>
      <!-- 组件导航 -->
      <nuxt-link to="/">
        <button>home</button>
      </nuxt-link>
      <nuxt-link to="/mine?id=100">
        <button>mine</button>
      </nuxt-link>
      <nuxt-link to="/detail">
        <button>detail</button>
      </nuxt-link>
      <nuxt-link to="/detail/123">
        <button>detail id</button>
      </nuxt-link>
      <nuxt-link to="/error/eee">
        <button>error</button>
      </nuxt-link>
      <!-- 编程式导航 -->
      <NuxtLink @click="goToCategory">
        <button>category</button>
      </NuxtLink>
      <NuxtLink @click="goToCart">
        <button>cart</button>
      </NuxtLink>
    </div>
    <NuxtPage></NuxtPage>
  </div>
</template>
<script setup>
const goToCategory = () => {
  return navigateTo('/category')
}
const goToCart = () => {
  return navigateTo({
    path: '/cart',
    query: {
      id: 200
    }
  })
}
</script>
<style scoped lang="scss">
.f1 {
  color: $huColor;
}
.f2 {
  font-size: $hu20;
}
.f3 {
  @include border();
}
</style>
