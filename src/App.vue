<template>
  <el-container>
    <el-header style="height: auto;">
      <nav-menu />
    </el-header>

    <el-main class="main" >
      <router-view />
    </el-main>

  </el-container>
</template>


<script>
import NavMenu from './components/NavMenu.vue'

export default {
    name: 'app',
    data () {
      return {}
    },
    components: {
      NavMenu
    },
}
</script>

<style>
  .main {
    display: flex;
    justify-content: center;
  }

  .el-form {
    width: 400px;
    padding: 0 10px;
  }

/*  .form-wrapper {
    width: 400px;
    padding: 0 10px;
    margin: auto;
  }

  .form-wrapper .el-form {
    width: 100%;
    padding: 0;
  }*/


  .el-form-item {
    display: flex;
  }

  .el-form-item__label {
    width: 30% !important;
  }

  .el-form-item__content {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    flex-grow: 1;
    margin-left: 0 !important;
  }

  .el-select {
    flex-grow: 1;
  }

  @media screen and (max-width: 400px) {
    .el-menu--horizontal {
      width: 100%;
    }

    .el-header {
      padding: 0;
    }

    .header-title {
      font-size: 80%;
    }

    .el-card__header {
      padding: 10px;
    }

    .el-button {
      /*font-size: 70%;*/
      padding: 10px 15px;
    }

    .el-menu--horizontal > .el-menu-item {
      padding: 10px;
      font-size: 14px;
      line-height: 1.2;
      height: auto;
    }

    .el-main {
      padding: 15px 0;
    }

    .el-form-item {
      margin-bottom: 20px;
    }

    .el-form {
      width: 100%;
      padding: 0 10px;
      box-sizing: border-box;
    }

    h2,
    h3,
    h4 {
      margin: 10px 0;
    }
  }
</style>
