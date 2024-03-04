<template>
  <section class="hero">
    <div class="container hero-container">
      <h1 class="hero__title">ПОВЕДЕНЧЕСКИЙ АУДИТ БЕЗОПАСНОСТИ</h1>
      <router-link :to="'/form-create'"
        ><el-button>перейти к бланку</el-button></router-link
      >
    </div>
  </section>
</template>

<script setup>
import { ElButton } from "element-plus";
</script>

<style>
.hero-container {
  min-height: calc(100vh - 50px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.hero__title {
  text-align: center;
  margin-bottom: 32px;
  font-size: 45px;
}
</style>
