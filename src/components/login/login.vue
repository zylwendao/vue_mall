<template>
  <div style="text-align: -webkit-center">
    <h1>后台登录</h1>
    <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="20px"
        class="demo-ruleForm"
        style="width: 600px"
    >
      <el-form-item label="UserName" prop="userName">
        <el-input v-model="ruleForm.userName" autocomplete="off"/>
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input
            v-model="ruleForm.password" type="password" autocomplete="off"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">Submit</el-button>
        <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import {reactive, ref} from 'vue'
// import {FormInstance} from 'element-plus'

const ruleFormRef = ref(null)

const validateUserName = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入用户名'))
  } else {
    if (ruleForm.userName !== '') {
      console.log('--------')
      console.log(ruleFormRef.value)
      if (!ruleFormRef.value)
        return ruleFormRef.value.validateField('username', () => null)
    }
    callback()
  }
}
const validateUserPassWord = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Please input the password again'))
  } else if (value !== ruleForm.pass) {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  userName: '',
  password: '',
})

const rules = reactive({
  userName: [{validator: validateUserName, trigger: 'blur'}],
  password: [{validator: validateUserPassWord, trigger: 'blur'}],
})

const submitForm = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
