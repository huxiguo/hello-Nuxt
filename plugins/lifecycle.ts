export default defineNuxtPlugin(nuxtApp => {
  // 监听生命周期
  // server & client 在创建vueApp 实例时调用
  nuxtApp.hook('app:created', vueApp => {
    console.log('app:created')
  })
  // client 在挂载app之前调用
  nuxtApp.hook('app:beforeMount', nuxtApp => {
    console.log('app:beforeMount')
  })
  // server & client
  nuxtApp.hook('vue:setup', () => {
    console.log('vue:setup')
  })
  // server
  nuxtApp.hook('app:rendered', renderContext => {
    console.log('app:rendered')
  })
  // client
  nuxtApp.hook('app:mounted', vueApp => {
    console.log('app:mounted')
  })
})
