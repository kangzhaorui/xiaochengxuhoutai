<template>
  <page-view>
    <a-card :bordered="false">
      <descri-list :col="2">
        <descri-item term="收货人">张三丰</descri-item>
        <descri-item term="手机">1380000000</descri-item>
        <descri-item term="收货地址">云南省,曲靖市,会泽县会泽县通宝路温馨家园附近(泰和盛世酒店西北)，123456</descri-item>
        <descri-item term="发货时间">时间不限</descri-item>
        <descri-item term="买家留言">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus</descri-item>
      </descri-list>
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item label="物流公司" :label-col="{span: 2}" :wrapper-col="{span: 8}">
          <a-select allowClear placeholder="请选择物流公司" v-decorator="['classification', { rules: [{ required: true, message: 'Please input your note!' }] }]" showSearch :filterOption="$filterOption">
            <a-select-option value="1">物流1</a-select-option>
            <a-select-option value="2">物流3</a-select-option>
            <a-select-option value="3">物流4</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="快递单号" :label-col="{span: 2}" :wrapper-col="{span: 8}">
          <a-input v-decorator="['name', { rules: [{ required: true, message: 'Please input your note!' }] }]" placeholder="快递单号" allowClear />
        </a-form-item>
        <a-table :columns="columns" :dataSource="data" :rowKey="(v,k) => k" :pagination="false" size="middle">
          <span class="info" slot="info" slot-scope="text, record">
            <img class="image" :src="record.url" />
            <div class="con">
              <p class="name">{{record.name}}</p>
              <p class="unitprice">商品编码：{{record.unitprice}}</p>
            </div>
          </span>
        </a-table>
        <a-form-item :wrapper-col="{offset: 22}" class="submit">
          <a-button type="primary" icon="car" html-type="submit" :loading="loading">发货</a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </page-view>
</template>

<script>
import PageView from '@/layouts/PageView';
import descriptionList from '@/components/descriptionList';
import { shipColumns, shipData } from './config';
export default {
  name: 'orderShip',
  components: { PageView, descriList: descriptionList, descriItem: descriptionList.Item },
  data() {
    return {
      loading: false,
      columns: shipColumns,
      data: shipData(),
      form: this.$form.createForm(this, { name: 'orderShip' })
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
<style lang="less" scoped>
.info {
  display: flex;
  .image {
    flex-shrink: 0;
    height: 48px;
  }
  .con {
    padding-left: 16px;
    .name {
      margin: 0;
    }
  }
  .unitprice {
    margin: 0;
  }
}
.submit {
  padding-top: 10px;
}
</style>