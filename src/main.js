// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css';    // 默认主题
import "babel-polyfill";

Vue.config.productionTip = false  //来关闭生产模式下给出的提示

/* eslint-disable no-new */
Vue.use(ElementUI); 
Vue.prototype.$axios = axios;
new Vue({
  // el: '#app',
  router,
  // components: { App },
  // template: '<App/>'
  render: h => h(App)
}).$mount('#app');
