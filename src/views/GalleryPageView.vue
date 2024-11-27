<script setup></script>

<template>
  <div class="gallery">
    <img
      src="https://picsum.photos/id/1029/500/500"
      alt="a big park inside a modern city"
    />
    <img
      src="https://picsum.photos/id/1047/500/500"
      alt="a small street between building"
    />
    <img
      src="https://picsum.photos/id/1067/500/500"
      alt="seen from the sky of a big city"
    />
    <img
      src="https://picsum.photos/id/122/500/500"
      alt="a bridge in the night"
    />
  </div>
</template>

<style lang="scss" scoped>
.gallery {
  --s: 150px; /* control the size */
  --g: 8px; /* control the gap */

  display: grid;
  grid: auto-flow var(--s) / repeat(2, var(--s));
  gap: var(--g);
}
.gallery > img {
  width: 100%;
  aspect-ratio: 1;
  cursor: pointer;
  z-index: 0;
  transition: 0.25s, z-index 0s 0.25s;
}
.gallery > img:hover {
  width: calc(200% + var(--g));
  filter: grayscale(0);
  z-index: 1;
  --_c: 50%;
  transition: 0.4s, z-index 0s;
}
.gallery > img:nth-child(1) {
  clip-path: circle(var(--_c, 55% at 70% 70%));
  place-self: start;
}
.gallery > img:nth-child(2) {
  clip-path: circle(var(--_c, 55% at 30% 70%));
  place-self: start end;
}
.gallery > img:nth-child(3) {
  clip-path: circle(var(--_c, 55% at 70% 30%));
  place-self: end start;
}
.gallery > img:nth-child(4) {
  clip-path: circle(var(--_c, 55% at 30% 30%));
  place-self: end;
}

body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-content: center;
  background: #a8dba8;
}
</style>
