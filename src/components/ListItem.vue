<template>
  <li
    :class="{ active: grabbing }"
    class="channels-list-item flex flex-row justify-between items-center"
    @mousedown="grabbing = true"
  >
    <div class="flex flex-row justify-start items-center">
      <font-awesome-icon class="drag-icon" icon="ellipsis-v" />
      <div class="icon-container flex justify-center items-center">
        <font-awesome-icon class="channel-icon" icon="smile" />
      </div>
      <p class="channel-name">{{ channel.name }}</p>
    </div>
    <div>
      <button class="remove-button" @click="handleRemoveChannel(channel.id)">
        Remove
      </button>
    </div>
  </li>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    channel: {
      required: true,
      type: Object,
    },
    handleRemoveChannel: {
      required: true,
      type: Function,
    },
  },
  data() {
    return {
      grabbing: true,
    };
  },
};
</script>

<style scoped lang="scss">
@import "../styles/colors";
.channels-list-item {
  padding: 0 16px;
  height: 54px;
  cursor: grab;
  &.active {
    cursor: grab;
  }
  .drag-icon {
    margin-right: 12px;
  }
  .icon-container {
    height: 40px;
    width: 40px;
    background-color: $light-gray-2;
    margin-right: 12px;
    .channel-icon {
      height: 20px;
      width: 20px;
    }
  }
  .channel-name {
    font-size: 16px;
    color: $black;
  }
  .remove-button {
    font-size: 16px;
    color: $gray;
    font-weight: bold;
  }
}
</style>
