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

  .error {
    padding: 18px 20px;
  }


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

  .box-card {
    width: 480px;
    max-width: calc(100vw - 20px);
  }

  .box-card .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .box-card .header .el-button {
    margin-left: auto;
  }

  .box-card .header-title {
    margin-right: 30px;
    text-transform: uppercase;
  }

  .box-card .box-row {
    display: flex;
    margin-bottom: 0;
  }

  .box-card .box-row:hover {
    background-color: #ddd;
  }

  .box-card .box-row .row-item {
    flex: 1;
    text-decoration: none;
    color: inherit;
    display: block;
    padding: 15px;
    border-bottom: 1px solid #ddd;
    transition: background-color 300ms;
  }

  .el-icon-edit,
  .el-icon-delete {
    display: block;
    padding: 15px 5px 15px 5px;
    border-bottom: 1px solid #ddd;
  }

  .el-icon-edit:hover {
    background-color: #ffe100;
  }

  .el-icon-delete:hover {
    background-color: #f00;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .text {
    font-size: 14px;
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
