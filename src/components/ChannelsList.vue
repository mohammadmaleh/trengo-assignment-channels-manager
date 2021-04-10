<template>
  <ul class="channels-list">
    <draggable
      :list="filteredChannels"
      group="people"
      @change="handleSortChannels"
    >
      <ListItem
        v-for="channel in filteredChannels"
        :key="channel.id"
        :channel="channel"
        :handle-remove-channel="handleRemoveChannel"
      />
    </draggable>
  </ul>
</template>

<script>
import ListItem from "./ListItem";
import draggable from "vuedraggable";
export default {
  name: "ChannelsList",
  components: {
    ListItem,
    draggable,
  },
  props: {
    filteredChannels: {
      required: true,
      type: Array,
    },
    handleRemoveChannel: {
      required: true,
      type: Function,
    },
    handleSortChannels: {
      required: true,
      type: Function,
    },
  },
};
</script>

<style scoped lang="scss">
.channels-list {
  margin-top: 20px;
  max-height: 270px;
  overflow-y: scroll;
}
</style>
