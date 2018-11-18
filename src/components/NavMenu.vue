<template>
    <el-menu :default-active="activeItem" :router="true" @select="handleSelect" mode="horizontal" >
      <el-menu-item index="0" :route="{ name: 'home' }">
        Home
      </el-menu-item>
      <el-menu-item index="1" :route="{ name: 'clientInsuranceRisks' }">
        Client insurance risks
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
        // console.log('key, keyPath', key, keyPath)
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
