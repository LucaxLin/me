<template>
  <div flex="~ justify-center ">
    <div class="w50%">
      <div class="lh-[2] mb4" flex="~ col">
        <span
          @click="$router.back()"
          class="transition-all-300 op-50 hover:op-100 cursor-pointer"
        >
          cd &nbsp; . . /
        </span>
      </div>
      <div class="school ml8">
        <span text-bold text-2xl class="lh-[2]">
          {{ lang === "en" ? "Bachlor" : "本科" }}
        </span>
        <ul ml8>
          <li inline-block lk-base @click="download('graduate')">
            · {{ lang === "en" ? "Graduation certificate" : "毕业证书" }}
          </li>
          <br />
          <li inline-block lk-base @click="download('proof')">
            · {{ lang === "en" ? "Proof of qualification" : "学历证明" }}
          </li>
        </ul>
      </div>
      <div class="school ml8 mt8">
        <span text-bold text-2xl class="lh-[2]">
          {{ lang === "en" ? "Work" : "工作" }}
        </span>
        <ul ml8>
          <li inline-block lk-base @click="download('JavaScript')">
            ·
            {{
              lang === "en"
                ? "Huawei software development competency certification (JavaScript)"
                : "华为软件开发能力认证专业级 (JavaScript)"
            }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
    
<script setup>
import { useLocalStorage } from "@vueuse/core";
const lang = useLocalStorage("lang", "cn");

function download(name) {
  const a = document.createElement("a");
  a.style.display = "none";
  a.href = `/certificate/${name}.jpg`;
  a.download = `${name}.jpg`;
  a.click();
  a.remove();
}
</script>
    
<style>
li {
  line-height: 2;
}
</style>