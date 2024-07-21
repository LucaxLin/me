<template>
  <article class="lh-[2]" text="#555 dark:#bbb">
    <div
      class="title"
      fw-bold
      text="3xl black dark:white"
      mb8
      lk-base
      @click="contactMe"
    >
      林晨鑫
    </div>
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

    <div class="workingExp" flex="~ col gap8">
      <div class="title fw-bold" text="2xl black dark:white">
        工作经历<span text="sm amber" pl2 fw-normal>(详细信息请看pdf简历)</span>
      </div>

      <the-card>
        <div class="p4">
          <div class="title mb4" flex="~ justify-between items-center">
            <div class="left text-xl">外企德科（华为OD项目）</div>
            <div class="right">2022/08 - 至今</div>
          </div>
          <div class="desc">参与项目：3个芯片测试平台前端项目</div>
          <div class="desc">代码框架： VUE2/3、Vite、qiankun</div>
        </div>
      </the-card>
      <the-card>
        <div class="p4">
          <div class="title mb4" flex="~ justify-between items-center">
            <div class="left text-xl">福建奇飞网络科技公司</div>
            <div class="right">2022/02 - 2022/07</div>
          </div>
          <div class="desc">参与项目：购物优惠平台</div>
          <div class="desc">代码框架： VUE2、uniApp</div>
        </div>
      </the-card>
    </div>
  </article>
</template>

<script setup>
import theCard from "@/components/theCard.vue";
import mySkills from "@/components/mySkills.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
function contactMe() {
  router.push({ name: "contactMe" });
}
</script>
    
