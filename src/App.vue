<template>
  <div flex="~ col" h-full>
    <the-nav></the-nav>
    <div class="content" flex-1 px-7 py-10>
      <router-view animate-fade-in></router-view>
    </div>
  </div>
</template>
  
<script setup>
import theNav from "@/components/theNav.vue";
</script>
  
<style scoped>
</style>