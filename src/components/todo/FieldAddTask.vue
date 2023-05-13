<!-- vue 친다음에 <vue> with default.vue 선택 </vue>-->
<template>
  <!--v-model은 데이터와 입력 요소를 양방향으로 바인딩하는 디렉티브임.
    사용하면 입력 요소의 값을 데이터에 바인딩하고, 데이터의 변경이 입력 요소에 반영되게 할 수 있음
    주로 상용자 입력을 받는 폼 요소(input, select, textarea)와 함께 사용
    v-model 디렉티브 사용하면 폼 요소의 값과 Vue 인스턴스의 데이터 속성이 자동으로 동기화됨-->
  <v-text-field
    v-model="newTaskTitle"
    @click:append="addTask"
    @keyup.enter="addTask"
    class="pa-3"
    outlined
    label="Add a new todo!"
    append-icon="mdi-plus"
    hide-details
    clearable
  ></v-text-field>
</template>

<script>
export default {
  data() {
    return {
      newTaskTitle: "" /* 새로 입력되는 task 값*/,
    };
  },

  methods: {
    addTask() {
      this.$store.commit("addTask", this.newTaskTitle);
      this.newTaskTitle = "";
      // newTaskTitle 다시 empty string으로 변환해주는 과정을 위해, Todo.vue에 이만큼의 addTask 코드는 남겨둠
    },
    /* doneTask와 
      deleteTask는 전부
      store의 index.js로 옮김 
    */
  },
};
</script>
