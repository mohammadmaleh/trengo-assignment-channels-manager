<template>
  <div class="input-container flex flex-row justify-start items-center">
    <font-awesome-icon class="search-icon" icon="search" />
    <input
      :value="searchValue"
      class="search-input"
      type="text"
      @keyup="handleSearchChange"
    />
  </div>
</template>

<script>
export default {
  name: "ChannelsSearch",
  props: {
    searchValue: {
      required: true,
      type: String,
    },
    handleSearchChange: {
      required: true,
      type: Function,
    },
  },
};
</script>

<style scoped lang="scss">
@import "../styles/colors";
.input-container {
  border: 1px solid $light-gray;
  width: 100%;
  height: 40px;
  border-radius: 20px;
  .search-icon {
    font-size: 0.7em;
    margin: 0 10px;
    color: $light-gray;
    width: 20px;
    height: 20px;
  }
  .search-input {
    width: calc(100% - 20px);
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
    height: 30px;
    color: $gray;
    font-size: 16px;
    &:focus {
      outline: none;
    }
  }
}
</style>
