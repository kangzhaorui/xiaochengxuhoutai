<template>
  <div class="login-box">
    <a-form :form="form" @submit="handleSubmit">
      <div class="logo">
        <img :src="logo" alt="logo" />
        <h1>ANNLE 商城</h1>
      </div>
      <a-form-item :validate-status="userNameError() ? 'error' : ''" :help="userNameError() || ''">
        <a-input
          v-decorator="[
            'username',
            { rules: [{ required: true, message: '请输入用户名!' }] },
          ]"
          placeholder="用户名"
        >
          <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item :validate-status="passwordError() ? 'error' : ''" :help="passwordError() || ''">
        <a-input
          v-decorator="[
            'password',
            { rules: [{ required: true, message: '请输入密码!' }] },
          ]"
          type="password"
          placeholder="密码"
        >
          <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit">
          登录
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { userLogin } from '@/api/user';
import {notification} from 'ant-design-vue'

export default {
  name: 'login',
  data() {
    return {
      logo: '/logo.png',
      form: this.$form.createForm(this, { name: 'horizontal_login' }),
    };
  },
  mounted() {
    this.$nextTick(() => {
      // To disabled submit button at the beginning.
      this.form.validateFields();
    });
  },
  methods: {
    // Only show error after a field is touched.
    userNameError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched('username') && getFieldError('username');
    },
    // Only show error after a field is touched.
    passwordError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched('password') && getFieldError('password');
    },
    handleSubmit(e) {
      debugger
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          debugger
          userLogin(values).then(res => {
            if(res.code === 1){
              notification.success({
                message: res.msg
              });
              localStorage.setItem('token', res.data.accessToken);
              setTimeout(() => {
                this.$router.push('/');
              }, 1000);
              return;
            }
            notification.error({
              message: res.msg
            })
          })
        }else{
          debugger
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.login-box{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .ant-form{
    width: 300px;
    .logo{
      display: flex;
      justify-content: center;
      margin-bottom: 30px;
      img{
        width: 40px;
        height: 40px;
        margin-right: 20px;
      }
    }
    .ant-btn{
      width: 100%;
    }
  }
}
</style>
