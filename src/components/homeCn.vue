<template>
  <article class="lh-[2]" text="#555 dark:#bbb">
    <div class="title" fw-bold text="3xl black dark:white" mb8>林晨鑫</div>
    <div class="subTitle mb8">
      嗨，我是林晨鑫。一位热于发现新事物的前端开发者。
    </div>
    <div class="school mb8">
      毕业于:
      <span
        button-link
        button-link-hover
        @click="$router.push({ name: 'cert' })"
        title="位于澳大利亚维多利亚州墨尔本"
      >
        莫纳什大学
      </span>

      <div class="major">
        主修:
        <span
          button-link
          button-link-hover
          @click="$router.push({ name: 'cert' })"
          >纯数学</span
        >
      </div>
      <div class="minor">
        辅修:
        <span
          button-link
          button-link-hover
          @click="$router.push({ name: 'cert' })"
          >计算机科学</span
        >
      </div>
    </div>
    <my-skills></my-skills>

    <div class="workingExp">
      <div class="title fw-bold mb8" text="2xl black dark:white">工作经历</div>

      <the-card>111 </the-card>
    </div>
  </article>
</template>

<script setup>
import theCard from "@/components/theCard.vue";
import mySkills from "@/components/mySkills.vue";
</script>
    
