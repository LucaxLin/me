<template>
  <plum v-show="!isDark"></plum>
  <bgAlgebra v-show="isDark"></bgAlgebra>
  <div flex="~ col" h-full>
    <the-nav></the-nav>
    <div class="content mt-16" flex-1 px-7 py-10>
      <router-view animate-fade-in></router-view>
    </div>
  </div>
</template>
  
<script setup>
import theNav from "@/components/theNav.vue";
import plum from "@/components/plum.vue";
import bgAlgebra from "@/components/bgAlgebra/bgAlgebra.vue";
import { useDark } from "@vueuse/core";
const isDark = useDark();
</script>
  
<style scoped>
</style>