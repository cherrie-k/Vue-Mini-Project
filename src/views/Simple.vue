<template>
  <div class="pa-6">
    <h2>인사~</h2>
    <p v-if="show">{{ message }}</p>
    <p v-else>메롱</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      message: "안녕!",
    };
  },
};
</script>

<style>
h2 {
  padding-top: 36px;
}
</style>
