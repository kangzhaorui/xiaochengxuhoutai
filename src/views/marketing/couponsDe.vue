<template>
  <page-view>
    <a-card :bordered="false" title="优惠券活动详情">
      <descri-list :col="3">
        <descri-item term="优惠券领取数量">50</descri-item>
        <descri-item term="活动参与人数">50</descri-item>
        <descri-item term="面值总额">250</descri-item>
        <descri-item term="已使用数量">40</descri-item>
        <descri-item term="已使用面值">200</descri-item>
        <descri-item term="失效数量">10</descri-item>
      </descri-list>
      <a-form layout="inline" :form="form" @submit="handleSubmit">
        <a-form-item label="订单编号">
          <a-input style="width: 140px" v-decorator="['name']" placeholder="订单编号" allowClear />
        </a-form-item>
        <a-form-item>
          <a-select style="width: 160px" allowClear placeholder="使用状态">
            <a-select-option value="1">已使用</a-select-option>
            <a-select-option value="2">未使用</a-select-option>
            <a-select-option value="3">已失效</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" icon="search" html-type="submit" :loading="loading">搜索</a-button>
        </a-form-item>
      </a-form>
      <a-table :columns="columns" :dataSource="data" :rowKey="(v,k) => k" size="middle">
        <span class="info" slot="info" slot-scope="text, record">
          <img class="image" :src="record.url" />
          <div class="con">
            <p class="name">{{record.name}}</p>
            <p class="unitprice">商品编码：{{record.unitprice}}</p>
          </div>
        </span>
      </a-table>
    </a-card>
  </page-view>
</template>

<script>
import PageView from '@/layouts/PageView';
import descriptionList from '@/components/descriptionList';
import { couponsDeColumns, couponsDeData } from './config';
export default {
  name: 'marketingCouponsDe',
  components: { PageView, descriList: descriptionList, descriItem: descriptionList.Item },
  data() {
    return {
      columns: couponsDeColumns,
      data: couponsDeData(),
      loading: false,
      form: this.$form.createForm(this, { name: 'marketingCouponsDe' })
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
    }
  }
};
</script>