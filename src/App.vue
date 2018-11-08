<template>
  <div>
    <header>
    </header>

    <NavMenu />

    <router-view />
  </div>
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
  * {
    align: center;
    text-align: center;
  }
</style>
