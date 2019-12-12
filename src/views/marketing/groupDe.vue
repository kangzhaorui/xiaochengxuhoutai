<template>
  <page-view>
    <a-card :bordered="false" title="拼团活动详情">
      <descri-list :col="3">
        <descri-item term="活动名称">华北团</descri-item>
        <descri-item term="有效期">2017/05/15-2017/5/16</descri-item>
        <descri-item term="活动状态">进行中</descri-item>
        <descri-item term="拼图人数">2</descri-item>
        <descri-item term="拼图价">20.01</descri-item>
      </descri-list>
      <a-table :columns="columns" :dataSource="data" :rowKey="(v,k) => k" size="middle">
        <span class="info" slot="info" slot-scope="text, record">
          <img class="image" src="https://gd1.alicdn.com/imgextra/i1/1988964657/TB2GEFwd7.HL1JjSZFuXXX8dXXa_!!1988964657.jpg_400x400.jpg" />
          <div class="con">
            <div class="info-name">YOHO有货潮牌Into The Rainbow 水洗牛仔卡通印花连衣裙</div>
            <div class="flex">
              <span>拼团价格：6.00</span>
              <span>库存：200</span>
            </div>
          </div>
        </span>
      </a-table>
    </a-card>
  </page-view>
</template>

<script>
import PageView from '@/layouts/PageView';
import descriptionList from '@/components/descriptionList';
import { groupDeColumns, groupDeData } from './config';
export default {
  name: 'marketingGroupDe',
  components: { PageView, descriList: descriptionList, descriItem: descriptionList.Item },
  data() {
    return {
      columns: groupDeColumns,
      data: groupDeData()
    };
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
    .info-name {
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
}
</style>