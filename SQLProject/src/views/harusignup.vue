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
    <div class="container2">
      <header>
        <div class="container">
          <div class="logo">
            <h2>HARU OCASSIONALLY</h2>
          </div>

          <div class="li">
            <nav>
              <RouterLink to="/">HOME</RouterLink>

              <RouterLink to="/harupics">COLLECTION</RouterLink>

              <RouterLink to="/haruabout">ABOUT</RouterLink>
            </nav>
          </div>
        </div>
      </header>

      <div class="form-container">
        <h2>Register</h2>
        <form id="registerForm" @submit.prevent="signUp">
          <input
            name="email"
            type="email"
            id="email"
            placeholder="Email"
            bind:value="{email}"
            required
          />
          <input
            name="password"
            type="password"
            id="password"
            placeholder="Password"
            bind:value="{password}"
            required
          />
          <button type="submit">Register</button>
        </form>
        <RouterLink to="/harulogin" style="color: white">Back to Login</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { supabase } from '../lib/supabaseClient'

async function signUp() {
  const { error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value
  })
  if (error) {
    alert(error)
  } else {
    alert('Successfully signed up')
    document.getElementById('registerForm').reset()
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  font-family: 'Nunito', sans-serif;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #000000;
  display: flex;
  flex-direction: column;
}

.container,
.container2 {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-family: 'Nunito', sans-serif;
}

.form-container {
  max-width: 400px;
  width: 100%;
  margin-top: 70px;
  padding: 20px;
  background-color: #000000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  font-family: 'Nunito', sans-serif;
  color: #ffffff;
}

.form-container h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-container form {
  transition: transform 0.6s ease-in-out;
}

.form-container.register-form {
  transform: translateX(400px);
}

.form-container.login-form {
  transform: translateX(0);
}

.form-container.register-form .login-form {
  transform: translateX(-400px);
}

.form-container.register-form h2 {
  margin-bottom: 30px;
}

.form-container input[type='text'],
.form-container input[type='password'],
.form-container input[type='email'] {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-family: 'Nunito', sans-serif;
  background-color: #a2a2a26d;
  color: #ffffff;
  font-style: italics;
}

input::placeholder {
  color: #ffffff;
  font-size: 1.2em;
  font-style: bold;
}

.form-container button {
  width: 100%;
  padding: 10px;
  background-color: #ffffff;
  color: #000000;
  font-style: bold;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-family: 'Nunito', sans-serif;
}

.form-container button:hover {
  background-color: #e6e6e6;
}

.form-container .toggle-form {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 12px;
  text-decoration: underline;
  color: #a2a2a2;
  cursor: pointer;
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

.logo {
  padding-top: 10px;
  padding-bottom: 20px;
  align-self: center;
}
</style>
