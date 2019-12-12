<template>
  <page-view>
    <a-card :bordered="false">
      <router-link to="/marketing/groupAdd">
        <a-button class="add" icon="plus">添加</a-button>
      </router-link>
      <a-row type="flex" justify="space-between" class="op-sea">
        <a-col>
          <span>已选 {{selectedRowKeys.length}}</span>
          <a-dropdown class="ops">
            <a-menu slot="overlay">
              <a-menu-item key="1">删除</a-menu-item>
              <a-menu-item key="2">导出</a-menu-item>
              <a-menu-item key="2">批量失效</a-menu-item>
            </a-menu>
            <a-button>
              批量操作
              <a-icon type="down" />
            </a-button>
          </a-dropdown>
        </a-col>
        <a-col>
          <a-form layout="inline" :form="form" @submit="handleSubmit">
            <a-form-item label="活动名称">
              <a-input style="width: 140px" v-decorator="['name']" placeholder="活动名称" allowClear />
            </a-form-item>
            <a-form-item label="有效期">
              <a-range-picker :showTime="{ hideDisabledOptions: true}" format="YYYY-MM-DD HH:mm:ss" allowClear />
            </a-form-item>
            <a-form-item>
              <a-button type="primary" icon="search" html-type="submit" :loading="loading">搜索</a-button>
            </a-form-item>
          </a-form>
        </a-col>
      </a-row>
      <a-table :columns="columns" :dataSource="data" :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}" :rowKey="(v,k) => k" :pagination="pagination" @change="tableChange">
        <span class="info" slot="info" slot-scope="text, record">
          <div class="info-name">YOHO有货潮牌Into The Rainbow 水洗牛仔卡通印花连衣裙</div>
          <div class="flex">
            <span>拼团价格：6.00</span>
            <span>库存：200</span>
          </div>
        </span>
        <span slot="action" slot-scope="text, record">
          <router-link :to="'/marketing/groupDe?id='+record.number">详情</router-link>
          <a-divider type="vertical" />
          <router-link :to="'/marketing/groupAdd?id='+record.number">编辑</router-link>
          <a-divider type="vertical" />
          <a-popconfirm title="确定 使失效 ?">
            <a href="javascript:;">使失效</a>
          </a-popconfirm>
          <a-divider type="vertical" />
          <a-popconfirm title="确定 停止 ?">
            <a href="javascript:;">停止</a>
          </a-popconfirm>
        </span>
      </a-table>
    </a-card>
  </page-view>
</template>

<script>
import PageView from '@/layouts/PageView';
import { GroupColumns, GroupData } from './config';
export default {
  name: 'marketingGroup',
  components: { PageView },
  data() {
    return {
      columns: GroupColumns,
      data: GroupData(),
      loading: false,
      selectedRowKeys: [],
      pagination: {
        current: 0,
        total: 0,
        showSizeChanger: true
      },
      form: this.$form.createForm(this, { name: 'marketingGroup' })
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
.add {
  margin-bottom: 16px;
}
.flex {
  padding: 0 6px;
  display: flex;
  justify-content: space-between;
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
.op-sea {
  align-items: center;
  padding-bottom: 16px;
  .ops {
    margin-left: 16px;
  }
}
</style>