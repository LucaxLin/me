<template>
  <div class="text-center">
    <div class="head" flex="~ justify-between">
      <div
        class="left"
        i-material-symbols:arrow-back
        text-2xl
        lk-base
        @click="$router.push('/')"
      ></div>
    </div>

    <div class="content flex justify-center">
      <img w-80 mr10 src="@/assets/certificate/graduate.jpg" alt="" />
      <img w-80 src="@/assets/certificate/proof.jpg" alt="" />
    </div>
  </div>
</template>
    
<script setup>
</script>
    
<style>
</style>