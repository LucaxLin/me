<template>
  <button class="language" lk-base flex="~ items-center" @click="toggleLang">
    <div class="cn" v-show="lang === 'cn'" i-icon-park-outline:chinese></div>
    <div class="en" v-show="lang === 'en'" i-icon-park-outline:english></div>
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