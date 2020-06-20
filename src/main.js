import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//清楚默认样式
import './assets/css/reset.css'
import './assets/font/iconfont.css'
import '@/utils/flexable'
//Element-ui
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

//Vant
// import Vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(Vant);

/*第一层if判断生产环境和开发环境*/
// console.log(process.env.NODE_ENV)
// console.log(process.env.VUE_APP_FLAG )
if (process.env.NODE_ENV === 'production') {
    /*第二层if，根据.env文件中的VUE_APP_FLAG判断是生产环境还是测试环境*/
    if (process.env.VUE_APP_FLAG === 'pro') {
        //production 生产环境
      Vue.prototype.$BaseUrl = '';

    } else {
        //test 测试环境
      Vue.prototype.$BaseUrl = '';

    }
} else {
    //dev 开发环境
    Vue.prototype.$BaseUrl = '';
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
