<template>
   <div>
      <List />
      <Cart 
         v-if="getItemsInCart.length"
         :cart_data="getItemsInCart"
      />
   </div>
</template>

<script>
import List from './components/List.vue'
import Cart from './components/cart.vue'
import { mapGetters } from 'vuex'
export default {
   components: {
      List,
      Cart,
   },
   computed: {
      ...mapGetters ([
         'getItemsInCart',
      ])
   },
}
</script>

<style>

</style>
