<template>
  <div>
    <el-divider><h1>Promise</h1></el-divider>
    <div class="content">
    </div>

  </div>
</template>

<script>
    export default {
        name: "Promise",
        data() {
            return {}
        },
        mounted() {
            //Promise示例
            // new Promise(resolve => {
            //     setTimeout(() => {
            //         resolve('hello world');
            //     }, 2000)
            // }).then(res => {
            //     console.log(res);
            // })

            //分批次
            // new Promise(resolve => {
            //     setTimeout(() => {
            //         resolve('hello');
            //     })
            // }).then(res => {
            //     console.log(res);
            //     return new Promise(resolve => {
            //         setTimeout(() => {
            //             resolve('world!');
            //         },2000)
            //     }).then(res => {
            //         console.log(res);
            //     })
            // })

            //Promise完成后then();
            // let promise = new Promise(resolve => {
            //     setTimeout(() => resolve('hello world!'), 2000)
            // });
            //
            // setTimeout(() => {
            //     promise.then(res => console.log(res));
            // }, 1000)

            //分批次 时间段不同 测试Promise
            this.asyncFn1()
                .then(res => {
                    console.log('数据1完成');
                    console.log(res);
                    return this.asyncFn2()
                })
                .then(res => {
                    console.log(res);
                })
        },
        methods: {
            asyncFn1() {
                let p = new Promise(resolve => {
                    setTimeout(() => resolve('返回的数据1'), 2000);
                });
                return p
            },
            asyncFn2() {
                let p = new Promise(resolve => {
                    setTimeout(() => resolve('返回的数据2'), 1000);
                });
                return p
            }
        }
    }
</script>

<style scoped>

</style>
