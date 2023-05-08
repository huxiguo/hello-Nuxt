<template>
  <div class="custom-layout">
    <NuxtLink to="/">
      <button>home</button>
    </NuxtLink>
    <NuxtLink to="/cart">
      <button>cart</button>
    </NuxtLink>
    <NuxtLink to="/mine">
      <button>mine</button>
    </NuxtLink>
    <!-- 导航 detail -->
    <NuxtLink to="/detail">
      <button>detail</button>
    </NuxtLink>
    <NuxtLink to="/login">
      <button>login</button>
    </NuxtLink>
    <slot></slot>
  </div>
</template>

<script setup></script>
<style scoped lang="scss"></style>
