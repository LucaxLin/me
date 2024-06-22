<template>
  <plum v-show="!isDark"></plum>
  <bg-dot v-show="isDark"></bg-dot>
  <div flex="~ col" h-full>
    <the-nav></the-nav>
    <div class="content" flex-1 px-7 py-10>
      <router-view animate-fade-in></router-view>
    </div>
  </div>
</template>
  
<script setup>
import theNav from "@/components/theNav.vue";
import plum from "@/components/plum.vue";
import bgDot from "@/components/bgDot.vue";
import { useDark } from "@vueuse/core";
const isDark = useDark();
</script>
  
<style scoped>
</style>