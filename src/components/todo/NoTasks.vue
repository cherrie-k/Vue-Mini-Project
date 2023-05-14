<template>
  <div class="no-task d-flex flex-column align-center">
    <v-icon size="100" color="pink lighten-2">mdi-check</v-icon>
    <div class="text-h5 pink--text">No tasks!</div>
    <div class="text-caption pink--text">화면을 작게도 해보세요 :)</div>
  </div>
</template>

<style>
.no-task {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.45;
}
</style>
