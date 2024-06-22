<template>
  <div
    class="theCard"
    :class="{ 'p-2px': showBorder }"
    box-border
    b="~ transparent rd-xl"
    flex
    min-w-100
    min-h-50
    h-auto
    bg-base
    relative
    overflow-hidden
    z-0
  >
    <div
      class="inner"
      flex-1
      ref="theCard"
      :class="{ 'hover:cool-color-card-hilight': showGlow }"
      bg-base
      w-full
      backdrop-blur-200
      b="~ transparent rd-10px"
    >
      <slot></slot>
    </div>
    <div
      class="blob"
      :class="{
        'cool-card-b-0': colorSet === 0,
        'cool-card-b-1': colorSet === 1,
      }"
      absolute
      w250px
      h250px
      top-0
      left-0
      b-rd-rull
      filter-blur-40px
      z--1
    ></div>
    <div
      class="fblob"
      invisible
      absolute
      z--1
      top-0
      left-0
      w250px
      h250px
      b-rd-full
    ></div>
  </div>
</template>
  
<script setup>
import { ref } from "vue";

const theCard = ref(null);
const props = defineProps({
  showGlow: {
    default: true,
  },
  showBorder: {
    default: true,
  },
  colorSet: {
    default: 0,
  },
});
</script>
