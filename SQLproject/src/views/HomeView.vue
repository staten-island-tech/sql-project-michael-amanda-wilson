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
    <section class="home-section">
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
      <main>
        <div class="some-quote">
          <p>- -</p>
        </div>
        <div class="design-btn">
          <h1>EXPLORE + COLLECT</h1>
        </div>
        <div class="navigation">
          <div class="next-prev">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 172 172"
                style="fill: #000000"
              >
                <g
                  fill="none"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                  style="mix-blend-mode: normal"
                >
                  <path d="M0,172v-172h172v172z" fill="none"></path>
                  <g fill="#ffffff">
                    <path
                      d="M97.46667,17.2h11.46667c2.21307,0 4.2312,1.27853 5.18293,3.27947c0.95173,2.00093 0.65933,4.3688 -0.74533,6.0888l-48.63013,59.43173l48.63013,59.43747c1.40467,1.71427 1.69133,4.08213 0.74533,6.0888c-0.946,2.00667 -2.96987,3.27373 -5.18293,3.27373h-11.46667c-1.72,0 -3.34827,-0.774 -4.4376,-2.10413l-51.6,-63.06667c-1.72573,-2.1156 -1.72573,-5.14853 0,-7.26413l51.6,-63.06667c1.08933,-1.3244 2.7176,-2.0984 4.4376,-2.0984z"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 172 172"
                style="fill: #000000"
              >
                <g
                  fill="none"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                  style="mix-blend-mode: normal"
                >
                  <path d="M0,172v-172h172v172z" fill="none"></path>
                  <g fill="#ffffff">
                    <path
                      d="M68.8,154.8h-11.46667c-2.21307,0 -4.2312,-1.27853 -5.18293,-3.27947c-0.95173,-2.00093 -0.65933,-4.3688 0.74533,-6.0888l48.63013,-59.43173l-48.63013,-59.43747c-1.40467,-1.71427 -1.69133,-4.08213 -0.74533,-6.0888c0.946,-2.00667 2.96987,-3.27373 5.18293,-3.27373h11.46667c1.72,0 3.34827,0.774 4.4376,2.10413l51.6,63.06667c1.72573,2.1156 1.72573,5.14853 0,7.26413l-51.6,63.06667c-1.08933,1.3244 -2.7176,2.0984 -4.4376,2.0984z"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div class="indicator">
            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </main>
      <div class="home-footer"></div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView, useRouter } from 'vue-router'
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: 0;
}

.home-section {
  width: 100%;
  height: 100vh;
}

header {
  width: 100%;
  height: 20vh;
}

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
.ham-menu {
  display: none;
}

nav {
  width: 60%;
  transform: translateY(0) translateX(0);
  display: flex;
  flex-direction: row;
}

.nav-class {
  display: none;
}

nav ul {
  display: flex;
  flex-direction: row;

  justify-content: space-evenly;
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

main {
  height: 60vh;
  width: 100%;
  position: relative;
  background-color: red;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(https://pbs.twimg.com/profile_banners/1589797891287162880/1679715185/1500x500);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.navigation {
  display: flex;
  flex-direction: row;
}

.next-prev {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
}

.indicator {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  padding-bottom: 10px;
}

.indicator div {
  display: flex;
  display: inline-block;
}

.indicator div div {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: transparent;
  border: 1px solid #fff;
  margin: 0 4px;
}

.indicator div div:nth-child(2) {
  background-color: #fff;
}

main .some-quote {
  text-align: center;
  padding-top: 60px;
  font-family: 'Dancing Script', cursive;
  color: #ffffff;
  font-size: 1.2rem;
}

main .design-btn {
  margin-top: 160px;
  text-align: center;
  color: #ffffff;
}

main .design-btn h1 {
  font-family: 'Nunito', sans-serif;
  letter-spacing: 3px;
  display: inline-block;
  padding: 5px 10px;
  position: relative;
  cursor: pointer;
}

main .design-btn h1::before {
  content: '';
  border-top: 2px solid #ffffff;
  border-left: 2px solid #ffffff;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 20%;
  transition: 0.5s ease-in;
}

main .design-btn h1::after {
  content: '';
  border-bottom: 2px solid #ffffff;
  border-right: 2px solid #ffffff;
  position: absolute;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 20%;
  transition: 0.5s ease-in;
}

main .design-btn h1:hover::before {
  width: 50%;
  height: 0;
}
main .design-btn h1:hover::after {
  width: 50%;
  height: 0;
}

.home-footer {
  height: 20vh;
}
</style>
