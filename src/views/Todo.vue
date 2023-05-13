<!--template 태그는 컴포넌트의 템플릿 섹션 정의함. 여기서는, class="home"인 div로 구성-->
<template>
  <div class="home">
    <field-add-task />

    <list-tasks v-if="$store.state.tasks.length" />

    <no-tasks v-else />
  </div>
</template>

<script>
// script 태그 안에서 컴포넌트의 JavaScript 부분 정의
import FieldAddTask from "@/components/todo/FieldAddTask.vue";

export default {
  name: "Home",
  components: {
    "field-add-task": FieldAddTask,
    // 혹은 위의 import 문 없이 그냥 "field-add-task": require('@/components/todo/FieldAddTask.vue').default 해도 됨
    "list-tasks": require("@/components/todo/ListTasks.vue").default,
    "no-tasks": require("@/components/todo/NoTasks.vue").default,
  },
};
</script>
