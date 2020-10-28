<template>
  <div>
    <el-divider><h1>模板插值</h1></el-divider>
    <h2 class="title">{{msg}}<span class="text">{{text}}</span></h2>
    <h2 class="title" v-text="msg + text"></h2>
    <el-divider><h1>模板HTML语法</h1></el-divider>
    <div v-html="dom"></div>
    <el-divider><h1>模板属性</h1></el-divider>
    <a :href="url">百度</a>
    <div :id="id">绑定ID</div>
    <el-button type="primary" @click="clickFn">Click</el-button>
    <el-divider><h1>watch监听</h1></el-divider>
    <el-input v-model="watchMsg"></el-input>
    <h5>监听新值{{newVal}}</h5>
    <h5>监听旧值{{oldVal}}</h5>
    <el-divider><h1>computed</h1></el-divider>
    <h5>{{computedMsg}}</h5>
    <p>Msg:{{msg}}; computed: {{computedMsg}}</p>
    <el-button @click="changeComputedVal">换值</el-button>
  </div>
</template>

<script>
    export default {
        name: "TemplateView",
        data() {
            return {
                msg: 'hello world!',
                text: 'hello Vue!!!',
                dom: `<h2 class="title">hello world!<span class="text">hello Vue!!!</span></h2>`,
                url: 'https://www.baidu.com',
                id: 'bind-id',
                watchMsg: 'this is watching Message！',
                newVal: '',
                oldVal: '',
            }
        },
        methods: {
            clickFn() {
                alert('Click!');
            },
            changeComputedVal() {
                this.msg = this.text;
            }
        },
        watch: {
            watchMsg(_new, _old) {
                this.newVal = _new;
                this.oldVal = _old
            }
        },
        computed: {
            computedMsg() {
                return `this is computed Message! —— ${this.msg}`
            }
        }
    }
</script>

<style scoped lang="scss">
  .title {
    color: #409EFF;

    .text {
      color: aqua;
    }
  }
</style>
