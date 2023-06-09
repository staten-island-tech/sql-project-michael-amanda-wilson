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
      <div class="logo">
        <h2>HARU OCASSIONALLY</h2>
      </div>

      <div class="nav">
        <nav>
          <RouterLink to="/harulogin">ACCOUNT</RouterLink>

          <RouterLink to="/harupics">COLLECTION</RouterLink>

          <RouterLink to="/">HOME</RouterLink>
        </nav>
      </div>
    </header>

    <div class="container">
      <div class="left">
        <div class="some-quote">
          <p>- -</p>
        </div>

        <div class="some-quote2">
          <p>- -</p>
        </div>
      </div>

      <div class="line">-</div>

      <div class="right">
        <h4 class="right">ABOUT HARU</h4>

        <p class="right2">12 pound chonker</p>
        <p class="right2">2-3 years old</p>
        <p class="right2">he hates the person he's named after</p>

        <section>
          <div class="li">
            <a href="https://twitter.com/iamharuwu?s=20" target="_blank"> TWITTER: @iamharuwu</a>
          </div>
        </section>
      </div>
    </div>
    <div>{{ userSession.session ? 'Logged In' : 'Logged Out' }}</div>
  </div>
</template>

<script setup>
import { userSessionStore } from '../client/userSession'
const userSession = userSessionStore()
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  padding: 6rem;
  margin: 2rem;
  justify-content: center;
  align-content: center;
  height: 100%;
  justify-content: space-evenly;
  font-family: 'Nunito', sans-serif;
}

.left,
.right {
  width: 50%;
}

.left {
  margin-left: 20px;
  height: 90vh;
  width: 35%;
  position: relative;
  background-color: red;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.168)),
    url(https://media.discordapp.net/attachments/1044300375555059755/1114985156135092244/20230604_142855.jpg?width=1006&height=1342);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.right {
  padding: 0.5rem;
  text-decoration: none;
  color: black;
  padding: 2px 8px;
  position: relative;
  font-size: 2rem;
  letter-spacing: 1px;
  margin: 20px 30px;
}

.right2 {
  padding: 0.5rem;
  text-decoration: none;
  color: black;
  padding: 2px 8px;
  position: relative;
  font-size: 1.5rem;
  letter-spacing: 1px;
  margin: 20px 30px;
}
.line {
  background-color: black;
  margin: 20px;
  background-color: black;
  margin: 1px;
  width: 6px;
}

.left,
.some-quote {
  text-align: center;
  font-family: 'Dancing Script', cursive;
  color: #ffffff;
  font-size: 2rem;
}

.some-quote2 {
  text-align: center;
  padding-top: 40rem;
  font-family: 'Dancing Script', cursive;
  color: #ffffff;
  font-size: 2rem;
}

.li a {
  text-decoration: none;
  color: black;
  padding: 2px 8px;
  position: relative;
  font-size: 1.5rem;
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

.logo,
.nav {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-family: 'Nunito', sans-serif;
}

.logo {
  padding-top: 10px;
  padding-bottom: 20px;
}

.nav a {
  text-decoration: none;
  color: black;
  padding: 2px 8px;
  position: relative;
  font-size: 1.1rem;
  letter-spacing: 1px;
  margin: 20px 30px;
}

.nav a::before {
  content: '';
  position: absolute;
  bottom: 0;
  right: 50%;
  height: 100%;
  width: 0;
  transition: 0.4s ease-in;
}

.nav a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  height: 100%;
  width: 0;
  transition: 0.4s ease-in;
}

.nav a:hover::before {
  content: '';
  position: absolute;
  bottom: 0;
  right: 50%;
  height: 100%;
  width: 50%;
  border-bottom: 1px solid #000;
}

.nav a:hover::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  height: 100%;
  width: 50%;
  transition: 0.4s ease-in;
  border-bottom: 1px solid #000;
}
</style>
