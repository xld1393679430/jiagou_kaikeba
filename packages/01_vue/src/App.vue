<template>
  <div id="app">
    <p>
      <router-link to="/home">Home</router-link>
      <span> | </span>
      <router-link to="/detail">Detail</router-link>
    </p>
    <div>
      <button @click="$store.commit('add')">sync -> count: {{$store.state.count}}</button>
      <br>
      <button @click="$store.dispatch('add')">async -> count: {{$store.state.count}}</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
