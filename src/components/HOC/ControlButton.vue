<template>
  <button :class="color" class="control-button" @click="clickHandler">
    <slot />
  </button>
</template>

<script>
export default {
  name: "ControlButton",
  props: {
    color: {
      type: String,
      default: "black",
    },
    clickHandler: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../styles/colors";
.control-button {
  padding: 0 24px;
  height: 32px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 20px;
  margin-top: 12px;
  &.black {
    color: $white;
    background-color: $black;
  }
  &.white {
    color: $black;
    background-color: $white;
  }
}
</style>
