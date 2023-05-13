<template>
  <v-dialog :value="true" persistent max-width="290">
    <v-card>
      <v-card-title class="text-h5"> Delete todo? </v-card-title>
      <v-card-text>todo를 삭제하시겠습니까?</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="grey darken-1" text @click="$emit('close')"> No </v-btn>
        <v-btn
          color="red darken-1"
          text
          @click="$store.dispatch('deleteTask', task.id)"
        >
          Yes
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  // 부모로부터 전달받은 task props
  props: ["task"],
};
</script>

<style></style>
