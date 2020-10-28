<template>
  <div>
    <el-divider><h1>基本Get请求</h1></el-divider>
    <div class="content">
      <h5 class="name">{{name}}</h5>
    </div>
    <el-divider><h1>带参数的请求处理</h1></el-divider>
    <div class="content">
      <el-select v-model="selectedVal" placeholder="请选择" @change="selecteNum">
        <el-option
          v-for="item in list"
          :key="item.num"
          :label="item.label"
          :value="item.num">
        </el-option>
      </el-select>
      <ul>
        <li v-for="item in nameList">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Get",
        data() {
            return {
                name: '',
                name1: '',
                selectedVal: '',
                list: [
                    {label: 0, num: 0},
                    {label: 1, num: 1},
                    {label: 2, num: 2},
                    {label: 3, num: 3},
                    {label: 4, num: 4},
                    {label: 5, num: 5}
                ],
                nameList: []
            }
        },
        methods: {
            getName() {
                let first, last;
                this.$axios.get('/fist').then(res => {
                    first = res.data;
                    this.name += first;
                });
                this.$axios.get('/last').then(res => {
                    last = res.data;
                    this.name += last
                });
            },

            selecteNum() {
                this.$axios.get(`/list?num=${this.selectedVal}`).then(res => {
                    this.nameList = res.data.data;
                });
            }
        },
        mounted() {
            this.getName();
        }
    }
</script>

<style scoped lang="scss">

</style>
