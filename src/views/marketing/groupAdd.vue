<template>
  <page-view>
    <a-card :bordered="false" title="新建拼团">
      <a-form @submit="handleSubmit" :form="form" class="form">
        <a-form-item :label-col="{span: 2}" :wrapper-col="{span: 8}" label="所属分类">
          <a-input v-decorator="['nameds', { rules: [{ required: true}] }]" />
        </a-form-item>
        <a-form-item :label-col="{span: 2}" :wrapper-col="{span: 8}" label="有效期">
          <a-range-picker style="width: 100%" :showTime="{ hideDisabledOptions: true}" format="YYYY-MM-DD HH:mm:ss" allowClear v-decorator="['time', { rules: [{ required: true}] }]" />
        </a-form-item>
        <a-table :columns="columns" :dataSource="data" :rowKey="(v,k) => k" :pagination="false">
          <span slot="action" slot-scope="text, record">
            <a-popconfirm title="确定 移除 ?">
              <a href="javascript:;">移除</a>
            </a-popconfirm>
          </span>
        </a-table>
        <a-button style="width: 100%; margin-top: 16px; margin-bottom: 8px" type="dashed" icon="plus" @click="addCommodity">新增选择商品</a-button>
        <a-form-item :wrapper-col="{ span: 2, offset: 1 }">
          <a-button type="primary" html-type="submit">保存</a-button>
        </a-form-item>
      </a-form>
    </a-card>
    <a-modal width="1000px" title="选择商品" v-model="visible" @ok="uphandleOk">
      <div class="sele">
        <div class="left">
          <div class="search">
            <a-input addonBefore="所有商品" addonAfter="搜索商品" />
          </div>
          <a-spin :spinning="loading">
            <div class="demo-infinite-container">
              <div class="item" :value="v" v-for="v in value">
                <img class="image" src="https://gd1.alicdn.com/imgextra/i1/1988964657/TB2GEFwd7.HL1JjSZFuXXX8dXXa_!!1988964657.jpg_400x400.jpg" />
                <div class="context">
                  <div class="name">YOHO有货潮牌Into The Rainbow 水洗牛仔卡通印花连衣裙</div>
                  <div class="flex">
                    <span>当前价格：6.00</span>
                    <span>库存：200</span>
                  </div>
                </div>
                <a-icon type="check" class="icon" />
              </div>
            </div>
          </a-spin>
        </div>
        <div class="right">
          <div class="item">
            <img class="image" src="https://gd1.alicdn.com/imgextra/i1/1988964657/TB2GEFwd7.HL1JjSZFuXXX8dXXa_!!1988964657.jpg_400x400.jpg" />
            <div class="context">
              <div class="name">YOHO有货潮牌Into The Rainbow 水洗牛仔卡通印花连衣裙</div>
              <div class="flex">
                <span>当前价格：6.00</span>
                <span>库存：200</span>
              </div>
            </div>
            <a-icon type="check" class="icon" />
          </div>
        </div>
      </div>
    </a-modal>
  </page-view>
</template>

<script>
import PageView from '@/layouts/PageView';
import { GroupAddColumns } from './config';
export default {
  name: 'marketingGroupAdd',
  components: { PageView },
  data() {
    return {
      columns: GroupAddColumns,
      data: [],
      value: 10,
      busy: false,
      visible: false,
      loading: false,
      form: this.$form.createForm(this, { name: 'GroupAdd' })
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    addCommodity() {
      this.visible = !this.visible;
    },
    uphandleOk() {},
    loadMore() {
      console.log('pl');
      this.loading = true;
      setTimeout(() => {
        this.value = this.value + 5;
        this.loading = false;
      }, 1000);
    }
  }
};
</script>
<style lang="less" scoped>
.sele {
  display: flex;
  .left,
  .right {
    flex: 1;
  }
  .right {
    padding-left: 30px;
  }
  .search {
    margin-bottom: 16px;
  }
  .demo-infinite-container {
    overflow: auto;
    height: 400px;
  }
  .item {
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    .image {
      width: 58px;
      height: 48px;
      object-fit: cover;
    }

    .context {
      padding-left: 16px;
      .name {
        font-size: 14px;
        line-height: 24px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
      }
      .flex {
        display: flex;
        justify-content: space-between;
      }
    }
    .icon {
      margin-left: 16px;
      margin-right: 24px;
      color: #1890ff;
    }
  }
}
</style>