<template>
  <div id="app">
    <HelloWorld />
    <font-awesome-icon
      class="fa-1x cursor-pointer bold"
      icon="ellipsis-h"
      @click="toggleChannelsModal(true)"
    />
    <ChannelManager />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import ChannelManager from "./containers/ChannelManager";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    HelloWorld,
    ChannelManager,
  },
  created() {
    this.$store.dispatch("fetchChannels");
  },
  methods: {
    ...mapActions(["toggleChannelsModal"]),
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
