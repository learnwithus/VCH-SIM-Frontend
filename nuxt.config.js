module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Simulation',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt frontend for VCH&apos;s SIM Site' },
      // { name: 'msapplication-TileColor', content='#ffffff'},
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400' },
      {
        rel: "stylesheet", href: "https://use.fontawesome.com/releases/v5.2.0/css/all.css", integrity: "sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ",
        crossorigin: "anonymous"
      },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5FE3C4" }

    ]
  },
  router: {
    base: '/',
    // scrollBehavior: async (to, from, savedPosition) => {
    //   if (savedPosition) {
    //     return savedPosition
    //   }

    //   const findEl = async (hash, x) => {
    //     return document.querySelector(hash) ||
    //       new Promise((resolve, reject) => {
    //         if (x > 50) {
    //           return resolve()
    //         }
    //         setTimeout(() => { resolve(findEl(hash, ++x || 1)) }, 100)
    //       })
    //   }

    //   if (to.hash) {
    //     let el = await findEl(to.hash)
    //     if ('scrollBehavior' in document.documentElement.style) {
    //       return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
    //     } else {
    //       return window.scrollTo(0, el.offsetTop)
    //     }
    //   }

    //   return { x: 0, y: 0 }
    // }
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#5FE3C4' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['SmoothScroll'],
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },

    // styleResources: {
    //   scss: './assets/scss/base.scss',
    //   // sass: ...,
    //   // scss: ...
    //   options: {
    //     // See https://github.com/yenshih/style-resources-loader#options
    //     // Except `patterns` property
    //   }
    // }
  },
  // module: { Doesn't do anything
  //   rules: [
  //     {
  //       test: /\.(png|jpe?g|gif|svg|webp)$/,
  //       loader: 'url-loader',
  //       query: {
  //         limit: 8000, // 1kB
  //         name: 'img/[name].[hash:7].[ext]'
  //       }
  //     },
  //   ]
  // },
  env: {
    cockpit: {
      apiUrl: 'https://admin.simulation.vchlearn.ca/api',
      apiToken: 'ab9d712bf8f8be698edcdfc206c628',
      baseURL: 'https://admin.simulation.vchlearn.ca'
    }
  },
  // css: [
  //   // '@/assets/scss/base.scss'
  // ],
  modules: [
    ['nuxt-sass-resources-loader', '@/assets/scss/base.scss'],
    // ["nuxt-imagemin", {
    //   jpegtran: true,

    // }]
  ],
  plugins: [
    '~plugins/filters.js',
    { src: '~/plugins/smooth-scroll.js', ssr: false },
    '~plugins/lazyloadbackground'
  ],
  // sassResources: [
  //   resolve(__dirname, "./assets/scss/base.scss")
  //   // '@/assets/scss/variables.scss'
  // ]
}

