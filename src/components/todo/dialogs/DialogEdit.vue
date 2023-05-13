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
        <v-btn color="red darken-1" text @click="saveTask"> Save </v-btn>
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
  methods: {
    saveTask() {
      let payload = {
        id: this.task.id,
        title: this.taskTitle,
      };
      this.$store.commit("updateTaskTitle", payload);
      this.$emit("close");
    },
  },
  mounted() {
    this.taskTitle = this.task.title;
  },
};
</script>

<style></style>
