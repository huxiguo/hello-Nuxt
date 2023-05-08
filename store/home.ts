import { defineStore } from 'pinia'
interface IHello {
  code: number
  data: any
}
export const useHomeStore = defineStore('home', () => {
  const count = ref(99)
  const helloData = ref<IHello | null>()
  function increment() {
    count.value++
  }
  async function fetchHelloData() {
    const { data } = await useLazyFetch('/api/hello', {
      method: 'POST',
      query: {
        id: 12
      },
      body: {
        username: 'zs'
      }
    })
    helloData.value = data.value
  }
  return {
    count,
    helloData,
    increment,
    fetchHelloData
  }
})
