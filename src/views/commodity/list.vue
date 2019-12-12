<template>
  <page-view>
    <template v-slot:header>
      <a-tabs class="head-tabs" :tabBarStyle="{margin: 0,borderColor:'#fff'}" :defaultActiveKey="selecteType" @change="changeTab">
        <a-tab-pane key="1">
          <span slot="tab">
            <a-icon type="sliders" />全部商品
          </span>
        </a-tab-pane>
        <a-tab-pane key="2">
          <span slot="tab">
            <a-icon type="clock-circle" />出售中
          </span>
        </a-tab-pane>
        <a-tab-pane key="3">
          <span slot="tab">
            <a-icon type="minus-circle" />下架区
          </span>
        </a-tab-pane>
        <a-tab-pane key="4">
          <span slot="tab">
            <a-icon type="sync" />回收站
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
              <a-menu-item key="1">商品上架</a-menu-item>
              <a-menu-item key="2">商品下架</a-menu-item>
              <a-menu-item key="3">商品入库</a-menu-item>
              <a-menu-item key="4">调整基本信息</a-menu-item>
              <a-menu-item key="5">调整显示销售数量</a-menu-item>
              <a-menu-item key="6">调整库存</a-menu-item>
              <a-menu-item key="7">调整预警库存</a-menu-item>
              <a-menu-item key="8">调整会员零售价</a-menu-item>
              <a-menu-item key="9">调整商品关联标签</a-menu-item>
            </a-menu>
            <a-button>
              批量操作
              <a-icon type="down" />
            </a-button>
          </a-dropdown>
        </a-col>
        <a-col>
          <a-form layout="inline" :form="form" @submit="handleSubmit">
            <a-form-item>
              <a-input style="width: 140px" v-decorator="['g_name']" placeholder="商品名称" allowClear />
            </a-form-item>
            <a-form-item>
              <a-input style="width: 140px" v-decorator="['g_order_no']" placeholder="商品编号" allowClear />
            </a-form-item>
            <a-form-item>
              <a-select style="width: 160px" allowClear placeholder="请选择商品分类" v-decorator="['t_id']" showSearch :filterOption="$filterOption">
                <a-select-option v-for="item in typeList" :key="item.id" :value="item.id">{{item.t_name}}</a-select-option>
                <!-- <a-select-option value="lucy">家电</a-select-option>
                <a-select-option value="tom">蔬菜</a-select-option> -->
              </a-select>
            </a-form-item>
            <a-form-item>
              <a-select style="width: 160px" allowClear placeholder="库存状态" v-decorator="['is_stock']">
                <a-select-option value="0">全部</a-select-option>
                <a-select-option value="1">预警</a-select-option>
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
      <a-table
        :columns="columns"
        :dataSource="list"
        :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
        :rowKey="record => record.id"
        :pagination="pagination"
        @change="tableChange"
      >
        <span class="info" slot="info" slot-scope="text, record">
          <img class="image" :src="record.url" />
          <div class="con">{{record.name}}</div>
        </span>
        <span slot="action" slot-scope="text, record">
          <!-- <router-link :to="'/commodity/detail?id='+record.sort">详情</router-link> -->
          <!-- <a-divider type="vertical" /> -->
          <router-link :to="'/commodity/up?id='+record.sort">修改</router-link>
          <a-divider type="vertical" />
          <a href="javascript:;">相关商品</a>
          <!-- <a-divider type="vertical" />
          <a href="javascript:;">库存</a>
          <a-divider type="vertical" />
          <a-popconfirm title="确定下降?" >
            <a href="javascript:;">下架</a>
          </a-popconfirm>
          <a-divider type="vertical" />
          <a-popconfirm title="确定 删除 ?" >
            <a href="javascript:;">删除</a>
          </a-popconfirm>
          <a-divider type="vertical" />
          <a-popconfirm title="确定彻底删除?  彻底删除之后无法找回" >
            <a href="javascript:;">彻底删除</a>
          </a-popconfirm>-->
        </span>
      </a-table>
    </a-card>
  </page-view>
</template>

<script>
import PageView from '@/layouts/PageView';
import { listColumns, listData } from './config';
import {queryGoodsList, queryGoodsTypeList} from '../../api/goods';

export default {
  name: 'commodityList',
  components: { PageView },
  data() {
    return {
      loading: false,
      columns: listColumns,
      list: [],
      typeList: [],
      selectedRowKeys: [],
      pagination: {
        current: 0,
        pageSize: 10,
        // total: this.list.length,
        showSizeChanger: true
      },
      selecteType: 1,
      form: this.$form.createForm(this, { name: 'commSearch' })
    };
  },
  mounted(){
    this.getGoodsList({g_status: 1});
    this.getGoodsTypeList();
  },
  methods: {
    /**
     * 查询商品列表
     * params {data} 筛选条件
     * listrows 每页条数
     * p 当前页码
     */
    getGoodsList(data){
      const obj = Object.assign({listrows: 10, p: 1}, data); // 默认每页10条 查询第一页
      queryGoodsList(obj).then(res => {
        if(res.code === 1){
          this.list = res.data;
        }
      })
    },
    /**
     * 获取商品分类列表
     */
    getGoodsTypeList() {
      const obj = {listrows: 999, p: 1};
      queryGoodsTypeList(obj).then(res => {
        if (res.code === 1) {
          this.typeList = res.data;
        }
      })
    },
    /**
     * tab切换
     * params {g_status} 商品状态
     */
    changeTab(e){
      const data = {
        g_status: e
      }
      this.selecteType = e;
      this.getGoodsList(data);
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          let obj ={listrows: 10, p: 1};
          for (const key in values) {
            if (values[key] !== undefined) {
              obj[key] = values[key];
            }
          }
          queryGoodsList(obj).then(res => {
            if(res.code === 1){
              this.list = res.data;
            }
          })
        }
      });
    },
    onSelectChange(ls) {
      console.log(ls);
      this.selectedRowKeys = ls;
    },
    menuClick(v) {
      console.log(v);
    },
    tableChange(v) {
      this.pagination = v;
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
.info {
  display: flex;
  .image {
    flex-shrink: 0;
    height: 48px;
  }
  .con {
    padding-left: 16px;
  }
}
</style>