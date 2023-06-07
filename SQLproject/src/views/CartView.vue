<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap"
      rel="stylesheet"
    />

    <header>
      <div class="container">
        <div class="logo">
          <h1>HARU OCASSIONALLY</h1>
        </div>

        <div class="li">
          <nav>
            <RouterLink to="/harulogin">ACCOUNT</RouterLink>

            <RouterLink to="/harupics">COLLECTION</RouterLink>

            <RouterLink to="/haruabout">ABOUT</RouterLink>
          </nav>
        </div>
      </div>
    </header>

    <div class="display">
      <div v-for="haru in cart.harus">
        <div class="display-card"><img class="display-img" v-bind:src="haru.image" /></div>

        <div class="description">
          <h3 class="display-title">{{ haru.name }}</h3>
          <h4 class="display-price">${{ haru.price }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { supabase } from '../lib/supabaseClient.js'
import { ref, onMounted } from 'vue'
import { useCounterStore } from '../stores/counter'
import { cart } from './harupics.vue'
const store = useCounterStore()
async function getharu() {
  const { data } = await supabase.from('haru').select()
  store.harus = data
}

getharu()
console.log(store.harus)
getharu()
</script>

<style scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-family: 'Nunito', sans-serif;
}

.logo {
  align-self: center;
}

.li a {
  text-decoration: none;
  color: black;
  padding: 2px 8px;
  position: relative;
  font-size: 1.1rem;
  letter-spacing: 1px;
  margin: 20px 30px;
}

.li a::before {
  content: '';
  position: absolute;
  bottom: 0;
  right: 50%;
  height: 100%;
  width: 0;
  transition: 0.4s ease-in;
}

.li a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  height: 100%;
  width: 0;
  transition: 0.4s ease-in;
}

.li a:hover::before {
  content: '';
  position: absolute;
  bottom: 0;
  right: 50%;
  height: 100%;
  width: 50%;
  border-bottom: 1px solid #000;
}

.li a:hover::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  height: 100%;
  width: 50%;
  transition: 0.4s ease-in;
  border-bottom: 1px solid #000;
}

.active-link {
  font-weight: 700;
}
</style>
