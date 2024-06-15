<template>
  <div class="clock" @click="showCanvas = !showCanvas" cursor-pointer>
    <div class="clockCanvas" v-show="showCanvas">
      <canvas width="32" height="32" ref="clockCanvas"></canvas>
    </div>
    <div class="text" v-show="!showCanvas">
      {{ hour >= 10 ? hour : "0" + hour }} : {{ min >= 10 ? min : "0" + min }}
    </div>
  </div>
</template>
    
<script setup >
import { computed, onMounted, ref, watch } from "vue";
import dayjs from "dayjs";
import { useDark } from "@vueuse/core";
const hour = ref(dayjs().hour());
const min = ref(dayjs().minute());
const clockCanvas = ref(null);
const ctx = computed(() => clockCanvas.value.getContext("2d"));
const isDark = useDark();
const handColor = computed(() => (isDark.value ? "white" : "black"));
const showCanvas = ref(true);
onMounted(() => {
  updateTime();
  setInterval(updateTime, 1000);
});
watch(isDark, () => {
  updateTime();
});
function drawClock() {
  ctx.value.clearRect(0, 0, 32, 32);
}

function drawHands() {
  ctx.value.beginPath();
  ctx.value.moveTo(16, 16);
  ctx.value.lineTo(
    16 + 10 * Math.sin((hour.value * 30 + min.value * 0.5) * (Math.PI / 180)),
    16 - 10 * Math.cos((hour.value * 30 + min.value * 0.5) * (Math.PI / 180))
  );
  ctx.value.lineWidth = 2;
  ctx.value.strokeStyle = handColor.value;
  ctx.value.stroke();

  ctx.value.beginPath();
  ctx.value.moveTo(16, 16);
  ctx.value.lineTo(
    16 + 12 * Math.sin(min.value * 6 * (Math.PI / 180)),
    16 - 12 * Math.cos(min.value * 6 * (Math.PI / 180))
  );
  ctx.value.lineWidth = 1;
  ctx.value.strokeStyle = handColor.value;
  ctx.value.stroke();
}

function updateTime() {
  hour.value = dayjs().hour();
  min.value = dayjs().minute();
  drawClock();
  drawHands();
}
</script>
    
<style scoped>
.clock {
  font-family: Digital;
}
</style>
    