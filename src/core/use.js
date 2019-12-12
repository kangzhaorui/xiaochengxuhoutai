import "./antd_use"
import Vue from 'vue'
import Viser from 'viser-vue'
Vue.use(Viser)


Vue.filter('NumberFormat', (value) => {
  if (!value) return '0'
  const intPartFormat = value.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') // 将整数部分逢三一断
  return intPartFormat
})

Vue.prototype.$filterOption = function (value, option) {
  return option.componentOptions.children[0].text
    .toLowerCase()
    .indexOf(value.toLowerCase()) >= 0
};