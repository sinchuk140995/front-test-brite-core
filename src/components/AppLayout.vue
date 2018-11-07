<template>
    <div>
        <header>
            <!-- <div>Test</div> -->
        </header>

        <NavMenu />

        <router-view />
    </div>
</template>


<script>
import NavMenu from './NavMenu.vue'

export default {
    components: {
        NavMenu,
    },
}
</script>


<style>
    * {
        align: center;
        text-align: center;
    }
    .router-link-active {
        color: green;
    }
</style>
