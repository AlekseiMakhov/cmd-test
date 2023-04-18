<template>
  <vue-dadata
    v-model="suggestion"
    :token="token"
    placeholder="Введите свой домашний адрес"
    @change="getSuggestion"
  />
</template>

<script>
import { VueDadata, getSuggestions } from "vue-dadata";

export default {
  name: "SuggestionsInput",
  data: () => ({
    suggestion: "",
    token: '40ceaafdba73b796ca7a1694572d38952a2090c7',
  }),
  methods: {
    getSuggestion: async function () {
      const response = await getSuggestions({ token: this.token, query: event.target.value })
      if (response?.length) {
        this.$emit("select-suggestion", response[0].data);
      }
    },
  },
  components: {
    "vue-dadata": VueDadata,
  },
};
</script>

<style lang="scss">
@import '@/assets/_variables';
.vue-dadata {
  &__input {
    width: 100%;
    position: relative;
    box-sizing: border-box;
    font-size: 1rem !important;
    color: $neutral-100 !important;
    height: 2.5rem !important;
    padding: 0 0.625rem !important;
    border: 1px solid $neutral-20 !important;
    margin: 0 0 2rem !important;
    outline: none !important;
    border-radius: $radius !important;

    &:focus {
      border-color: $neutral-100 !important;
      box-shadow: none !important;
    }
  }
  &__suggestions {
    position: absolute;
    z-index: 10;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.625rem;
    background-color: $neutral-0;
    
    &-item {
      cursor: pointer;
      &-highlight {
        background-color: $primary-40 !important;
      }
      &:hover {
        background-color: $primary-40 !important;
      }
      &_current {
        background-color: $primary-40 !important;
      }
    }
  }
}
</style>
