<template>
  <!--Vuetify 라이브러리에서 제공하는 v-list. flat attribute은 아무런 그림자나 elevation 없음을 의미.
    v-list에 v-if="tasks.length"를 더해서 tasks array에 무언가가 있어야지만 v-list를 띄우게 함-->
  <v-list class="pt-1" flat>
    <task v-for="task in $store.state.tasks" :key="task.id" :task="task" />
  </v-list>
</template>

<script>
export default {
  components: {
    task: require("@/components/todo/Task.vue").default,
  },
};
</script>
