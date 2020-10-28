<template>
  <div>
    <el-divider><h1>父组件向子组件传入对应文字（匿名插槽）</h1></el-divider>
    这是Slot主页面
    <slot-one>
      这是从SlotView组件向子组件传入的信息
    </slot-one>
    <el-divider><h1>父组件向子组件传入对应文字（具名插槽）</h1></el-divider>
    这是Slot主页面
    <slot-two>
      <div slot="one" style="color: #409EFF">这是从SlotView组件向子组件插槽one传入的信息</div>
      <div slot="two">这是从SlotView组件向子组件插槽two传入的信息</div>
      <div slot="three">这是从SlotView组件向子组件插槽three传入的信息</div><wq></wq>
    </slot-two>
  </div>
</template>

<script>
    import SlotOne from "../../components/slot/SlotOne";
    import SlotTwo from "../../components/slot/SlotTwo";

    export default {
        name: "SlotView",
        components: {SlotTwo, SlotOne}
    }
</script>

<style scoped>

</style>
