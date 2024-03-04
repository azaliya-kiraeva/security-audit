<template>
  <div class="container complited-form complited-form__container">
    <h1 class="complited-form__title">Проведенные Аудиты безопасности:</h1>
    <el-card v-for="form of complitedForm" class="complited-form__card">
      <template #header>
        <div class="complited-form__header">
          <h2>Результат от:</h2>
          <strong class="complited-form__header-date">{{ form.date }}</strong>
        </div>
      </template>
      <ul>
        <li>Подразделение: {{ form.subdivision || "Не указано" }}</li>
        <li>Место: {{ form.place || "Не указано" }}</li>
        <li>ФИО Аудитора: {{ form.auditor || "Не указано" }}</li>
        <li>Вид работ: {{ form.typeOfWork || "Не указано" }}</li>
        <li>Прочее: {{ form.other || "Не указано" }}</li>
        <li>
          Предпринятые меры по коррекции недостатков:
          {{ form.correctDeficiencies || "Не указано" }}
        </li>
        <li>
          <ul>
            <li v-for="result of form.result">
              {{ result.title }}: {{ result.value.join(", ") }}
            </li>
          </ul>
        </li>
      </ul>
    </el-card>
  </div>
</template>

<script setup>
import { ElCard } from "element-plus";

const complitedForm = JSON.parse(localStorage.getItem("compliteForm"));
</script>

<style>
.complited-form__container {
  margin-top: 10px;
}

.complited-form__card {
  margin-bottom: 16px;
}

.complited-form__header {
  display: flex;
  gap: 16px;
}

.complited-form__header-date {
  font-size: 20px;
}

.complited-form__title {
  margin-bottom: 32px;
}

.el-form-item__label {
  color: black !important;
  font-weight: 500;
}

.el-collapse-item__header {
  padding-left: 20px !important;
}

.el-checkbox {
  padding-left: 20px !important;
}
</style>
