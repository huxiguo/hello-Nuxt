<script setup lang="ts">
const loginInfo = useLoginInfo()
</script>

<template>
  <div>
    login
    <div>{{ loginInfo.username }}</div>
    <div>{{ loginInfo.email }}</div>
    <div>{{ loginInfo.isAdmin }}</div>
    <div>{{ loginInfo.isLoggedIn }}</div>
    <div>{{ loginInfo.password }}</div>
    <div>{{ loginInfo.token }}</div>
  </div>
</template>
