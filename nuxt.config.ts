// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app:{
    head: {
      link: [
        { 
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
          rel: 'stylesheet'
        }
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js',
          type: 'text/javascript'
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js',
          type: 'text/javascript'
        },
        {
          type: 'module',
          src: 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js'
        },
        {
          nomodule: '',
          src: 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js'
        }
      ]
    }
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith('ion-'),
    },
  },

  modules: ['@nuxtjs/apollo'],

  apollo: {
    clients: {
      default: {
        httpEndpoint: 'http://localhost:5230/graphql/'
      },
    },
  },
})
