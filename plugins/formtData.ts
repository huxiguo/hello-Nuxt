export default defineNuxtPlugin(() => {
  return {
    provide: {
      formatData: (data: string) => `formatData: ${data}`
    }
  }
})
