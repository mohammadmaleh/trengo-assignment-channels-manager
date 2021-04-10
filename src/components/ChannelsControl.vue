<template>
  <div class="flex flex-row justify-end items-center">
    <ControlButton :color="'white'" :click-handler="cancelChanges"
      ><span>Cancel</span></ControlButton
    >
    <ControlButton :color="'black'" :click-handler="saveChanges"
      ><span> Apply </span></ControlButton
    >
  </div>
</template>

<script>
import ControlButton from "./HOC/ControlButton";
export default {
  name: "ChannelsControl",
  components: {
    ControlButton,
  },
  props: {
    cancelChanges: {
      required: true,
      type: Function,
    },
    saveChanges: {
      required: true,
      type: Function,
    },
  },
};
</script>

<style scoped></style>
