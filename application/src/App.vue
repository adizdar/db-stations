<template>
  <div id="app">
    <StationsMap class="map" />
  </div>
</template>

<script>
import StationsMap from "./components/StationsMap.vue";

export default {
  name: "App",
  components: {
    StationsMap,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
}

.map {
  height: 100%;
  width: 100%;
}
</style>
