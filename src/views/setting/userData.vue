<template>
  <page-view>
    <a-card :bordered="false">
      <a-table :columns="columns" :dataSource="data" :rowKey="(v,k) => k" :pagination="pagination" @change="tableChange">
        <span slot="image" slot-scope="text, record">
          <img class="image" src="https://gd1.alicdn.com/imgextra/i1/1988964657/TB2GEFwd7.HL1JjSZFuXXX8dXXa_!!1988964657.jpg_400x400.jpg" />
        </span>
        <div class="commodity" slot="commodity" slot-scope="text, record">
          <p>YOHO有货潮牌Into The Rainbow 1</p>
          <p>YOHO有货潮牌Into The Rainbow 2</p>
          <p>YOHO有货潮牌Into The Rainbow 4</p>
          <p>YOHO有货潮牌Into The Rainbow 5</p>
          <p>YOHO有货潮牌Into The Rainbow 6</p>
          <p>YOHO有货潮牌Into The Rainbow 7</p>
        </div>
      </a-table>
    </a-card>
  </page-view>
</template>

<script>
import PageView from '@/layouts/PageView';
import { userDataColumns, userDataDeData } from './config';
export default {
  name: 'settingUserData',
  components: { PageView },
  data() {
    return {
      columns: userDataColumns,
      data: userDataDeData(),
      pagination: {
        current: 0,
        total: 0,
        showSizeChanger: true
      }
    };
  },
  methods: {
    tableChange(s) {
      this.pagination = s;
    }
  }
};
</script>
<style lang="less" scoped>
.image {
  height: 48px;
}
.commodity {
  overflow: auto;
  height: 68px;
  p {
    margin: 0;
  }
}
</style>