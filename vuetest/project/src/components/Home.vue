<template>
  <div class="home">
    <div class="loginBox">
      <h2>素馨花卉后台管理系统</h2>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item prop="name">
          <el-input type="text" placeholder="请输入用户名" v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="请输入密码" v-model="ruleForm.password"></el-input>
        </el-form-item>
        <div style="display: flex;">
          <el-form-item prop="verifycode" style="width: 50%;float: left;">
            <el-input v-model="ruleForm.verifycode" placeholder="请输入验证码" class="identifyinput"></el-input>
          </el-form-item>
          <el-form-item style="float: left;">
            <div class="identifybox" style="margin-left: 13px;margin-top: 5px;">
              <div @click="refreshCode">
                <s-identify :identifyCode="identifyCode"></s-identify>
              </div>
            </div>
          </el-form-item>
        </div>
        <el-button type="primary" class="btn" @click="submitForm('ruleForm')">登录</el-button>
      </el-form>
    </div>
  </div>
</template>
<script>
  import SIdentify from './Identify.vue'

  export default ({
    data() {
      // 验证码自定义验证规则
      const validateVerifycode = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入验证码'))
        } else if (value.toUpperCase() !== this.identifyCode.toUpperCase()) {
          console.log('validateVerifycode:', value)
          callback(new Error('验证码不正确!'))
        } else {
          callback()
        }
      }
      return {
        identifyCodes: '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
        identifyCode: '',
        ruleForm: {
          name: '',
          password: '',
          verifycode: ''
        },
        rules: {
          name: [
            {required: true, message: '请输入用户名', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ],
          verifycode: [
            {required: true, trigger: 'blur', validator: validateVerifycode}
          ]
        }
      }
    },
    components: {
      SIdentify
    },
    mounted() {
      // 验证码初始化
      this.identifyCode = '';
      this.makeCode(this.identifyCodes, 4);
    },
    methods: {
      // 切换验证码
      refreshCode() {
        this.identifyCode = ''
        this.makeCode(this.identifyCodes, 4)
      },
      // 生成随机数
      randomNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
      },
      // 生成四位随机验证码
      makeCode(o, l) {
        for (let i = 0; i < l; i++) {
          this.identifyCode += this.identifyCodes[
            this.randomNum(0, this.identifyCodes.length)
            ]
        }
        console.log(this.identifyCode)
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var username = localStorage.setItem('username', this.ruleForm.name);
            var password = localStorage.setItem('password', this.ruleForm.password);
            if (this.ruleForm.name === 'admin' && this.ruleForm.password === 'admin') {
              alert('登录成功');
              this.$router.push({
                path: '/count'
              })
            } else {
              alert('用户名或者密码错误')
            }
          } else {
            alert('登录失败');
          }
        })
      }

    }
  })
</script>
<style>
  .loginBox {
    width: 300px;
    height: 300px;
    border: 1px solid #ccc;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    padding: 30px 20px;
  }

  .loginBox h2 {
    margin-bottom: 30px;
  }

  .btn {
    width: 100%;
  }
</style>
