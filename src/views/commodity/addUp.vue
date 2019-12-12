<template>
  <page-view>
    <a-form @submit="handleSubmit" :form="form" class="form">
      <a-card :bordered="false" title="基本信息">
        <a-form-item :label-col="labelCol" :wrapper-col="wrapperCol" label="所属分类">
          <a-select style="width: 160px" allowClear placeholder="请选择商品分类" v-decorator="['t_id']" showSearch :filterOption="$filterOption">
            <a-select-option v-for="item in typeList" :key="item.id" :value="item.id">{{item.t_name}}</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item :label-col="labelCol" :wrapper-col="wrapperCol" label="商品名称">
          <a-input v-decorator="['g_name']" placeholder="请输入商品名称" allowClear />
        </a-form-item>
        <a-form-item :label-col="labelCol" :wrapper-col="wrapperCol" label="商品简介">
          <a-textarea v-decorator="['introduce']" style="width:500px" placeholder="限定在300个字符以内" :rows="4" />
        </a-form-item>
        <a-form-item :label-col="labelCol" :wrapper-col="wrapperCol" label="商品主图">
          <a-upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" v-decorator="['t_img[]']" listType="picture-card" multiple :fileList="fileList" @change="handleChange">
            <div v-if="fileList.length < 6">
              <a-icon type="plus" />
              <div class="ant-upload-text">上传</div>
            </div>
          </a-upload>
        </a-form-item>
        <a-form-item :label-col="labelCol" :wrapper-col="wrapperCol" label="商品状态">
          <a-radio-group name="radioGroup" :defaultValue="1" v-decorator="['g_status']">
            <a-radio :value="1">出售中</a-radio>
            <a-radio :value="2">下架区</a-radio>
            <a-radio :value="3">仓库中</a-radio>
          </a-radio-group>
        </a-form-item>
      </a-card>
      <a-card :bordered="false" title="商品规格" class="top specification">
        <div class="item">
          <a-row type="flex" align="middle" class="head">
            <a-col :span="1">规格名：</a-col>
            <a-col :span="2">
              <a-input placeholder="请输入规格名称" v-decorator="['sku_id']"/>
            </a-col>
          </a-row>
          <a-row type="flex" class="content">
            <a-col :span="1" class="heso">规格值：</a-col>
            <a-col :span="2" class="margin" v-for="v in value">
              <a-input placeholder="请输入规格名称" />
              <a-upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" listType="picture-card" multiple>
                <div>
                  <a-icon type="plus" />
                  <div class="ant-upload-text">图片</div>
                </div>
              </a-upload>
            </a-col>
            <a-col class="heso">
              <a href="javascript:;" @click="value++">添加规格值</a>
            </a-col>
          </a-row>
          <a-row type="flex" align="middle" class="head">
            <a-col :span="1">规格名：</a-col>
            <a-col :span="2">
              <a-input placeholder="请输入规格名称" />
            </a-col>
            <a-col :span="1" :offset="20" class="close">
              <a-button icon="close" type="link" />
            </a-col>
          </a-row>
          <a-row type="flex" class="content">
            <a-col :span="1" class="heso">规格值：</a-col>
            <a-col :span="2" class="margin" v-for="v in value">
              <a-input placeholder="请输入规格名称" />
            </a-col>
            <a-col class="heso">
              <a href="javascript:;" @click="value++">添加规格值</a>
            </a-col>
          </a-row>
          <a-button>添加规格项目</a-button>
        </div>
      </a-card>
      <a-card :bordered="false" title="规格明细" class="top">
        <a-table></a-table>
      </a-card>
      <a-card :bordered="false" class="top bom-content">
        <a-tabs defaultActiveKey="1" slot="cover">
          <a-tab-pane tab="商品详情" key="1" forceRender>
            <froala />
          </a-tab-pane>
          <a-tab-pane tab="商品参数" key="2" forceRender>
            <froala />
          </a-tab-pane>
        </a-tabs>
      </a-card>
      <footer class="footer">
        <a-button type="primary" html-type="submit" :loading="loading">提交</a-button>
        <a-popconfirm title="确定清空表单 ?" style="margin-left: 24px" placement="top" @confirm="resetFields">
          <a-button>清空</a-button>
        </a-popconfirm>
      </footer>
    </a-form>
  </page-view>
</template>

<script>
import PageView from '@/layouts/PageView';
import froala from '@/components/froala';
import {queryGoodsTypeList} from '../../api/goods';
export default {
  name: 'commodityAddUp',
  components: { PageView, froala },
  data() {
    return {
      loading: false,
      value: 3,
      form: this.$form.createForm(this, { name: 'addUp' }),
      typeList: [],
      labelCol: {
        span: 2
      },
      wrapperCol: {
        span: 12
      },
      fileList: [
        {
          uid: '-1',
          name: 'xxx.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
        }
      ]
    };
  },
  mounted(){
    this.getGoodsTypeList();
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log(values);
        }
      });
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
    resetFields() {
      this.form.resetFields();
    },
    handleChange({ fileList }) {
      this.fileList = fileList;
    }
  }
};
</script>
<style lang="less" scoped>
.form {
  .top {
    margin-top: 24px;
  }
  /deep/ .ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }

  /deep/ .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
  .bom-content {
    padding: 24px;
  }
  .specification {
    .item {
      .head {
        height: 46px;
        padding-left: 16px;
        padding-right: 8px;
        background-color: #f2f2f2;
        .close {
          text-align: right;
        }
      }
      .content {
        padding: 16px;
        .margin {
          padding-right: 24px;
        }
      }
      .heso {
        line-height: 32px;
      }
    }
  }

  .footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 50;
    background-color: #fff;
    height: 48px;
    padding-right: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>