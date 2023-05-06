export default defineNuxtPlugin(() => {
  return {
    provide: {
      myServer: () => 'demo-server'
    }
  }
})
