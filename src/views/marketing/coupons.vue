<template>
  <page-view>
    <a-card :bordered="false">
      <a-button class="add" icon="plus" @click="addup()">添加</a-button>
      <a-row type="flex" justify="space-between" class="op-sea">
        <a-col>
          <span>已选 {{selectedRowKeys.length}}</span>
          <a-dropdown class="ops">
            <a-menu slot="overlay">
              <a-menu-item key="1">删除</a-menu-item>
              <a-menu-item key="2">导出</a-menu-item>
              <a-menu-item key="3">批量失效</a-menu-item>
            </a-menu>
            <a-button>
              批量操作
              <a-icon type="down" />
            </a-button>
          </a-dropdown>
        </a-col>
        <a-col>
          <a-form layout="inline" :form="form" @submit="handleSubmit">
            <a-form-item label="优惠券名称">
              <a-input style="width: 140px" v-decorator="['name']" placeholder="优惠券名称" allowClear />
            </a-form-item>
            <a-form-item>
              <a-range-picker :showTime="{ hideDisabledOptions: true}" format="YYYY-MM-DD HH:mm:ss" allowClear />
            </a-form-item>
            <a-form-item>
              <a-button type="primary" icon="search" html-type="submit" :loading="loading">搜索</a-button>
            </a-form-item>
          </a-form>
        </a-col>
      </a-row>
      <a-table :columns="columns" :dataSource="data" :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}" :rowKey="(v,k) => k" :pagination="pagination" @change="tableChange">
        <span slot="action" slot-scope="text, record">
          <router-link :to="'/marketing/couponsDe?id='+record.number">详情</router-link>
          <a-divider type="vertical" />
          <a href="javascript:;" @click="addup(record)">编辑</a>
          <a-divider type="vertical" />
          <a-popconfirm title="确定 使失效 ?">
            <a href="javascript:;">使失效</a>
          </a-popconfirm>
        </span>
      </a-table>
    </a-card>
    <a-modal width="700px" title="新建优惠券" v-model="visible" @ok="uphandleOk">
      <a-form :form="formAdd">
        <a-form-item :label-col="{span: 5}" :wrapper-col="{span: 16}" label="优惠券名称">
          <a-input v-decorator="['name', { rules: [{ required: true}] }]" />
        </a-form-item>
        <a-form-item :label-col="{span: 5}" :wrapper-col="{span: 16}" label="面值">
          <a-input addonBefore="￥" v-decorator="['mval', { rules: [{ required: true}] }]" />
        </a-form-item>
        <a-form-item :label-col="{span: 5}" :wrapper-col="{span: 16}" label="订单金额">
          <a-input addonBefore="满" addonAfter="元" v-decorator="['orderAmount', { rules: [{ required: true}] }]" />
        </a-form-item>
        <a-form-item :label-col="{span: 5}" :wrapper-col="{span: 16}" label="有效期">
          <a-range-picker style="width: 100%" :showTime="{ hideDisabledOptions: true}" format="YYYY-MM-DD HH:mm:ss" allowClear v-decorator="['time', { rules: [{ required: true}] }]" />
        </a-form-item>
        <a-form-item :label-col="{span: 5}" :wrapper-col="{span: 16}" label="发放量">
          <a-input v-decorator="['so', { rules: [{ required: true}] }]" />
        </a-form-item>
        <a-form-item :label-col="{span: 5}" :wrapper-col="{span: 16}" label="每人限领">
          <a-radio-group :defaultValue="1">
            <a-radio :value="1">不限</a-radio>
            <a-radio :value="2">自定义</a-radio>
          </a-radio-group>
          <a-input addonAfter="张" v-decorator="['osmy', { rules: [{ required: true}] }]" />
        </a-form-item>
        <a-form-item :label-col="{span: 5}" :wrapper-col="{span: 16}" label="优惠券说明">
          <a-input v-decorator="['mm']" />
        </a-form-item>
      </a-form>
    </a-modal>
  </page-view>
</template>

<script>
import PageView from '@/layouts/PageView';
import { couponsColumns, couponsData } from './config';
export default {
  name: 'marketingCoupons',
  components: { PageView },
  data() {
    return {
      columns: couponsColumns,
      data: couponsData(),
      loading: false,
      visible: false,
      selectedRowKeys: [],
      pagination: {
        current: 0,
        total: 0,
        showSizeChanger: true
      },
      form: this.$form.createForm(this, { name: 'marketingCoupons' }),
      formAdd: this.$form.createForm(this, { name: 'marketingUp' })
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
    onSelectChange(ls) {
      this.selectedRowKeys = ls;
    },
    tableChange(s) {
      this.pagination = s;
    },
    uphandleOk() {
      console.log('okUp');
    },
    addup() {
      this.visible = !this.visible;
    }
  }
};
</script>
<style lang="less" scoped>
.add {
  margin-bottom: 16px;
}
.op-sea {
  align-items: center;
  padding-bottom: 16px;
  .ops {
    margin-left: 16px;
  }
}
</style>