<template>
  <div class="content">
    <el-divider><h1>Post请求</h1></el-divider>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="form.age"></el-input>
      </el-form-item>
      <el-form-item label="信息">
        <el-input v-model="form.message"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
    export default {
        name: "Post",
        data() {
            return {
                form: {
                    name: '',
                    age: '',
                    message: ''
                }
            }
        },
        methods: {
            onSubmit() {
              this.$axios.post('http://192.167.3.12:8088/form',this.form)
            }
        }
    }
</script>

<style scoped>

</style>
