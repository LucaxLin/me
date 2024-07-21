<template>
  <bg-dot></bg-dot>
  <div flex="~ justify-center ">
    <div class="w50%">
      <div class="ml8">
        <span text-bold text-2xl class="lh-[2]">
          {{ lang === "en" ? "Bachlor" : "本科" }}
        </span>
        <ul ml8>
          <li inline-block lk-base @click="showImg(graduate)">
            · {{ lang === "en" ? "Graduation certificate" : "毕业证书" }}
          </li>
          <br />
          <li inline-block lk-base @click="showImg(proof)">
            · {{ lang === "en" ? "Proof of qualification" : "学历证明" }}
          </li>
        </ul>
      </div>
      <div class="ml8 mt8">
        <span text-bold text-2xl class="lh-[2]">
          {{ lang === "en" ? "Work" : "工作" }}
        </span>
        <ul ml8>
          <li inline-block lk-base @click="showImg(JavaScript)">
            ·
            {{
              lang === "en"
                ? "Huawei software development competency certification (JavaScript)"
                : "华为软件开发能力认证专业级 (JavaScript)"
            }}
          </li>
        </ul>
      </div>

      <div class="lh-[2] mt4" flex="~ col">
        <span
          @click="$router.back()"
          class="transition-all-300 lk-base cursor-pointer"
        >
          cd &nbsp; . . /
        </span>
      </div>
    </div>
  </div>
  <img-viewer :img="curImg" @close="curImg = null"></img-viewer>
</template>
    
<script setup>
import { useLocalStorage } from "@vueuse/core";
import bgDot from "@/components/bgDot.vue";
import imgViewer from "@/components/imgViewer.vue";
import graduate from "/certificate/graduate.jpg";
import JavaScript from "/certificate/JavaScript.jpg";
import proof from "/certificate/proof.jpg";
import { ref } from "vue";
const lang = useLocalStorage("lang", "cn");

const curImg = ref(null);

function showImg(img) {
  curImg.value = img;
}
</script>
    
<style>
li {
  line-height: 2;
}
</style>