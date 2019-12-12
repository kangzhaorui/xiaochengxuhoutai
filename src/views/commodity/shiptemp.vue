<template>
  <page-view>
    <a-card :bordered="false" title="运费模板">
      <a-form @submit="handleSubmit" :form="form" class="form">
        <a-form-item :label-col="{span: 2}" :wrapper-col="{span: 8}" label="自定义运费">
          <a-input-number :min="1" :max="1000" style="width:120px" placeholder="单位 元" />
        </a-form-item>
        <a-form-item :label-col="{span: 2}" :wrapper-col="{span: 8}" label="模板名称">
          <a-input placeholder="限定在20个字符以内" v-decorator="['name', { rules: [{ required: true, message: 'Please input your note!' }] }]" />
        </a-form-item>
        <a-form-item :label-col="{span: 2}" :wrapper-col="{span: 8}" label="是否包邮">
          <a-radio-group v-decorator="['nameds', { rules: [{ required: true, message: 'Please input your note!' }] }]">
            <a-radio :value="1">自定义邮费</a-radio>
            <a-radio :value="2">卖家承担用费</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item :label-col="{span: 2}" :wrapper-col="{span: 8}" label="是否包邮">
          <a-radio-group v-decorator="['namedb', { rules: [{ required: true, message: 'Please input your note!' }] }]">
            <a-radio :value="1">按件数</a-radio>
            <a-radio :value="2">按重量</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item :label-col="{span: 2}" :wrapper-col="{span: 12}" label="配送区域">
          <a-table :columns="columns" :dataSource="data" :rowKey="(v,k) => k" :pagination="false"></a-table>
          <a-button style="width: 100%; margin-top: 16px; margin-bottom: 8px" type="dashed" icon="plus">新增指定城市运费</a-button>
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 2, offset: 1 }">
          <a-button type="primary" html-type="submit">保存</a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </page-view>
</template>

<script>
import PageView from '@/layouts/PageView';
import { shiptempColumns } from './config';
export default {
  name: 'commodityShiptemp',
  components: { PageView },
  data() {
    return {
      form: this.$form.createForm(this, { name: 'shiptemp' }),
      columns: shiptempColumns,
      data: []
    };
  },
  methods: {
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
</style>