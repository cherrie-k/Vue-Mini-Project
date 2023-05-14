<template>
  <v-dialog
    ref="dialog"
    :value="true"
    :return-value.sync="date"
    persistent
    width="290px"
  >
    <v-date-picker color="red lighten-1" v-model="date" scrollable>
      <v-spacer></v-spacer>
      <v-btn @click="$emit('close')" text color="primary"> Cancel </v-btn>
      <v-btn @click="saveTask" text color="primary"> OK </v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script>
export default {
  props: ["task"],
  data() {
    return {
      date: null,
    };
  },
  methods: {
    saveTask() {
      let payload = {
        id: this.task.id,
        dueDate: this.date,
      };
      this.$store.dispatch("updateTaskDueDate", payload);
      this.$emit("close");
    },
  },
  mounted() {
    if (this.task.dueDate) {
      // 현재 설정돼있는 dueDatd을 this.date로 설정해서,
      // date picker 안에서 미리 그 dueDate를 마킹해두도록 하기
      this.date = this.task.dueDate;
    }
  },
};
</script>

<style></style>
