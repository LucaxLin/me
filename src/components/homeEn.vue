<template>
  <article class="text-#bbb lh-[2]">
    <div class="title" fw-bold text="3xl white" mb8>Lucas Lin</div>
    <div class="subTitle mb8">
      Hi, I'm Lucas Lin. A WEB developer who fanaticises discovering new things.
    </div>
    <!-- <div class="comp">
      Working at: <span button-link>FESCO Adecco (Huawei OD Project)</span>
    </div> -->
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
    <div class="skills mb8">
      Mastered at:
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
      <div class="title fw-bold mb8" text="2xl white">Working Experiments</div>
    </div>
  </article>
</template>
    
