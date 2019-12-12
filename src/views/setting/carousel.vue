<template>
  <page-view>
    <a-card :bordered="false">
      <a-button class="add" icon="plus" @click="addup()">新建</a-button>
      <a-table :columns="columns" :dataSource="data" :pagination="false" :rowKey="(v,k) => k">
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
        <span slot="image" slot-scope="text, record">
          <img class="image" src="https://gd1.alicdn.com/imgextra/i1/1988964657/TB2GEFwd7.HL1JjSZFuXXX8dXXa_!!1988964657.jpg_400x400.jpg" />
        </span>
        <span slot="action" slot-scope="text, record">
          <a-popconfirm title="确定 移除 ?">
            <a href="javascript:;">移除</a>
          </a-popconfirm>
        </span>
      </a-table>
    </a-card>
    <a-modal title="新建" v-model="visible">
      <a-form :form="form">
        <a-form-item :label-col="{span: 5}" :wrapper-col="{span: 18}" label="广告图">
          <a-upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" listType="picture-card" multiple>
            <div>
              <a-icon type="plus" />
              <div class="ant-upload-text">上传</div>
            </div>
          </a-upload>
          <p>用于首页展示商品广告。最多上传6张 图片要求：900px*360px，大小不超过10M。</p>
        </a-form-item>
        <a-form-item>
          <div class="info">
            <img class="image" src="https://gd1.alicdn.com/imgextra/i1/1988964657/TB2GEFwd7.HL1JjSZFuXXX8dXXa_!!1988964657.jpg_400x400.jpg" />
            <div class="con">
              <div class="info-name">YOHO有货潮牌Into The Rainbow 水洗牛仔卡通印花连衣裙</div>
              <div class="flex">
                <span>拼团价格：6.00</span>
                <span>库存：200</span>
              </div>
            </div>
          </div>
          <a-button type="primary" @click="upAddSp">关联商品</a-button>
        </a-form-item>
      </a-form>
    </a-modal>
    <a-modal width="1000px" title="选择商品" v-model="visibleSp">
      <div class="sele">
        <div class="left">
          <div class="search">
            <a-input addonBefore="所有商品" addonAfter="搜索商品" />
          </div>
          <a-spin :spinning="loading">
            <div class="demo-infinite-container">
              <div class="item" :value="v" v-for="v in 12">
                <img class="image" src="https://gd1.alicdn.com/imgextra/i1/1988964657/TB2GEFwd7.HL1JjSZFuXXX8dXXa_!!1988964657.jpg_400x400.jpg" />
                <div class="context">
                  <div class="name">YOHO有货潮牌Into The Rainbow 水洗牛仔卡通印花连衣裙</div>
                  <div class="flex">
                    <span>当前价格：6.00</span>
                    <span>库存：200</span>
                  </div>
                </div>
                <a-icon type="check" class="icon" />
              </div>
            </div>
          </a-spin>
        </div>
        <div class="right">
          <div class="item">
            <img class="image" src="https://gd1.alicdn.com/imgextra/i1/1988964657/TB2GEFwd7.HL1JjSZFuXXX8dXXa_!!1988964657.jpg_400x400.jpg" />
            <div class="context">
              <div class="name">YOHO有货潮牌Into The Rainbow 水洗牛仔卡通印花连衣裙</div>
              <div class="flex">
                <span>当前价格：6.00</span>
                <span>库存：200</span>
              </div>
            </div>
            <a-icon type="check" class="icon" />
          </div>
        </div>
      </div>
    </a-modal>
  </page-view>
</template>

<script>
import PageView from '@/layouts/PageView';
import { carouselColumns, carouselDeData } from './config';
export default {
  name: 'settingCarousel',
  components: { PageView },
  data() {
    return {
      visible: false,
      visibleSp: false,
      columns: carouselColumns,
      data: carouselDeData(),
      loading: false,
      form: this.$form.createForm(this, { name: 'settingCarousel' })
    };
  },
  methods: {
    addup() {
      this.visible = !this.visible;
    },
    upAddSp() {
      this.visibleSp = !this.visibleSp;
    }
  }
};
</script>
<style lang="less" scoped>
.add {
  margin-bottom: 16px;
}
.image {
  height: 48px;
}
.info {
  display: flex;
  align-items: center;
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
      line-height: 36px;
      display: flex;
      justify-content: space-between;
    }
  }
}
.sele {
  display: flex;
  .left,
  .right {
    flex: 1;
  }
  .right {
    padding-left: 30px;
  }
  .search {
    margin-bottom: 16px;
  }
  .demo-infinite-container {
    overflow: auto;
    height: 400px;
  }
  .item {
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    .image {
      width: 58px;
      height: 48px;
      object-fit: cover;
    }

    .context {
      padding-left: 16px;
      .name {
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
    .icon {
      margin-left: 16px;
      margin-right: 24px;
      color: #1890ff;
    }
  }
}
</style>