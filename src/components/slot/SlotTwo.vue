<template>
    <div>
      这是slot-two组件！
      <slot name="one"></slot>
      <slot name="two"></slot>
      <slot name="three"></slot>
    </div>
</template>

<script>
    export default {
        name: "SlotTwo"
    }
</script>

<style scoped>

</style>
