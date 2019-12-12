<template>
  <page-view>
    <a-card :bordered="false" title="流程进度">
      <a-steps direction="horizontal" :current="1" progressDot>
        <a-step title="买家发起退货申请"></a-step>
        <a-step title="卖家退货处理中"></a-step>
        <a-step title="买家退货"></a-step>
        <a-step title="退货完毕"></a-step>
      </a-steps>
    </a-card>
    <a-card :bordered="false" title="退货信息" class="top">
      <descri-list :col="3">
        <descri-item term="退货单号">201705162115157</descri-item>
        <descri-item term="订单金额">12.00</descri-item>
        <descri-item term="支付金额">6.0</descri-item>
        <descri-item term="优惠金额">2.0</descri-item>
        <descri-item term="退货金额">2.6</descri-item>
        <descri-item term="退货原因">拍错/多拍/不想要</descri-item>
      </descri-list>
      <div class="list">
        <img class="image" src="https://gd1.alicdn.com/imgextra/i1/1988964657/TB2GEFwd7.HL1JjSZFuXXX8dXXa_!!1988964657.jpg_400x400.jpg" v-for="v in 3" />
      </div>
      <a-table :columns="columns" :dataSource="data" :rowKey="(v,k) => k" :pagination="false" size="middle">
        <span class="info" slot="info" slot-scope="text, record">
          <img class="image" :src="record.url" />
          <div class="con">
            <p class="name">{{record.name}}</p>
            <p class="unitprice">商品编码：{{record.unitprice}}</p>
          </div>
        </span>
      </a-table>
      <div class="buttons">
        <a-button class="item-button">同意退货</a-button>
        <a-button type="danger">拒绝退货</a-button>
      </div>
    </a-card>
    <a-card :bordered="false" title="订单信息" class="top">
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
      <a-table :columns="shipColumns" :dataSource="shipData" :rowKey="(v,k) => k" :pagination="false" size="middle">
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
  </page-view>
</template>

<script>
import PageView from '@/layouts/PageView';
import descriptionList from '@/components/descriptionList';
import { returnDeColumns, returnDeData, shipColumns, shipData } from './config';
export default {
  name: 'orderReturnDetail',
  components: { PageView, descriList: descriptionList, descriItem: descriptionList.Item },
  data() {
    return {
      columns: returnDeColumns,
      data: returnDeData(),
      shipColumns,
      shipData: shipData()
    };
  }
};
</script>
<style lang="less" scoped>
.list {
  margin-bottom: 16px;
  .image {
    height: 58px;
    margin-right: 24px;
  }
}
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
.buttons {
  padding-top: 16px;
  display: flex;
  justify-content: flex-end;
  .item-button {
    margin-right: 24px;
  }
}
</style>