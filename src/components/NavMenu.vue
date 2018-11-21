<template>
    <el-menu
      :default-active="activeItem"
      :router="true"
      @select="handleSelect"
      mode="horizontal"
    >
      <el-menu-item
        index="0"
        :route="{ name: 'home' }"
        class="link"
      >
        risk types
      </el-menu-item>
      <el-menu-item
        index="1"
        :route="{ name: 'clientInsuranceRisks' }"
        class="link"
      >
        policies
      </el-menu-item>
    </el-menu>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      activeItem: '0',
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      this.activeItem = key;
    }
  }
}
</script>

<style scoped>
  .router-link-active {
    color: #1FC7E9;
  }

  .link {
    text-transform: uppercase;
  }
</style>
