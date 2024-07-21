<template>
  <div
    class="theNav"
    flex="~ justify-between items-center"
    w-full
    p4
    fixed
    top-0
  >
    <logo w8 @click="$router.push('/')" />
    <div class="right" text-2xl flex="~ 1 justify-end items-center">
      <!-- <div class="cert lk-base mr4 text-sm" @click="$router.push('/art')">
        <span v-if="lang == 'en'">Art</span>
        <span v-if="lang == 'cn'">艺术</span>
      </div> -->
      <div
        class="cert lk-base mr4"
        i-mdi:certificate-outline
        @click="$router.push('/cert')"
        :title="lang === 'cn' ? '证书' : 'Cert.'"
      ></div>
      <language mr4></language>
      <a
        lk-base
        i-mdi:github
        mr4
        href="https://github.com/LucaxLin/me"
        target="_blank"
      ></a>
      <span
        i-carbon:awake
        dark:i-carbon:asleep
        lk-base
        mr4
        @click="toggleDark"
      ></span>
      <clock></clock>
    </div>
  </div>
</template>

<script setup>
import { toggleDark } from "@/utils/toggleDark";
import logo from "@/components/logo.vue";
import clock from "@/components/clock.vue";
import language from "@/components/language.vue";
import { useLocalStorage } from "@vueuse/core";

const lang = useLocalStorage("lang", "cn");
</script>

<style  scoped>
</style>

