<template>
  <div class="userLayout">
    <router-view />
    <div class="footer">后台管理 &copy; 2018 ~ 2019 北京小兔兔科技有限公司出品</div>
  </div>
</template>

<script>
export default {
  name: "UserLayout"
};
</script>
<style lang="less" scoped>
.footer {
  position: absolute;
  bottom: 14px;
  text-align: center;
  width: 100%;
  font-size: 14px;
  color: #666;
}
</style>