<template>
  <div>
    <v-header></v-header>
    <v-item></v-item>
    <how-affordable></how-affordable>
    <product-wait></product-wait>
    <!-- <div class="menu__margin"></div>
    <v-menu></v-menu> -->
    <v-footer></v-footer>
  </div>
</template>

<script>
import vHeader from './components/v-header.vue'
import VItem from './components/v-item.vue'
// import VMenu from './components/v-menu.vue'
import HowAffordable from './components/how-affordable.vue'
import ProductWait from './components/product-wait.vue'
import VFooter from './components/v-footer.vue'
  export default {
  components: { vHeader, VItem, HowAffordable, ProductWait, VFooter },
    
  }
</script>

<style lang="scss" scoped>
.menu__margin {
  margin-bottom: 6.5rem;
}
</style>