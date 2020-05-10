<template>
  <div id="app">
    <ServiceList/>
    <router-view/>
  </div>
</template>

<script>
import NavigationBar from './components/home/NavigationBar';

export default {
  name: 'App',
  components: {
    ServiceList: NavigationBar,
  }
}
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
