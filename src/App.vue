<!-- <script setup>
import { RouterLink, RouterView } from "vue-router";
import { inject } from "vue";

const _GStore = inject("GStore", "");

</script> -->
<script>
export default {
  inject: ["GStore"],
};
</script>

<template>
  <div id="layout">
    <div id="flashMessage" v-if="GStore.flashMessage">
      {{ GStore.flashMessage }}
    </div>
    <header>
      <div class="wrapper">
        <nav id="nav">
          <RouterLink to="/">Event</RouterLink> |
          <RouterLink :to="{ name: 'about' }">About</RouterLink> |
          <router-link :to="{ name: 'EventCreate' }">Create Event</router-link>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style>
#layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
button {
  align-items: center;
  height: 50px;
  padding: 0 40px;
  background: linear-gradient(to right, #16c0b0, #84cf6a);
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.2s linear;
}
button:hover {
  -webkit-transform: scale(1.02);
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
h2 {
  font-size: 20px;
  font-weight: 700;
}
h3 {
  font-size: 25px;
  font-weight: 700;
}
h4 {
  font-size: 20px;
  font-weight: 700;
}
input {
  display: block;
  width: 100%;
  height: 30px;
  margin-bottom: 24px;
}
input[type=text] {
  padding: 0px 10px;
}
input:focus {
  border-color: #16c0b0;
  outline: 0;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
.form-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10%;
}
select:focus {
  border-color: #16c0b0;
  outline: 0;
}

@keyframes yellowfade {
  from {
    background: yellow;
  }
  to {
    background: transparent;
  }
}

#flashMessage {
  animation-name: yellowfade;
  animation-duration: 3s;
}
</style>
