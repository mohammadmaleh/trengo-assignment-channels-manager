<template>
  <t-modal
    v-model="showChannelsModal"
    :hide-close-button="true"
    name="channelsModal"
    header="Channels"
  >
    <ChannelsSearch
      :handle-search-change="handleSearchChange"
      :search-value="searchValue"
    />
    <ChannelsList
      :filtered-channels="filteredChannels"
      :handle-remove-channel="removeChannel"
      :handle-sort-channels="handleSortChannels"
    />
    <ChannelsControl
      v-if="listHasChanged"
      :save-changes="saveChanges"
      :cancel-changes="cancelChanges"
    />
  </t-modal>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// import TModal from "../styles/tailwind.settings";
import ChannelsSearch from "../components/ChannelsSearch";
import ChannelsList from "../components/ChannelsList";
import ChannelsControl from "../components/ChannelsControl";

export default {
  name: "ChannelManager",
  components: {
    ChannelsList,
    ChannelsSearch,
    ChannelsControl,
  },
  computed: {
    ...mapGetters(["listHasChanged", "searchValue", "filteredChannels"]),
    showChannelsModal: {
      get() {
        return this.$store.getters.showChannelsModal;
      },
      set(showModal) {
        this.$store.dispatch("toggleChannelsModal", showModal);
      },
    },
  },

  methods: {
    ...mapActions(["saveChanges", "cancelChanges", "removeChannel"]),
    handleSearchChange(e) {
      if (e.code === "Enter")
        this.$store.dispatch("addNewChannel", e.target.value);
      else this.$store.dispatch("updateSearchValue", e.target.value);
    },
    handleSortChannels() {
      this.$store.dispatch("sortFilteredChannels", this.filteredChannels);
    },
  },
};
</script>

<style scoped></style>
