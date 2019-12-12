<template>
  <a-layout class="basic" :class="{'collapsed':!collapsed}">
    <a-layout-sider class="sider" width="256px" collapsible v-model="collapsed">
      <div class="logo">
        <img :src="logo" alt="logo" />
        <h1 v-if="!collapsed">ANNLE 商城</h1>
      </div>
      <div class="tabs-con">
        <s-menu class="menu" :menu="menus" :collapsed="collapsed"></s-menu>
      </div>
    </a-layout-sider>
    <a-layout class="layout">
      <a-layout-header class="header">
        <a-row type="flex" justify="end">
          <a-col>
            <a-dropdown>
              <span class="user-tp">
                <a-avatar class="avatar" size="small" src="http://m.aspku.com/uploads/allimg/190819/2156252C7-0.jpg" />
                <span>小兔兔</span>
              </span>
              <a-menu slot="overlay" style="min-width:150px">
                <a-menu-item key="0">
                  <a-icon type="user" />
                  <span>个人中心</span>
                </a-menu-item>
                <a-menu-item key="1">
                  <a-icon type="setting" />
                  <span>账户设置</span>
                </a-menu-item>
                <a-menu-divider />
                <a-menu-item key="3" @click="handleLogout">
                  <a-icon type="logout" />
                  <span>退出登录</span>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </a-col>
        </a-row>
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">2019 北京小兔兔科技有限公司出品</a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import routes from '@/router/routes';
import { userLogout } from '@/api/user';
import { notification } from 'ant-design-vue'
import SMenu from '@/components/menu';
export default {
  name: 'basicLayout',
  components: { SMenu },
  data() {
    return {
      menus: [],
      collapsed: false,
      logo: '/logo.png'
    };
  },
  methods: {
    handleLogout(){
      const accessToken = localStorage.getItem('token');
      userLogout({ accessToken }).then(res => {
        if(res.code === 1){
          notification.success({message: res.msg});
          debugger
          window.location.reload();
        }else{
          notification.error({message: '退出失败'});
        }
      })
    }
  },
  created() {
    this.menus = routes.find(item => item.path === '/').children;
  }
};
</script>
<style lang="less" scoped>
.basic {
  width: 100%;
  height: auto;
  background-color: #f0f2f5;
  .sider {
    position: fixed;
    left: 0;
    height: 100vh;
    z-index: 100;
    user-select: none;
    background-color: #fff;
    .tabs-con {
      height: calc(100vh - 112px);
      overflow: auto;
      &::-webkit-scrollbar {
        display: none;
      }
      .menu {
        padding: 16px 0;
      }
    }
    .logo {
      position: relative;
      height: 64px;
      padding-left: 24px;
      overflow: hidden;
      line-height: 64px;
      transition: all 0.3s;
      box-shadow: 1px 1px 0 0 #e8e8e8;
      display: flex;
      align-items: center;
      img {
        width: 30px;
      }
      h1 {
        color: #1890ff;
        font-size: 20px;
        margin: 0 0 0 12px;
        font-weight: 600;
        vertical-align: middle;
      }
    }
    /deep/ .ant-layout-sider-trigger {
      color: #1890ff;
      background-color: #e6f7ff;
    }
  }
  .layout {
    padding-left: 80px;
    transition: all 0.2s;
    min-height: 100vh;
    .header {
      position: fixed;
      top: 0;
      right: 0;
      left: 80px;
      z-index: 110;
      padding: 0 24px;
      background-color: #fff;
      transition: all 0.2s;
      box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
      .user-tp {
        cursor: pointer;
        color: #333;
        display: flex;
        align-items: center;
        .avatar {
          margin-right: 8px;
        }
      }
    }
    .content {
      padding-top: 64px;
    }
    .footer {
      text-align: center;
    }
  }
}
.collapsed {
  .layout {
    padding-left: 256px;
    .header {
      left: 256px;
    }
  }
}
</style>