<template>
  <el-container class="frame">
    <el-header class="header"></el-header>
    <el-container class="content">
      <v-aside></v-aside>
      <el-main class="main">
        <el-card class="card">
          <router-view/>
        </el-card>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
    import VAside from "./Aside";

    export default {
        name: "Frame",
        components: {VAside}
    }
</script>

<style scoped lang="scss">
  .header {
    background: #409EFF;
  }

  .frame {
    height: 100%;

    .content {
      .main {
        overflow: hidden;

        .card {
          height: 100%;
          overflow-y: auto;
        }
      }

    }
  }
</style>
