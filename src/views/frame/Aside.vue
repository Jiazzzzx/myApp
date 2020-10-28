<template>
  <el-aside class="v-aside">
    <el-menu
      router
      class="el-menu-vertical-demo"
      :default-active="this.$route.path">
      <el-submenu v-for="module in this.$router.options.routes[0].children" :index="`/${module.path}`">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{module.name}}</span>
        </template>
        <el-menu-item-group v-for="route in module.children">
          <el-menu-item :index="`/${module.path}/${route.path}`">{{route.name}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
    export default {
        name: "VAside"

    }
</script>

<style scoped lang="scss">
  .aside, .el-menu {
    height: 100%;
  }
</style>
