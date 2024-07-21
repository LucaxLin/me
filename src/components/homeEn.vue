<template>
  <article class="lh-[2]" text="#555 dark:#bbb">
    <div class="title" fw-bold text="3xl black dark:white" mb8>Lucas Lin</div>
    <div class="subTitle mb8">
      Hi, I'm Lucas Lin. A WEB developer who fanaticises discovering new things.
    </div>
    <div class="school mb8">
      Graduated from:
      <span
        button-link
        button-link-hover
        @click="$router.push({ name: 'cert' })"
        title="based in Melbourne, Victoria, Australia"
      >
        Monash University
      </span>

      <div class="major">
        Major:
        <span
          button-link
          button-link-hover
          @click="$router.push({ name: 'cert' })"
          >Pure Math</span
        >
      </div>
      <div class="minor">
        Minor:
        <span
          button-link
          button-link-hover
          @click="$router.push({ name: 'cert' })"
          >Computational Science</span
        >
      </div>
    </div>
    <my-skills></my-skills>
    <div class="workingExp" flex="~ col gap8">
      <div class="title fw-bold" text="2xl black dark:white">
        Working Experiments
        <span text="sm amber" pl2 fw-normal
          >(please see my pdf resume for more details)</span
        >
      </div>
      <the-card>
        <div class="p4">
          <div class="title mb4" flex="~ justify-between items-center">
            <div class="left text-xl">FESCO Adecco (Huawei OD project)</div>
            <div class="right">2022/08 - now</div>
          </div>
          <div class="desc">Projects: 3 chip-testing-systems</div>
          <div class="desc">structure: VUE2/3、Vite、qiankun</div>
        </div>
      </the-card>
      <the-card>
        <div class="p4">
          <div class="title mb4" flex="~ justify-between items-center">
            <div class="left text-xl">qifei tech</div>
            <div class="right">2022/02 - 2022/07</div>
          </div>
          <div class="desc">Projects: taobao-like shopping system</div>
          <div class="desc">structure: VUE2、uniApp</div>
        </div>
      </the-card>
    </div>
  </article>
</template>

<script setup>
import theCard from "@/components/theCard.vue";
import mySkills from "./mySkills.vue";
</script>

    
