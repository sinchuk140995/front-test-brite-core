<template>
  <el-container>
    <el-header>
      <NavMenu />
    </el-header>

    <el-main >
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

</style>
