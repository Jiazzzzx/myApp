<template>
  <div>
    <el-divider><h1>Generator</h1></el-divider>
    <div class="content">
      <el-button type="primary" @click="nextOutput()">Generator函数: {{text}}</el-button>
    </div>
    <el-divider><h1>next()传入的参数 （）</h1></el-divider>
    <div class="content">
      等于上一次执行的yield表达式的返回值，第一次使用next方法是无效的，第二次开始是有效的。(请看模块内的foo函数)
    </div>

  </div>
</template>

<script>
    export default {
        name: "Generator",
        data() {
            return {
                mg: this.myGenerator(),
                text: ''
            }
        },
        mounted() {
            let a = this.foo(5);
            a.next();
            a.next(12);
            a.next(13);
            console.log(this.factorial(5, 1));
        },
        methods: {
            nextOutput() {
                let next = this.mg.next();
                if (!next.done) {
                    this.text = next.value;
                } else {
                    this.text = next.value;
                    this.mg = this.myGenerator();
                }
                console.log(`text`, next);
            },
            myGenerator: function* () {
                yield 'a';
                yield 'b';
                yield 'c';
                return 'Generator结束';
            },
            foo: function* (x) {
                let y = 2 * (yield (x + 1));  //第一次执行next x = 5; {value: 6, done: false};
                let z = yield (y / 3);  //第二次执行next,第一次yield的返回值 = next传入的参数12; y = 24; {value: 8, done: false};
                return (x + y + z); //第三次执行next,x = 5; y = 24; z = 13; {value: 42, done: true};
            },
            factorial(n, total) {
                debugger
                if (n === 1) return total;
                return this.factorial(n - 1, n * total);
            }
        }
    }
</script>

<style scoped>

</style>
