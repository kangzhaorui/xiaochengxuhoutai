<template>
  <div class="page">
    <div class="bread">
      <a-breadcrumb>
        <a-breadcrumb-item v-for="v in breadList" :key="v">
          <span>{{v}}</span>
        </a-breadcrumb-item>
      </a-breadcrumb>
      <slot name="header">
        <div class="op-ms">
          <a-button v-if="routeGo" class="route-go" type="link" icon="left" @click="onRouteGo">返回</a-button>
          <h1 v-else class="title">{{title}}</h1>
        </div>
      </slot>
      <slot name="headerBox" />
    </div>
    <div class="content">
      <slot>
        <keep-alive>
          <router-view v-if="keepAlive" />
        </keep-alive>
        <router-view v-if="!keepAlive" />
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageView',
  data() {
    return {
      route: {
        matched: [],
        meta: {}
      }
    };
  },
  computed: {
    name() {
      return this.route.name;
    },
    title() {
      return this.route.meta.title;
    },
    routeGo() {
      return this.route.meta.routeGo;
    },
    breadList() {
      return this.route.matched.map(v => (v.meta && v.meta.title ? v.meta.title : ''));
    },
    keepAlive() {
      return this.route.meta.keepAlive;
    }
  },
  created() {
    this.route = this.$route;
  },
  methods: {
    onRouteGo() {
      this.$router.go(-1);
    }
  },
  watch: {
    $route(to) {
      this.route = to;
    }
  }
};
</script>
<style lang="less" scoped>
.page {
  .bread {
    padding: 16px 32px 0;
    background-color: #fff;
    line-height: 2;
    font-size: 14px;
    .op-ms {
      height: 52px;
      line-height: 52px;
    }
    .route-go {
      padding: 0;
      font-size: 16px;
    }
    .title {
      margin: 0;
      font-size: 20px;
      font-weight: 500;
      color: #333;
    }
  }
  .content {
    padding: 24px;
  }
}
</style>