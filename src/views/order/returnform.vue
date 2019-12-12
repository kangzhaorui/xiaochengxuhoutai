<template>
  <page-view>
    <template v-slot:header>
      <a-tabs class="head-tabs" :tabBarStyle="{margin: 0,borderColor:'#fff'}" defaultActiveKey="1">
        <a-tab-pane key="1">
          <span slot="tab">
            <a-icon type="sliders" />全部退货申请单
          </span>
        </a-tab-pane>
        <a-tab-pane key="2">
          <span slot="tab">
            <a-icon type="form" />待处理
          </span>
        </a-tab-pane>
        <a-tab-pane key="3">
          <span slot="tab">
            <a-icon type="clock-circle" />处理中
          </span>
        </a-tab-pane>
        <a-tab-pane key="4">
          <span slot="tab">
            <a-icon type="check-circle" />已处理
          </span>
        </a-tab-pane>
        <a-tab-pane key="5">
          <span slot="tab">
            <a-icon type="stop" />已拒绝
          </span>
        </a-tab-pane>
      </a-tabs>
    </template>
    <a-card :bordered="false">
      <a-row type="flex" justify="space-between" class="op-sea">
        <a-col>
          <span>已选 {{selectedRowKeys.length}}</span>
          <a-dropdown class="ops">
            <a-menu slot="overlay">
              <a-menu-item key="1">删除</a-menu-item>
              <a-menu-item key="2">导出</a-menu-item>
            </a-menu>
            <a-button>
              批量操作
              <a-icon type="down" />
            </a-button>
          </a-dropdown>
        </a-col>
        <a-col>
          <a-form layout="inline" :form="form" @submit="handleSubmit">
            <a-form-item label="退货单号">
              <a-input style="width: 140px" v-decorator="['name']" placeholder="退货单号" allowClear />
            </a-form-item>
            <a-form-item label="订单状态">
              <a-select style="width: 160px" allowClear placeholder="请选择订单状态" v-decorator="['classification']" showSearch :filterOption="$filterOption">
                <a-select-option value="1">待付款</a-select-option>
                <a-select-option value="2">待发货</a-select-option>
                <a-select-option value="3">待收货</a-select-option>
                <a-select-option value="4">已完成</a-select-option>
                <a-select-option value="5">已关闭</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item label="会员名">
              <a-select style="width: 160px" allowClear placeholder="会员名" v-decorator="['username']" showSearch :filterOption="$filterOption">
                <a-select-option value="1">会员名1</a-select-option>
                <a-select-option value="2">会员名2</a-select-option>
                <a-select-option value="3">会员名3</a-select-option>
              </a-select>
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
          <router-link :to="'/order/returndetail?id='+record.number">详情</router-link>
          <a-divider type="vertical" />
          <a-popconfirm title="确定 删除 ?">
            <a href="javascript:;">删除</a>
          </a-popconfirm>
        </span>
      </a-table>
    </a-card>
  </page-view>
</template>

<script>
import PageView from '@/layouts/PageView';
import { returnformColumns, returnformData } from './config';
export default {
  name: 'orderReturnform',
  components: { PageView },
  data() {
    return {
      columns: returnformColumns,
      data: returnformData(),
      loading: false,
      selectedRowKeys: [],
      pagination: {
        current: 0,
        total: 0,
        showSizeChanger: true
      },
      form: this.$form.createForm(this, { name: 'orderList' })
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
    }
  }
};
</script>
<style lang="less" scoped>
.head-tabs {
  margin-top: 14px;
}
.op-sea {
  align-items: center;
  padding-bottom: 16px;
  .ops {
    margin-left: 16px;
  }
}
</style>