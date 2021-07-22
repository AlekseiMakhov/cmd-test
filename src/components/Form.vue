<template>
  <form class="form" @submit="formSubmit">
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
    <span class="form__error-text">{{ this.errors.name.errorMessage }}</span>
    <label for="address" class="form__label">Адрес:</label>
    <!-- компонент для ввода адреса с подсказками -->
    <VueDadata :address="address" @selectSuggestion="handleDadataResponse" />
    <label for="date" class="form__label">Дата:</label>
    <input
      type="date"
      class="form__input"
      id="date"
      name="date"
      :max="maxDate"
      :min="today"
      v-model="date"
      @input="validate"
    />
    <span class="form__error-text">{{ this.errors.date.errorMessage }}</span>
    <button
      class="form__button"
      type="submit"
      v-bind:class="{ form__button_disabled: !this.formIsValid }"
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
import getDates from "../utils/getDates";
import VueDadata from "./VueDadata.vue";
import handleUserData from "../utils/handleUserData";

export default {
  name: "Form",
  components: { VueDadata },
  data: function () {
    return {
      name: "", // Фамилия Имя Отчество
      address: "", // адрес
      date: "", // дата вызова врача
      errors: { name: {}, date: {} }, // ошибки валидации
      today: getDates().today, // сегодняшняя дата
      maxDate: getDates().maxDate, // макс. дата, доступная для вызова
      formIsValid: false, // флаг валидности полей ввода
      submitResult: {}, // результат после обработки данных полей ввода
    };
  },
  methods: {
    /**
     * Функция для валидации полей ввода ФИО и даты для отображения текста ошибки
     */
    validate: function () {
      const inputElement = event.target;
      const name = inputElement.name;
      const isValid =
        inputElement.validity.valid && inputElement.value.length > 0;
      const validationMessage =
        inputElement.value.length > 0
          ? inputElement.validationMessage
          : "Поле не должно быть пустым.";
      this.errors[name].isValid = isValid;
      this.errors[name].errorMessage = validationMessage;
      this.formIsValid = Object.values(this.errors).every(
        (item) => item.isValid
      );
      //   console.log(this.formIsValid, "form");
      return this.errors;
    },
    /**
     * Передача данных ввода в функцию проверки,
     * передача результата проверки в вышестоящий компонент для управления видимостью формы
     */
    formSubmit: function () {
      event.preventDefault(); // отмена стандартного действия
      this.submitResult = handleUserData({
        name: this.name,
        address: this.address,
        recordDate: this.date,
      });
      if (!this.submitResult.isError) {
        this.$emit("toggleForm", this.submitResult.result); // отправляем данные наверх
      }
    },
    /**
     * Функция принимает данные из дочернего компонента от сервиса dadata и присваивает
     * в локальную переменную текущего компонента
     */
    handleDadataResponse: function (data) {
      this.address = data;
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  justify-self: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: stretch;

  &__input {
    box-sizing: border-box;
    position: relative;
    color: #000;
    height: 35px;
    padding: 0 10px;
    border-radius: 18px;
    border: 1px solid #c0c0c0;
    margin: 0;
    outline: none;
    transition: 0.3s;

    &:invalid {
      border-color: #f00;
      color: #f00;
    }

    &:focus {
      border-color: #000;
    }
  }

  &__button {
    align-self: center;
    margin-top: 30px;
    width: 300px;
    height: 48px;
    padding: 0;
    font-size: 16px;
    position: relative;
    cursor: pointer;
    text-align: center;
    background-color: white;
    color: #00a9e0;
    transition: all 0.25s ease-in-out;
    border: 1px solid #00a9e0;
    border-radius: 24px;

    &:hover {
      background-color: #00a9e0;
      color: #fff;
      transition: all 0.25s ease-in-out;
    }

    &_disabled {
      background-color: #fff;
      color: #00a9e0;
      cursor: auto;

      &:hover {
        background-color: #fff;
        color: #00a9e0;
      }
    }
  }

  &__label {
    margin: 0 0 10px 10px;
    color: #003594;
    justify-self: stretch;
  }

  &__error-text {
    color: #f00;
    margin: 5px auto 20px 10px;
    font-size: 12px;
    justify-self: stretch;

    &_type_after-submit {
      margin: 20px 0 0;
      font-size: 16px;
    }
  }
}
</style>