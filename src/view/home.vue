<template>
  <div class="flex justify-center">
    <div class="inline-flex" animate-fade-in :key="lang">
      <home-cn v-if="lang === 'cn'"></home-cn>
      <home-en v-else></home-en>
    </div>
  </div>
</template>
    
<script setup>
import { useLocalStorage } from "@vueuse/core";
import { computed } from "vue";
import homeCn from "@/components/homeCn.vue";
import homeEn from "@/components/homeEn.vue";
const lang = useLocalStorage("lang", "cn");
</script>
