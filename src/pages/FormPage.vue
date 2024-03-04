<template>
  <section class="form">
    <div class="container form__container">
      <el-form label-position="top">
        <el-form-item label="Дата:">
          <el-date-picker
            v-model="formResult.date"
            format="DD.MM.YYYY"
            value-format="DD.MM.YYYY"
            type="date"
            placeholder="Выберите дату"
          />
        </el-form-item>
        <el-form-item label="Подразделение:">
          <el-input
            v-model="formResult.subdivision"
            placeholder="Введите подразделение"
          ></el-input>
        </el-form-item>
        <el-form-item label="Место:">
          <el-input
            v-model="formResult.place"
            placeholder="Введите место"
          ></el-input>
        </el-form-item>
        <el-form-item label="ФИО Аудитора:">
          <el-input
            v-model="formResult.auditor"
            placeholder="Введите ФИО Аудитора"
          ></el-input>
        </el-form-item>
        <el-form-item label="Вид работ:">
          <el-input
            v-model="formResult.typeOfWork"
            placeholder="Введите вид работ"
          ></el-input>
        </el-form-item>
        <el-collapse class="form__collapse">
          <el-collapse-item
            class="form__collapse-item"
            v-for="(data, index) of formData"
            :key="data.title"
            :title="data.title"
          >
            <el-form-item>
              <el-checkbox-group v-model="formResult.result[index].value">
                <el-checkbox
                  v-for="radio of data.radios"
                  :key="radio"
                  :label="radio"
                />
              </el-checkbox-group>
            </el-form-item>
          </el-collapse-item>
        </el-collapse>
        <el-form-item label="Прочее:">
          <el-input
            v-model="formResult.other"
            :rows="2"
            type="textarea"
            placeholder="Введите прочее"
          />
        </el-form-item>
        <el-form-item label="Предпринятые меры по коррекции недостатков:">
          <el-input
            v-model="formResult.correctDeficiencies"
            :rows="2"
            type="textarea"
            placeholder="Введите меры по коррекции недостатков"
          />
        </el-form-item>
        <el-button type="primary" @click="submitForm()">Отправить</el-button>
      </el-form>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import {
  ElCollapse,
  ElCollapseItem,
  ElInput,
  ElForm,
  ElFormItem,
  ElDatePicker,
  ElCheckboxGroup,
  ElCheckbox,
} from "element-plus";
import { useRouter } from "vue-router";

const router = useRouter();
const formResult = ref({
  date: "",
  subdivision: "",
  place: "",
  auditor: "",
  typeOfWork: "",
  other: "",
  correctDeficiencies: "",
  result: [
    {
      title: "1. Реакция работника/работников",
      value: [],
    },
    {
      title: "2. Действия работника/работников",
      value: [],
    },
    {
      title: "3. Спецодежда и СИЗ",
      value: [],
    },
    {
      title: "4. Инструменты и оборудования",
      value: [],
    },
    {
      title: "5. Инструкции и правила",
      value: [],
    },
    {
      title: "6. Рабочее место",
      value: [],
    },
    {
      title: "6. Транспорт",
      value: [],
    },
  ],
});

const formData = ref([
  {
    title: "1. Реакция работника/работников",
    radios: [
      "Перестраивает работу",
      "Меняет положение",
      "Приводит в порядок СИЗ",
      "Наклоняется, прячется, уходит",
      "Меняет или прячет инструмент",
      "Устанавливает защитные приспособления",
      "Прекращает работу",
    ],
  },
  {
    title: "2. Действия работника/работников",
    radios: [
      "Отвлекается в процессе выполнения работ",
      "При ходьбе не смотрит под ноги",
      "На лестнице не держится за поручень",
      "Наличие спешки во время проведения работ",
      "Подвергает опасности других",
      "Работает в неудобной/небезопасной позе",
      "Движущиеся предметы/транспортные средства",
      "Горячие/холодные поверхности",
      "Опасные вещества",
      "Высота, падающие предметы",
      "Электрический ток",
      "Отсутствие/недостаточное освещение",
    ],
  },
  {
    title: "3. Спецодежда и СИЗ",
    radios: [
      "Спецодежда и СИЗ не соответствуют характеру выполняемых работ",
      "Нет в наличии всех необходимых СИЗ",
      "Применяет неисправные (с видимыми повреждениями) СИЗ",
      "Работник неправильно использует выданные СИЗ",
      "Не применяет СИЗ, не использует средства коллективной защиты",
    ],
  },
  {
    title: "4. Инструменты и оборудования",
    radios: [
      "Инструмент и оборудование не соответствуют характеру выполняемых работ",
      "Имеются кустарно изготовленные инструменты и оборудования",
      "Не используется в соответствии с требованиями",
      "Инструменты и оборудования неисправны, с видимыми повреждениями, не имеют необходимые средства защиты (кожухи, экраны и др.)",
    ],
  },
  {
    title: "5. Инструкции и правила",
    radios: [
      "Недоступны",
      "Не понятны персоналу",
      "Не соблюдаются требования соответствующих инструкций и правил",
    ],
  },
  {
    title: "6. Рабочее место",
    radios: [
      "Захламлено, загромождено, присутствуют посторонние предметы",
      "Скользкий пол",
      "Инструменты, оборудование, материалы размещены нерационально и небезопасно",
    ],
  },
  {
    title: "7. Транспорт",
    radios: [
      "Ремни безопасности отсутствуют, неисправны или не используются",
      "Состояние водителя не соответствует требованиям",
      "Опасный стиль вождения (резкий разгон/торможение)",
      "Используются мобильные средства связи во время движения",
      "Несоблюдение ПДД (скорость, знаки, разметка)",
      "Состояние транспортного средства не соответствует требованиям",
    ],
  },
]);

const submitForm = () => {
  const complitedForms = localStorage.getItem("compliteForm");
  if (complitedForms) {
    const saveForms = JSON.parse(complitedForms);
    saveForms.push(formResult.value);
    const JSONForm = JSON.stringify(saveForms);
    localStorage.setItem("compliteForm", JSONForm);
  } else {
    const JSONForm = JSON.stringify([formResult.value]);
    localStorage.setItem("compliteForm", JSONForm);
  }

  router.push("/complited-from");
};
</script>

<style>
.el-checkbox-group {
  display: flex !important;
  flex-direction: column !important;
  align-items: flex-start !important;
}

.form__collapse {
  margin-bottom: 16px;
}

.form__container {
  padding: 20px;
}
</style>
