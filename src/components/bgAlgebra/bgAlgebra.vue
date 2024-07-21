<template>
  <div class="algebra fixed top-0 left-0 w-screen h-screen z--1 op30">
    <canvas ref="algebra"></canvas>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Point from "./Point";
const algebra = ref(null);

const points = ref([]);

onMounted(() => {
  function initPoints() {
    for (let i = 0; i < 100; i++) {
      const p = new Point(ctx);
      p.draw();
      points.value.push(p);
    }
  }
  function drawLine(p1, p2) {
    const LINE_LENGTH = 10000;
    var dx = p1.x - p2.x;
    var dy = p1.y - p2.y;
    var dis2 = dx * dx + dy * dy;
    if (dis2 < 2 * LINE_LENGTH) {
      var t = (1.05 - dis2 / LINE_LENGTH) * 0.2;
      ctx.strokeStyle = "rgba(255,255,255," + t + ")";
      ctx.beginPath();
      ctx.lineWidth = 1.5;
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.closePath();
      ctx.stroke();
    }
    return;
  }
  function lineUp() {
    for (let i = 0; i < points.value.length; i++) {
      const p1 = points.value[i];
      for (let j = i + 1; j < points.value.length; j++) {
        const p2 = points.value[j];
        drawLine(p1, p2);
      }
    }
  }

  function frame() {
    ctx.clearRect(0, 0, algebra.value.width, algebra.value.height);
    points.value.forEach((p) => {
      p.move();
    });
    lineUp();
    requestAnimationFrame(frame);
  }
  algebra.value.width = window.innerWidth;
  algebra.value.height = window.innerHeight;
  const ctx = algebra.value.getContext("2d");
  initPoints();
  frame();
});
</script>

<style scoped>
</style>