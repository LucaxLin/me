<template>
  <div class="theNav" flex="~ justify-between" p4 b="b">
    <logo w8/>
    <div class="right" text-2xl>
      <span lk-base i-mdi:github mr4></span>
      <span
        i-carbon:awake
        dark:i-carbon:asleep
        lk-base
        @click="toggleDark"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { toggleDark } from "@/utils/toggleDark";
import logo from "@/components/logo.vue";
</script>

<style  scoped>
</style>

