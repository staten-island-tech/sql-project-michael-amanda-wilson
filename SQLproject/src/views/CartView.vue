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
  </div>
  <div class="display">
    <h1>CART</h1>
    <h2>TOTAL PRICE: {{ totalPrice }}</h2>
    <div id="cart">
      <div v-for="haru in cart">
        <div class="display-card" v-bind:id="haru.id">
          <img class="display-img" v-bind:src="haru.image" />

          <div class="description">
            <h3 class="display-name">Bought By: {{ haru.users.email }}</h3>
            <h4 class="display-title">{{ haru.name }}</h4>
            <h5 class="display-price">${{ haru.price }}</h5>
            <button class="btn" @click="RemoveFrom(haru.id, haru.price)">REMOVE FROM CART</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient.js'
import { userSessionStore } from '../client/userSession'
import { useStorage } from '@vueuse/core'

const userSession = userSessionStore()
console.log(useStorage)

const cart = ref([])
let totalPrice = ref(0)
async function getCart() {
  const {
    data: { user }
  } = await supabase.auth.getUser()
  //join
  const { data } = await supabase
    .from('cart')
    .select(`id,name,image, price, users(id, email)`)
    .eq('users', user.id)
  cart.value = data

  for (let i of data) {
    totalPrice.value += parseInt(i['price'])
  }
}
async function RemoveFrom(hid, hprice) {
  const { data, error } = await supabase.from('cart').delete().eq('id', hid)
  document.getElementById(hid).remove()
  reTotal(hprice)
}

async function reTotal(hprice) {
  totalPrice.value -= hprice
}

onMounted(() => {
  getCart()
})
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
.window {
  padding: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-family: 'Nunito', sans-serif;
}

.display {
  padding-top: 20px;
  display: flex;
  flex-wrap: wrap;
  width: 90vw;
  height: fit-content;
  flex-direction: column;
  justify-content: space-around;
  margin: auto;
  box-sizing: border-box;
  align-items: center;
  background-color: #56565636;
  border-radius: 30px;
  padding: 3rem;
  font-family: 'Nunito', sans-serif;
}

.btn {
  width: 100%;
  padding: 10px;
  background-color: #ffffff;
  color: #000000;
  font-style: bold;
  border: none;
  border-radius: 30px;

  font-family: 'Nunito', sans-serif;
}

.btn:hover {
  background-color: #bebebe;
}

.line {
  background-color: black;
  margin: 1px;
  width: 60rem;
  height: 6px;
  align-content: center;
}

.logo {
  padding-top: 10px;
  padding-bottom: 20px;
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

.display-card,
.description {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 2rem;
  justify-content: space-around;
  font-weight: bold;
  align-items: center;
  justify-content: center;
}
.display-img {
  width: 19.4rem;
  height: 30rem;
  justify-content: space-around;
  border-radius: 30px;
  transition: all 0.2s;
}
.display-title,
.display-release {
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
  text-align: center;
}

.display-img:hover {
  transform: translateY(-0.5rem);
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 12px 40px 0 rgba(0, 0, 0, 0.19);
}
</style>
