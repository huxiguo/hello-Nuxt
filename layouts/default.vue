<script lang="ts" setup></script>

<template>
  <div class="layout">
    <div class="header">
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
    </div>
    <slot />
    <div class="footer">footer</div>
  </div>
</template>

<style scoped lang="scss">
.layout {
  height: 100%;
  .header {
    height: 80px;
    line-height: 80px;
    text-align: center;
    background-color: #ccc;
  }
  .footer {
    height: 50px;
    background-color: #ccc;
  }
}
</style>
