import { v4 as uuid } from "uuid";

const state = {
  channelsList: [],
  filteredChannels: [],
  searchValue: "",
  listHasChanged: false,
  showChannelsModal: false,
};

const mutations = {
  FETCH_CHANNELS(state, channelList) {
    state.filteredChannels = channelList;
    state.channelsList = channelList;
  },
  REMOVE_CHANNEL(state, removedChannelId) {
    state.filteredChannels = state.filteredChannels.filter(
      (channel) => channel.id !== removedChannelId
    );
  },
  UPDATE_SEARCH_VALUE(state, searchValue) {
    state.searchValue = searchValue;
  },
  ADD_NEW_CHANNEL(state, newChannelName) {
    state.filteredChannels.push({ id: uuid(), name: newChannelName });
    state.searchValue = "";
  },
  SORT_FILTERED_CHANNELS(state, sortedFilteredChannels) {
    state.filteredChannels = sortedFilteredChannels;
  },
  TOGGLE_CHANNELS_MODAL(state, showModal) {
    state.filteredChannels = [...state.channelsList];
    state.showChannelsModal = showModal;
  },
  SAVE_CHANGES(state) {
    state.channelsList = [...state.filteredChannels];
    state.showChannelsModal = false;
  },
  CANCEL_CHANGES(state) {
    state.filteredChannels = [...state.channelsList];
    state.showChannelsModal = false;
  },
};

const actions = {
  fetchChannels: ({ commit }) => {
    commit("FETCH_CHANNELS", [
      { id: uuid(), name: "Team@trengo.com" },
      { id: uuid(), name: "Call center" },
      { id: uuid(), name: "Whatsapp business" },
      { id: uuid(), name: "(test) development California" },
      { id: uuid(), name: "Whatsapp Business Iceland" },
    ]);
  },
  removeChannel: ({ commit }, removedChannelId) => {
    commit("REMOVE_CHANNEL", removedChannelId);
  },
  updateSearchValue: ({ commit }, searchValue) => {
    commit("UPDATE_SEARCH_VALUE", searchValue);
  },
  addNewChannel: ({ commit }, newChannelName) => {
    commit("ADD_NEW_CHANNEL", newChannelName);
  },
  sortFilteredChannels: ({ commit }, sortedFilteredChannels) => {
    commit("SORT_FILTERED_CHANNELS", sortedFilteredChannels);
  },
  toggleChannelsModal: ({ commit }, showModal) => {
    commit("TOGGLE_CHANNELS_MODAL", showModal);
  },
  saveChanges: ({ commit }) => {
    commit("SAVE_CHANGES");
  },
  cancelChanges: ({ commit }) => {
    commit("CANCEL_CHANGES");
  },
};

const getters = {
  filteredChannels: (state) => {
    return state.filteredChannels.filter((item) =>
      item.name.toLowerCase().includes(state.searchValue.toLowerCase())
    );
  },
  showChannelsModal: (state) => state.showChannelsModal,
  listHasChanged: (state) => {
    // checks if the length of the lists has changed covers (deleting and adding new channels)
    if (state.filteredChannels.length !== state.channelsList.length)
      return true;

    // checks if the names of the channels has changed in order
    return state.filteredChannels.reduce((hasChanged, channel, index) => {
      if (hasChanged) return true;
      else if (channel.name !== state.channelsList[index].name) return true;
      else return false;
    }, false);
  },
  searchValue: (state) => state.searchValue,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
