<template>
  <div class="skills mb8">
    {{ lang === "cn" ? "精通" : "Mastered at" }}:

    <span button-link>
      <span i-vscode-icons:file-type-html mr1></span>
      HTML
    </span>
    <span button-link>
      <span i-vscode-icons:file-type-js-official mr1></span>
      JavaScript
    </span>
    <span button-link>
      <span i-vscode-icons:file-type-css mr1></span>
      CSS
    </span>
    <span button-link>
      <span i-vscode-icons:file-type-unocss mr1></span>
      unocss
    </span>
    <span button-link>
      <span i-vscode-icons:file-type-vue mr1></span>
      VUE2/3
    </span>
    <span button-link>
      <span i-vscode-icons:file-type-vite mr1></span>
      Vite
    </span>
    <span button-link>
      <span i-vscode-icons:file-type-cypress mr1></span>
      Cypress
    </span>
  </div>
</template>
    
<script setup>
import { useLocalStorage } from "@vueuse/core";

const lang = useLocalStorage("lang", "cn");
</script>
    
<style>
</style>