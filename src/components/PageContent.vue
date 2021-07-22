<template>
  <main class="page-content">
    <div v-if="this.formVisible">
      <h1 class="page-content__title">Вызов врача на дом:</h1>
      <Form @toggleForm="toggleForm" />
    </div>
    <div v-else class="page-content__success-container">
      <img
        src="../assets/images/success.svg"
        alt="success.svg"
        class="page-content__success-icon"
      />
      <h1 class="page-content__title">
        Вызов врача успешно зарегистрирован в системе, номер записи:
      </h1>
      <p class="page-content__text">{{ this.recordNumber }}</p>
      <button class="page-content__button" type="button" @click="toggleForm">
        Вызвать на другую дату
      </button>
    </div>
  </main>
</template>

<script>
import Form from "./Form";
export default {
  name: "PageContent",
  data: function () {
    return {
      formVisible: true,
      recordNumber: "",
    };
  },
  components: {
    Form,
  },
  methods: {
    toggleForm: function (data) {
      this.formVisible = !this.formVisible;
      this.recordNumber = data;
    },
  },
};
</script>

<style lang="scss" scoped>
.page-content {
  display: flex;
  height: calc(100vh - 86px);
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  &__title {
    width: 500px;
    font-size: 24px;
    line-height: 36px;
    color: #003594;
    font-weight: 500;
    margin: 50px 0;
    text-align: center;
  }

  &__success-container {
    margin: 50px 0 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__success-icon {
    width: 100px;
    background-size: contain;
  }

  &__button {
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
  }
  &__text {
    width: calc(100% - 40px);
    font-size: 20px;
    line-height: 36px;
    color: #000;
    font-weight: 500;
    margin: 50px 0;
    text-align: center;
  }
}

@media screen and (max-width: 560px) {
  .page-content {
    height: calc(100vh - 54px);

    &__title {
      width: calc(100% - 40px);
      font-size: 16px;
      line-height: 20px;
      color: #003594;
      font-weight: 500;
      margin: 30px auto;
      text-align: center;
    }

    &__success-icon {
      width: 60px;
    }

    &__text {
      font-size: 16px;
      line-height: 22px;
      margin-top: 10px;
    }
  }
}
</style>