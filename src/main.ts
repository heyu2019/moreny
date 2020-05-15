import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icons from '@/components/Icons.vue';

Vue.config.productionTip = false;

Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icons);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

window.onload = function () {
  setTimeout(function () {
    window.scrollTo(0, 10000);
  },0);//解决手机上显示会出现下巴的问题
};

if (document.documentElement.clientHeight>500){
  window.alert('请使用手机打开本页面，以此保证浏览效果');
  const img = document.createElement('img')
  img.src='./scanCode.png';
  img.style.position = 'fixed';
  img.style.left='50%';
  img.style.top='50%';
  img.style.boxShadow='0 0 10px rgba(0,0,0.25)';
  img.style.transform='translate(-50%,-50%)';
  document.body.appendChild(img)
}
