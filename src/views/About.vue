<template>
  <div class="about pa-6">
    <h2>In This Vuetify Todo...</h2>
    <h3>YOU CAN</h3>
    <template>
      <v-container fluid>
        <p class="gray--text">{{ selected }}</p>
        <v-checkbox
          class="mb-n4"
          v-model="selected"
          label="Add, delete, edit todos"
          value="Add, delete, edit"
          color="red lighten-1"
        ></v-checkbox>
        <v-checkbox
          class="mb-n4"
          v-model="selected"
          label="Set due dates"
          value="Set date"
          color="red lighten-2"
        ></v-checkbox>
        <v-checkbox
          class="mb-n4"
          v-model="selected"
          label="Have data saved at local DB"
          value="save @ local DB"
          color="red lighten-3"
        ></v-checkbox>
        <v-checkbox
          class="mb-n4"
          v-model="selected"
          label="Good on both mobile and PC screen"
          value="mobile & PC"
          color="red lighten-4"
        ></v-checkbox>
        <v-checkbox
          class="mb-n4"
          v-model="selected"
          label="Reorder todos"
          value
          disabled
        ></v-checkbox>
        <v-checkbox
          class="mb-n4"
          v-model="selected"
          label="Search todos"
          value
          disabled
        ></v-checkbox>
        <v-checkbox
          class="mb-n4"
          v-model="selected"
          label="Display live date and time"
          value
          disabled
        ></v-checkbox>
      </v-container>
    </template>
    <p>And more is yet to come...!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: [
        "Add, delete, edit",
        "Set date",
        "save @ local DB",
        "mobile & PC",
      ],
    };
  },
};
</script>
