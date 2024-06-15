<template>
  <article class="text-#bbb lh-[2]">
    <div class="title" fw-bold text="3xl white" mb8>林晨鑫</div>
    <div class="subTitle mb8">
      嗨，我是林晨鑫。一位热于发现新事物的前端开发者。
    </div>
    <!-- <div class="comp">
      目前就职于： <span button-link>外企德科（华为OD项目）</span>
    </div> -->
    <div class="school mb8">
      毕业于:
      <span
        button-link
        button-link-hover
        @click="$router.push({ name: 'cert' })"
        title="位于澳大利亚维多利亚州墨尔本"
        >莫纳什大学</span
      >

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

    <div class="skills mb8">
      精通：
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
    <div class="workingExp">
      <div class="title fw-bold mb8" text="2xl white">工作经历</div>
    </div>
  </article>
</template>
    
