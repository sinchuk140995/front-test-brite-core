<template>
    <el-menu :default-active="activeItem" @select="handleSelect" mode="horizontal" >
      <el-menu-item index="0">
        <router-link :to="{ name: 'home' }" exact>Home</router-link>
      </el-menu-item>
      <el-menu-item index="1">
        <router-link :to="{ name: 'clientInsuranceRisks' }" exact>Client insurance risks</router-link>
      </el-menu-item>
    </el-menu>
</template>

<script type="text/javascript">
  export default {
    name: 'navMenu',
    data() {
      return {
        activeItem: '0',
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        // console.log(key, keyPath)
        this.activeItem = key;
      }
    }
  }
</script>

<style>
  .router-link-active {
    color: #1FC7E9;
  }
</style>
