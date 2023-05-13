<template>
  <v-dialog :value="true" persistent max-width="290">
    <v-card>
      <v-card-title class="text-h5"> Edit todo? </v-card-title>
      <v-card-text
        >todo 내용을 수정하세요
        <v-text-field v-model="taskTitle" @keyup.enter="saveTask"
      /></v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="grey darken-1" text @click="$emit('close')">
          Cancel
        </v-btn>
        <!--taskTitle 내용 없을 땐 이 버튼을 disabled 처리-->
        <v-btn
          :disabled="!taskTitle || taskTitle === task.title"
          color="red darken-1"
          text
          @click="saveTask"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  // 부모로부터 전달받은 task props
  props: ["task"],
  data() {
    return {
      taskTitle: null,
    };
  },
  computed: {
    taskTitleInvalid() {
      return !this.taskTitle || this.taskTitle === this.task.title;
    },
  },
  methods: {
    saveTask() {
      if (!this.taskTitleInvalid) {
        let payload = {
          id: this.task.id,
          title: this.taskTitle,
        };
        this.$store.dispatch("updateTaskTitle", payload);
        this.$emit("close");
      }
    },
  },
  mounted() {
    this.taskTitle = this.task.title;
  },
};
</script>

<style></style>
