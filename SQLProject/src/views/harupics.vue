<script setup>
import { supabase } from '../lib/supabaseClient.js'
import { ref, onMounted } from 'vue'
import { useCounterStore } from '../stores/counter'
const store = useCounterStore()
async function getharu() {
  const { data } = await supabase.from('haru').select()
  store.harus = data
}

async function AddCart(x) {
  store.cartTotal = store.cartTotal + x
}
getharu()
console.log(store.harus)
getharu()
</script>

<template>
  <div>
    <h1>{{ store.cartTotal }}</h1>

    <div v-for="haru in store.harus">
      <h3>{{ haru.name }}</h3>
      <img v-bind:src="haru.image" />
      <button @click="AddCart(haru.price)">Add To Cart</button>
    </div>
  </div>
</template>
