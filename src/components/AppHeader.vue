<template>
  <header class="header">
    <div class="container header__container">
      <router-link :to="'/security-audit'">
        <span class="header__title"
          >Бланк <strong>ПАБ</strong></span
        ></router-link
      >
    </div>
  </header>
</template>

<style>
.header__container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.header__title {
  align-self: flex-start;
  margin-right: auto;
  font-size: 50px;
}
</style>
