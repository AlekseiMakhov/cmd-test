<template>
  <form class="form" @submit.prevent="formSubmit">
    <label for="name" class="form__label">ФИО:</label>
    <input
      type="text"
      class="form__input"
      id="name"
      name="name"
      v-model="name"
      pattern="^[А-Яа-я]{2,} [А-Яа-я]{2,} [А-Яа-я]{2,}$"
      placeholder="Фамилия Имя Отчество"
      minlength="8"
      @input="validate"
    />
    <span class="form__error-text">{{ errors.name.errorMessage }}</span>
    
    <label for="address" class="form__label">Адрес:</label>
    <suggestions-input
      id="address"
      :address="address"
      @select-suggestion="handleDadataResponse"
    />
    
    <label for="date" class="form__label">Дата:</label>
    <input
      type="date"
      class="form__input"
      id="date"
      name="date"
      :max="max"
      :min="min"
      v-model="date"
      @input="validate"
    />
    <span class="form__error-text">{{ errors.date.errorMessage }}</span>
    <button
      class="form__button"
      type="submit"
      :class="{ form__button_disabled: !formIsValid }"
      :disabled="!formIsValid"
    >
      Оформить вызов
    </button>
    <span
      class="form__error-text form__error-text_type_after-submit"
      v-show="submitResult.isError"
      v-for="error in submitResult.errors"
      :key="error"
    >
      {{ error }}
    </span>
  </form>
</template>

<script>
import { getRange, handleUserData } from "@/utils";
import SuggestionsInput from "./SuggestionsInput";

export default {
  name: "InputForm",
  components: { SuggestionsInput },
  data: () => ({
    name: "",
    address: "",
    date: "",
    errors: { name: {}, date: {} },
    min: getRange().min,
    max: getRange().max,
    formIsValid: false,
    submitResult: {},
  }),
  methods: {
    validate: function () {
      const inputElement = event.target;
      const name = inputElement.name;
      const isValid = inputElement.validity.valid && inputElement.value.length > 0;
      const validationMessage = inputElement.value.length > 0
        ? inputElement.validationMessage
        : "Поле не должно быть пустым.";
      this.errors[name].isValid = isValid;
      this.errors[name].errorMessage = validationMessage;
      this.formIsValid = Object.values(this.errors).every((item) => item.isValid);
      return this.errors;
    },

    formSubmit: function () {
      this.submitResult = handleUserData({
        name: this.name,
        address: this.address,
        recordDate: this.date,
      });
      if (!this.submitResult.isError) {
        this.$emit("toggle-form", this.submitResult.result);
      }
    },
    handleDadataResponse: function (data) {
      this.address = data;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/_variables';

.form {
  max-width: 31.25rem;
  justify-self: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: stretch;

  &__input {
    box-sizing: border-box;
    position: relative;
    color: $neutral-100;
    height: 2.5rem;
    padding: 0 0.625rem;
    border-radius: 6px;
    border: 1px solid $neutral-20;
    margin: 0;
    outline: none;
    transition: $duration;

    &:invalid {
      border-color: $error;
      color: $error;
    }

    &:focus {
      border-color: $neutral-100;
    }
  }

  &__button {
    align-self: center;
    margin-top: 2rem;
    width: 20rem;
    height: 3rem;
    padding: 0;
    font-size: 1rem;
    position: relative;
    cursor: pointer;
    text-align: center;
    background-color: $neutral-0;
    color: $primary-40;
    transition: all $duration ease-in-out;
    border: 1px solid $primary-40;
    border-radius: $radius;

    &:hover {
      background-color: $primary-40;
      color: $neutral-0;
      transition: all $duration ease-in-out;
    }

    &_disabled {
      background-color: $neutral-0;
      color: $neutral-20;
      border-color: $neutral-20;
      cursor: auto;

      &:hover {
        background-color: $neutral-0;
        color: $neutral-20;
      }
    }
  }

  &__label {
    margin: 0 0 0.625rem 0.625rem;
    color: $primary-80;
    justify-self: stretch;
  }

  &__error-text {
    color: $error;
    margin: 0.3125rem auto 1.25rem 0.625rem;
    font-size: 0.75rem;
    justify-self: stretch;

    &_type_after-submit {
      margin: 1.25rem 0 0;
      font-size: 1rem;
    }
  }
}
</style>
