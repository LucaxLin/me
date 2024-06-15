<template>
  <button class="language" text-sm lk-base @click="toggleLang">
    <div class="cn" v-show="lang === 'cn'">中</div>
    <div class="en" v-show="lang === 'en'">En</div>
  </button>
</template>
    
<script setup>
import { useLocalStorage } from "@vueuse/core";

const lang = useLocalStorage("lang", "cn");
function toggleLang() {
  lang.value = lang.value === "cn" ? "en" : "cn";
  useLocalStorage("lang", lang.value);
}
</script>
    
<style scoped>
</style>