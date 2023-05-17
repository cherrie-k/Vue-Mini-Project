<template>
  <div class="pa-6">
    <h2>인사~</h2>
    <p v-if="show">{{ message }}</p>
    <p v-else>메롱</p>

    <h2>카운터</h2>
    <div>{{ count }} 개</div>
    <button class="but" v-on:click="countUp">COUNTER</button>

    <h2>쇼핑리스트</h2>
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    // 데이터 보관
    return {
      show: true,
      message: "안녕!",
      count: 0,
      items: ["바나나", "베이컨", "요거트", "치즈"],
    };
  },
  methods: {
    // 메소드 정의
    countUp() {
      this.count++;
    },
  },
};
</script>

<style>
h2 {
  padding-top: 36px;
}
.but {
  background: lightblue;
  padding: 10px;
}
</style>
