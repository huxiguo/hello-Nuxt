export default defineNuxtPlugin(() => {
  return {
    provide: {
      myClient: () => 'test-client'
    }
  }
})
