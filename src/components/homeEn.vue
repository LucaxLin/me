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
        Major in:
        <span
          button-link
          button-link-hover
          @click="$router.push({ name: 'cert' })"
          >Pure Math</span
        >
      </div>
      <div class="minor">
        Minor in:
        <span
          button-link
          button-link-hover
          @click="$router.push({ name: 'cert' })"
          >Computational Science</span
        >
      </div>
    </div>
    <my-skills></my-skills>
    <div class="workingExp">
      <div class="title fw-bold mb8" text="2xl black dark:white">
        Working Experiments
      </div>
      <the-card>
        <div class="p4">
          <div class="title mb4" flex="~ justify-between items-center">
            <div class="left text-xl">FESCO Adecco (Huawei OD project)</div>
            <div class="right">2022/08 - now</div>
          </div>
          <div class="desc">What I do: 3 chip-testing-system</div>
        </div>
      </the-card>
    </div>
  </article>
</template>

<script setup>
import theCard from "@/components/theCard.vue";
import mySkills from "./mySkills.vue";
</script>

    
