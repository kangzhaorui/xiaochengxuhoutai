<template>
  <page-view>
    <a-card :bordered="false" title="订单（已完成）">
      <descri-list :col="3">
        <descri-item term="订单编号">201705162115157</descri-item>
        <descri-item term="下单时间">2017/5/11 16:03:32</descri-item>
        <descri-item term="订单金额">200.00</descri-item>
        <descri-item term="支付时间">2017/5/11 16:03:32</descri-item>
        <descri-item term="支付流水">293939494949499494949</descri-item>
        <descri-item term="优惠金额">20.00</descri-item>
        <descri-item term="优惠券编号">123457</descri-item>
        <descri-item term="运费">20.00</descri-item>
        <descri-item term="支付金额">150.00</descri-item>
      </descri-list>
      <a-table :columns="columns" :dataSource="data" :rowKey="(v,k) => k" :pagination="false" size="middle">
        <span class="info" slot="info" slot-scope="text, record">
          <img class="image" :src="record.url" />
          <div class="con">
            <p class="name">{{record.name}}</p>
            <p class="unitprice">商品编码：{{record.unitprice}}</p>
          </div>
        </span>
      </a-table>
    </a-card>
    <a-card :bordered="false" title="收货信息" class="top">
      <descri-list :col="2">
        <descri-item term="收货人">张三丰</descri-item>
        <descri-item term="手机">1380000000</descri-item>
        <descri-item term="收货地址">云南省,曲靖市,会泽县会泽县通宝路温馨家园附近(泰和盛世酒店西北)，123456</descri-item>
      </descri-list>
    </a-card>
    <a-card :bordered="false" title="物流信息" class="top">
      <descri-list :col="2">
        <descri-item term="物流公司">韵达</descri-item>
        <descri-item term="物流单号">1380000000</descri-item>
        <descri-item term="物流状态">参考物流100</descri-item>
      </descri-list>
    </a-card>
  </page-view>
</template>

<script>
import PageView from '@/layouts/PageView';
import descriptionList from '@/components/descriptionList';
import { shipColumns, shipData } from './config';
export default {
  name: 'orderDetails',
  components: { PageView, descriList: descriptionList, descriItem: descriptionList.Item },
  data() {
    return {
      columns: shipColumns,
      data: shipData()
    };
  }
};
</script>
<style lang="less" scoped>
.top {
  margin-top: 24px;
}
.info {
  display: flex;
  .image {
    flex-shrink: 0;
    height: 48px;
  }
  .con {
    padding-left: 16px;
    .name,
    .unitprice {
      margin: 0;
    }
  }
}
</style>