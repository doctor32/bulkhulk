<template>
    <v-header></v-header>
    <div class="header__margin"></div>
    <router-view></router-view>
    <product-wait></product-wait>
    <how-affordable></how-affordable>
    <!-- <div class="menu__margin"></div>
    <v-menu></v-menu> -->
    <v-footer></v-footer>
</template>

<script>
import vHeader from './components/v-header.vue'
// import VMenu from './components/v-menu.vue'
import HowAffordable from './components/how-affordable.vue'
import ProductWait from './components/product-wait.vue'
import VFooter from './components/v-footer.vue'
  export default {
    components: { vHeader, HowAffordable, ProductWait, VFooter },
    mounted() {
    }
}
</script>

<style lang="scss" scoped>
.menu__margin {
  margin-bottom: 6.5rem;
}
.header__margin {
  margin-top: 6.5rem;
}
</style>