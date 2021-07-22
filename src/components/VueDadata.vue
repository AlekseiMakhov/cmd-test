<template>
  <div>
    <vue-dadata
      token="40ceaafdba73b796ca7a1694572d38952a2090c7"
      placeholder="Введите свой домашний адрес"
      :onChange="suggestion"
    >
    </vue-dadata>
  </div>
</template>

<script>
import VueDadata from "vue-dadata";

export default {
  name: "VueDadata",
  methods: {
    suggestion: function () {
      const responseData = JSON.parse(event.target.response).suggestions[0]
        .data;
      //   console.log(responseData);
      this.$emit("selectSuggestion", responseData);
    },
  },
  components: {
    "vue-dadata": VueDadata,
  },
};
</script>

<style lang="scss">
.vue-dadata {
  &__input {
    position: relative;
    font-size: 16px !important;
    color: #000 !important;
    height: 35px !important;
    padding: 0 10px !important;
    border: 1px solid #c0c0c0 !important;
    margin: 0 0 30px !important;
    outline: none !important;
    border-radius: 18px !important;

    &:focus {
      border-color: #000 !important;
      box-shadow: none !important;
    }
  }
  &__suggestions-item {
    &-highlight {
      background-color: #8ed8f1 !important;
    }
    &:hover {
      background-color: #8ed8f1 !important;
    }
    &_current {
      background-color: #8ed8f1 !important;
    }
  }
}
</style>