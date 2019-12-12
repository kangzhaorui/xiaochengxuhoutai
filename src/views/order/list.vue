<template>
  <page-view>
    <template v-slot:header>
      <a-tabs class="head-tabs" :tabBarStyle="{margin: 0,borderColor:'#fff'}" defaultActiveKey="1">
        <a-tab-pane key="1">
          <span slot="tab">
            <a-icon type="sliders" />所有订单
          </span>
        </a-tab-pane>
        <a-tab-pane key="2">
          <span slot="tab">
            <a-icon type="clock-circle" />待付款
          </span>
        </a-tab-pane>
        <a-tab-pane key="3">
          <span slot="tab">
            <a-icon type="car" />待发货
          </span>
        </a-tab-pane>
        <a-tab-pane key="4">
          <span slot="tab">
            <a-icon type="sync" />待收货
          </span>
        </a-tab-pane>
        <a-tab-pane key="5">
          <span slot="tab">
            <a-icon type="check-circle" />已完成
          </span>
        </a-tab-pane>
        <a-tab-pane key="6">
          <span slot="tab">
            <a-icon type="stop" />已关闭
          </span>
        </a-tab-pane>
      </a-tabs>
    </template>
    <a-card :bordered="false">
      <a-row type="flex" justify="space-between" class="op-sea">
        <a-col>
          <span>已选 {{selectedRowKeys.length}}</span>
          <a-dropdown class="ops">
            <a-menu slot="overlay" @click="menuClick">
              <a-menu-item key="1">批量发货</a-menu-item>
              <a-menu-item key="2">删除</a-menu-item>
            </a-menu>
            <a-button>
              批量操作
              <a-icon type="down" />
            </a-button>
          </a-dropdown>
        </a-col>
        <a-col>
          <a-form layout="inline" :form="form" @submit="handleSubmit">
            <a-form-item label="订单编号">
              <a-input style="width: 140px" v-decorator="['name']" placeholder="订单编号" allowClear />
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
        <span slot="info" slot-scope="text, record">
          <p class="info-name" v-for="v in record.info.slice(0,2)">{{v.name}}</p>
          <p class="info-name" v-if="record.info.length > 2">. . . .</p>
        </span>
        <span slot="action" slot-scope="text, record">
          <router-link :to="'/order/ship?id='+record.number">发货</router-link>
          <a-divider type="vertical" />
          <a href="javascript:;" @click="onUpAddress(record)">修改地址</a>
          <a-divider type="vertical" />
          <router-link :to="'/order/detail?id='+record.number">详情</router-link>
        </span>
      </a-table>
    </a-card>
    <a-modal width="700px" title="修改收货地址" v-model="visible" @ok="uphandleOk">
      <a-form @submit="upHandleSubmit" :form="formAdd" class="form">
        <a-form-item :label-col="{span: 5}" :wrapper-col="{span: 16}" label="收货人姓名">
          <a-input v-decorator="['name', { rules: [{ required: true, message: 'Please input your note!' }] }]" />
        </a-form-item>
        <a-form-item :label-col="{span: 5}" :wrapper-col="{span: 16}" label="收货人地址">
          <a-cascader :options="options" placeholder="请选择地址" />
        </a-form-item>
        <a-form-item :label-col="{span: 5}" :wrapper-col="{span: 16}" label="详细地址">
          <a-textarea :rows="4" />
        </a-form-item>
        <a-form-item :label-col="{span: 5}" :wrapper-col="{span: 16}" label="手机号码">
          <a-input placeholder="11位手机号" v-decorator="['tab']" />
        </a-form-item>
      </a-form>
    </a-modal>
  </page-view>
</template>

<script>
import PageView from '@/layouts/PageView';
import { listColumns, listData } from './config';
export default {
  name: 'orderList',
  components: { PageView },
  data() {
    return {
      columns: listColumns,
      data: listData(),
      loading: false,
      visible: false,
      selectedRowKeys: [],
      pagination: {
        current: 0,
        total: 0,
        showSizeChanger: true
      },
      form: this.$form.createForm(this, { name: 'orderList' }),
      formAdd: this.$form.createForm(this, { name: 'orderformAdd' }),
      options: [
        {
          value: '北京',
          label: '北京',
          children: [
            {
              value: '北京市',
              label: '北京市',
              children: [
                {
                  value: '通州区',
                  label: '通州区'
                }
              ]
            }
          ]
        },
        {
          value: '贵阳',
          label: '贵阳',
          children: [
            {
              value: '遵义',
              label: '遵义',
              children: [
                {
                  value: '亳州区',
                  label: '亳州区'
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    onUpAddress() {
      this.visible = !this.visible;
    },
    uphandleOk() {
      console.log('修改地址');
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    upHandleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    menuClick() {},
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
    margin-left: 8px;
  }
}
.info-name {
  margin: 0;
  font-size: 14px;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
</style>