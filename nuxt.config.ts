// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    appKey: 'aabbc', // server
    public: {
      baseURL: 'http://aaa.cc.d' // server and client
    }
  },
  appConfig: {},
  // app 配置
  app: {
    head: {
      title: 'seekhoo',
      charset: 'UTF-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          name: 'keywords',
          content: '啦啦啦啦'
        }
      ],
      link: [
        {
          rel: 'shortcut icon',
          href: 'favicon.ico',
          type: 'image/x-icon'
        }
      ]
    }
  },
  modules: ['@nuxt/devtools'],
  // css
  css: ['@/assets/style/main.css', '@/assets/style/global.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/style/variables.scss" as *;'
        }
      }
    }
  }
})
