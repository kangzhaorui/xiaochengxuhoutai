<template>
  <a-locale-provider :locale="locale">
    <div id="app">
      <router-view />
    </div>
  </a-locale-provider>
</template>
<script>
import 'moment/locale/zh-cn';
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
import moment from 'moment';
moment.locale('zh-cn');
export default {
  data() {
    return {
      locale: zhCN
    };
  }
};
</script>
<style lang="less">
#app {
  height: 100%;
}
</style>
