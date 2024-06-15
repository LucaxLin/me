<template>
  <div lk-base>
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        class="path1"
        d="M14.32,5.4C-2.14,54.17,79.65,73.68,89.71,15.22c5.7-37.16-35.11,45.45-43,61.52s-45.47,27-41.34,8.41c7.81-35.23,57.37,9.63,79.28,10.25,7.7.22,12-5,9.85-21.15"
        stroke="black"
        stroke-width="5"
        stroke-linecap="round"
      />
    </svg>
  </div>
</template>
    
<style scoped>
@media (prefers-reduced-motion) {
  .path1 {
    animation: none !important;
    stroke-dasharray: unset !important;
  }
}
@media print {
  .path1 {
    animation: none !important;
    stroke-dasharray: unset !important;
  }
}
@keyframes grow {
  0% {
    stroke-dashoffset: 1px;
    stroke-dasharray: 0 400px;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  40% {
    stroke-dasharray: 400px 0;
  }
  85% {
    stroke-dasharray: 400px 0;
  }
  95%,
  to {
    stroke-dasharray: 0 400px;
  }
}
.path1 {
  stroke-dashoffset: 1px;
  stroke-dasharray: 400px 0;
  animation: grow 10s ease forwards infinite;
  transform-origin: center;
  stroke: #303030;
  animation-delay: 0s;
}
.dark .path1 {
  stroke: #fdfdfd;
}
</style>