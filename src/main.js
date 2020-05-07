import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

import '@/components/index' // 注册全局组件

// sentry 异常监控
import * as Sentry from '@sentry/browser'
import { Vue as VueIntegration } from '@sentry/integrations'

Vue.prototype.$sentry = Sentry
process.env.VUE_APP_ENV === 'production' && Sentry.init({
  dsn: 'https://8eea1d356a2a41b4a5def89416d9eef2@o388994.ingest.sentry.io/5226602',
  integrations: [new VueIntegration({ Vue, attachProps: true })]
})

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
