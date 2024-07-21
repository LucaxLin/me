
<template>
  <div
    class="imgViewer fixed top-10 left-0 w-full h-full flex justify-center items-center"
    :class="{ show: img }"
  >
    <div w-100 relative>
      <span
        absolute
        top-4
        right-4
        i-material-symbols:cancel-outline
        text-gray
        lk-base
        text-xl
        @click="close"
      ></span>
      <img :src="img" alt="" />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  document.addEventListener("keydown", handleEsc);
});
const props = defineProps({
  img: {
    default: null,
  },
});
const emits = defineEmits(["close"]);
function handleEsc({ key }) {
  if (key === "Escape" && props.img) {
    close();
  }
}
function close() {
  document.querySelector(".imgViewer").classList.remove("show");
  setTimeout(() => {
    emits("close");
  }, 300);
}
</script>

<style scoped>
.imgViewer {
  opacity: 0;
  z-index: -1;
  transition: all 0.3s ease-in-out;
}
.imgViewer.show {
  opacity: 1;
  z-index: 1;
}
</style>