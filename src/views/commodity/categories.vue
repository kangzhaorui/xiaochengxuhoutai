<template>
  <page-view>
    <a-card :bordered="false">
      <a-button class="add" icon="plus" @click="addup()">新建</a-button>
      <a-table :columns="columns" :dataSource="data" :pagination="pagination" @change="tableChange">
        <span slot="image" slot-scope="text, record">
          <img class="image" :src="record.url" />
        </span>
        <span slot="action" slot-scope="text, record">
          <a href="javascript:;" @click="addup(record)">修改</a>
          <a-divider type="vertical" />
          <a-popconfirm title="确定 删除 ?">
            <a href="javascript:;">删除</a>
          </a-popconfirm>
        </span>
      </a-table>
    </a-card>
    <a-modal title="新建" v-model="visible" @ok="handleOk">
      <a-form @submit="handleSubmit" :form="form" class="form">
        <a-form-item :label-col="{span: 5}" :wrapper-col="{span: 18}" label="商品简介">
          <a-input placeholder="限定在16个字符以内" v-decorator="['name', { rules: [{ required: true, message: 'Please input your note!' }] }]" />
        </a-form-item>
        <a-form-item :label-col="{span: 5}" :wrapper-col="{span: 18}" label="商品主图">
          <a-upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" listType="picture-card" multiple>
            <div>
              <a-icon type="plus" />
              <div class="ant-upload-text">上传</div>
            </div>
          </a-upload>
        </a-form-item>
      </a-form>
    </a-modal>
  </page-view>
</template>

<script>
import PageView from '@/layouts/PageView';
import { categoriesColumns, categoriesData } from './config';
export default {
  name: 'commodityCategories',
  components: { PageView },
  data() {
    return {
      visible: false,
      columns: categoriesColumns,
      data: categoriesData(),
      form: this.$form.createForm(this, { name: 'commodity' }),
      pagination: {
        current: 0,
        total: 0,
        showSizeChanger: true
      }
    };
  },
  methods: {
    addup(v = '') {
      this.visible = !this.visible;
    },
    tableChange(v) {
      this.pagination = v;
    },
    handleOk() {
      console.log('ok');
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log(values);
        }
      });
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
/deep/ .ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

/deep/ .ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>