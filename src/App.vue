<template>
  <div>
    <v-header></v-header>
    <v-item></v-item>
    
    <how-affordable></how-affordable>
    <product-wait></product-wait>
    <div class="menu__margin"></div>
    <v-menu></v-menu>
  </div>
</template>

<script>
import vHeader from './components/v-header.vue'
import VItem from './components/v-item.vue'
import VMenu from './components/v-menu.vue'
import HowAffordable from './components/how-affordable.vue'
import ProductWait from './components/product-wait.vue'
  export default {
  components: { vHeader, VMenu, VItem, HowAffordable, ProductWait },
    
  }
</script>

<style lang="scss" scoped>
.menu__margin {
  margin-bottom: 6.5rem;
}
</style>